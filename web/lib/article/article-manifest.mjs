// Shared build-time metadata parser for every article representation.
function literal(node) {
  if (node?.type === "Literal") return node.value;
  if (node?.type === "ArrayExpression") return node.elements.map(literal);
  if (node?.type === "ObjectExpression") {
    return Object.fromEntries(node.properties.map((entry) => {
      if (entry.type !== "Property" || entry.computed || entry.method || entry.shorthand) {
        throw new Error("Article metadata must use literal object properties");
      }
      return [entry.key.name ?? entry.key.value, literal(entry.value)];
    }));
  }
  throw new Error("Article metadata must contain static literals");
}

export function extractMeta(tree) {
  const found = [];
  for (const block of tree.children ?? []) {
    if (block.type !== "mdxjsEsm") continue;
    for (const entry of block.data?.estree?.body ?? []) {
      if (entry.type !== "ExportNamedDeclaration" || entry.declaration?.type !== "VariableDeclaration") continue;
      for (const declaration of entry.declaration.declarations ?? []) {
        if (declaration.id?.name === "meta") found.push(literal(declaration.init));
      }
    }
  }
  if (found.length !== 1) throw new Error("Article must export exactly one literal meta object");
  return found[0];
}

export function validatePost(slug, meta) {
  const label = `Article ${slug}`;
  if (!/^[a-z0-9-]+$/.test(slug) || ["md", "categories", "private"].includes(slug)) {
    throw new Error(`${label}: invalid or reserved slug`);
  }
  if (meta === null || typeof meta !== "object" || Array.isArray(meta)) {
    throw new Error(`${label}: meta must be an object`);
  }
  if (typeof meta.id !== "string" || !/^[A-Z0-9]{5}$/.test(meta.id)) {
    throw new Error(`${label}: id must match [A-Z0-9]{5}`);
  }
  for (const field of ["title", "description"]) {
    if (typeof meta[field] !== "string" || !meta[field].trim()) {
      throw new Error(`${label}: ${field} must be a nonempty string`);
    }
  }
  if (meta.titleNote !== undefined && (typeof meta.titleNote !== "string" || !meta.titleNote.trim())) {
    throw new Error(`${label}: titleNote must be a nonempty string`);
  }
  for (const field of ["created", "modified"]) {
    if (typeof meta[field] !== "string" ||
        !/^\d{4}-\d{2}-\d{2}$/.test(meta[field]) ||
        Number.isNaN(Date.parse(`${meta[field]}T00:00:00Z`))) {
      throw new Error(`${label}: invalid ${field} date`);
    }
  }
  if (meta.modified < meta.created) throw new Error(`${label}: modified precedes created`);
  if (!["draft", "updating", "finished"].includes(meta.status)) {
    throw new Error(`${label}: invalid status`);
  }
  for (const field of ["categories", "tags"]) {
    if (!Array.isArray(meta[field]) ||
        !meta[field].every((entry) => typeof entry === "string" && /^[a-z0-9-]+$/.test(entry))) {
      throw new Error(`${label}: ${field} must be an array of lowercase slugs`);
    }
  }
  for (const field of ["numberHeadings", "ratingEligible"]) {
    if (meta[field] !== undefined && typeof meta[field] !== "boolean") {
      throw new Error(`${label}: ${field} must be boolean`);
    }
  }
  if (meta.password !== undefined && meta.password !== null &&
      (typeof meta.password !== "string" || !meta.password.trim())) {
    throw new Error(`${label}: password must be null or a nonempty string`);
  }
  const { password, ...publicMeta } = meta;
  return { slug, ...publicMeta, protected: typeof password === "string" };
}

export function validateManifest(posts) {
  const ids = new Set();
  const slugs = new Set();
  for (const post of posts) {
    if (ids.has(post.id)) throw new Error(`Duplicate article ID: ${post.id}`);
    if (slugs.has(post.slug)) throw new Error(`Duplicate article slug: ${post.slug}`);
    ids.add(post.id);
    slugs.add(post.slug);
  }
  return posts;
}
