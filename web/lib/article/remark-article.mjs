import GithubSlugger from "github-slugger";

// Shared build-time semantic pass for both MDX compilation and plain Markdown export.
// All labels are computed from the article AST, not React state.
const statementKinds = new Set(["Definition", "Theorem", "Lemma", "Proposition", "Corollary"]);
const referenceKinds = new Set([
  ...statementKinds, "Example", "Remark", "Equation", "Figure", "Footnote", "BibItem",
]);

export function attr(node, name) {
  const field = node.attributes?.find((entry) => entry.type === "mdxJsxAttribute" && entry.name === name);
  if (!field) return undefined;
  if (typeof field.value === "string") return field.value;
  if (field.value?.type === "mdxJsxAttributeValueExpression") {
    const expr = field.value.data?.estree?.body?.[0]?.expression;
    if (expr?.type === "Literal" && ["string", "number", "boolean"].includes(typeof expr.value)) {
      return String(expr.value);
    }
  }
  return field.value === null ? "true" : undefined;
}

function setAttr(node, name, value) {
  node.attributes ??= [];
  node.attributes = node.attributes.filter((field) => field.name !== name);
  node.attributes.push({ type: "mdxJsxAttribute", name, value: String(value) });
}

export function walk(node, visit) {
  visit(node);
  if (Array.isArray(node.children)) for (const child of node.children) walk(child, visit);
}

function plainText(node) {
  const values = [];
  walk(node, (part) => {
    if (["text", "inlineCode", "inlineMath"].includes(part.type) && typeof part.value === "string") {
      values.push(part.value);
    }
  });
  return values.join(" ").replace(/\s+/g, " ").trim();
}

// Do not generate an anchor around an existing link in a heading.
function containsLink(node) {
  if (["link", "linkReference"].includes(node.type) ||
      (node.type === "mdxJsxTextElement" && node.name === "a")) return true;
  return node.children?.some(containsLink) ?? false;
}

function headingNumberingEnabled(tree) {
  for (const block of tree.children ?? []) {
    if (block.type !== "mdxjsEsm") continue;
    for (const entry of block.data?.estree?.body ?? []) {
      if (entry.type !== "ExportNamedDeclaration" || entry.declaration?.type !== "VariableDeclaration") continue;
      for (const declaration of entry.declaration.declarations ?? []) {
        if (declaration.id?.name !== "meta" || declaration.init?.type !== "ObjectExpression") continue;
        const option = declaration.init.properties.find(
          (item) => item.type === "Property" && (item.key?.name ?? item.key?.value) === "numberHeadings",
        );
        if (!option) return false;
        if (option.value?.type !== "Literal" || typeof option.value.value !== "boolean") {
          throw new Error('Article meta.numberHeadings must be true or false');
        }
        return option.value.value;
      }
    }
  }
  return false;
}

function semanticLabel(type, number) {
  if (type === "Footnote") return number;
  if (type === "Equation") return `Equation (${number})`;
  return `${type} ${number}`;
}

export default function remarkArticle() {
  return (tree, file) => {
    let section = 0;
    let subsection = 0;
    let subsubsection = 0;
    const numberHeadings = headingNumberingEnabled(tree);
    let footnote = 0;
    const counters = new Map();
    const refs = new Map();
    const slugger = new GithubSlugger();
    const headings = [];

    walk(tree, (node) => {
      if (node.type === "heading") {
        const label = plainText(node);
        const tocLabel = [];
        walk(node, (part) => {
          if (part.type === "inlineMath") tocLabel.push({ ...part });
          if (part.type === "text" || part.type === "inlineCode") {
            tocLabel.push({ type: "text", value: part.value });
          }
        });
        const slug = slugger.slug(label); // Anchor excludes the optional display number.
        let number;
        if (node.depth === 2) {
          section += 1;
          subsection = 0;
          subsubsection = 0;
          counters.clear();
          number = String(section);
        } else if (node.depth === 3) {
          subsection += 1;
          subsubsection = 0;
          number = `${Math.max(section, 1)}.${subsection}`;
        } else if (node.depth === 4) {
          subsubsection += 1;
          number = `${Math.max(section, 1)}.${Math.max(subsection, 1)}.${subsubsection}`;
        }
        const display = numberHeadings && number ? `${number} ${label}` : label;
        if (numberHeadings && number) {
          node.children.unshift(
            {
              type: "mdxJsxTextElement",
              name: "span",
              attributes: [{ type: "mdxJsxAttribute", name: "className", value: "article-section-number" }],
              children: [{ type: "text", value: number }],
            },
            { type: "text", value: " " },
          );
        }
        node.data ??= {};
        node.data.hProperties = { ...(node.data.hProperties ?? {}), id: slug };
        if (containsLink(node)) {
          // Preserve authored links instead of producing invalid nested anchors.
          node.children.push({
            type: "link",
            url: `#${slug}`,
            title: `Permalink to ${display}`,
            children: [{ type: "text", value: "#" }],
            data: { articleHeadingPermalink: true, hProperties: { className: ["article-heading-anchor"], "aria-label": `Permalink to ${display}` } },
          });
        } else {
          node.children = [{
            type: "link",
            url: `#${slug}`,
            children: node.children,
            data: { articleHeadingTextLink: true, hProperties: { className: ["article-heading-link"] } },
          }];
        }
        if (node.depth >= 2 && node.depth <= 4) headings.push({ tocLabel, number: numberHeadings ? number : undefined, slug, depth: node.depth });
      }
      if (!["mdxJsxFlowElement", "mdxJsxTextElement"].includes(node.type)) return;
      const kind = node.name;
      if (!referenceKinds.has(kind)) return;

      const id = attr(node, "id");
      if (!id || !/^[a-z][a-z0-9-]*$/.test(id)) {
        throw new Error(`${kind} requires a stable lowercase id in ${file?.path ?? "article"}`);
      }
      if (refs.has(id)) throw new Error(`Duplicate article anchor: ${id}`);
      if (kind === "BibItem") {
        const authors = attr(node, "authors");
        const title = attr(node, "title");
        const author = attr(node, "shortAuthor")?.trim() || authors || title;
        const label = `[${[author, attr(node, "year")].filter(Boolean).join(" ")}]`;
        const preview = [label, authors, title].filter(Boolean).join(" — ");
        setAttr(node, "citationLabel", label);
        refs.set(id, { kind, label, preview });
        return;
      }

      const key = statementKinds.has(kind) ? "statement" : kind;
      const next = (counters.get(key) ?? 0) + 1;
      counters.set(key, next);
      const number = kind === "Footnote" ? String(++footnote) : `${Math.max(section, 1)}.${next}`;
      setAttr(node, "number", number);
      const label = semanticLabel(kind, number);
      const preview = [label, attr(node, "title"), plainText(node)]
        .filter(Boolean).join(" — ").slice(0, 260);
      refs.set(id, { kind, label, preview });
    });

    function resolve(nodes) {
      for (let index = 0; index < nodes.length; index++) {
        const node = nodes[index];
        if (["mdxJsxFlowElement", "mdxJsxTextElement"].includes(node.type)) {
          if (node.name === "TableOfContents") {
            const items = [];
            const parents = new Map();
            for (const item of headings) {
              const label = item.number ? [
                {
                  type: "mdxJsxTextElement",
                  name: "span",
                  attributes: [{ type: "mdxJsxAttribute", name: "className", value: "article-section-number" }],
                  children: [{ type: "text", value: item.number }],
                },
                { type: "text", value: " " },
                ...item.tocLabel,
              ] : item.tocLabel;
              const entry = { type: "listItem", spread: false, children: [
                { type: "paragraph", children: [{ type: "link", url: `#${item.slug}`, children: label }] },
              ] };
              const ancestors = [...parents.entries()].filter(([depth]) => depth < item.depth);
              const parent = ancestors.length ? ancestors[ancestors.length - 1][1] : null;
              if (parent) {
                let nested = parent.children.find((child) => child.type === "list");
                if (!nested) {
                  nested = { type: "list", ordered: false, spread: false, children: [] };
                  parent.children.push(nested);
                }
                nested.children.push(entry);
              } else {
                items.push(entry);
              }
              for (const depth of parents.keys()) if (depth >= item.depth) parents.delete(depth);
              parents.set(item.depth, entry);
            }
            nodes[index] = { type: "mdxJsxFlowElement", name: "nav", attributes: [
              { type: "mdxJsxAttribute", name: "className", value: "article-toc" },
              { type: "mdxJsxAttribute", name: "aria-label", value: "Table of contents" },
            ], children: [
              { type: "paragraph", children: [{ type: "strong", children: [{ type: "text", value: "Contents" }] }] },
              { type: "list", ordered: false, spread: false, children: items },
            ] };
            continue;
          }
          if (node.name === "Ref" || node.name === "Citation") {
            const id = attr(node, "to");
            const target = refs.get(id);
            if (!target) throw new Error(`Unresolved article reference "${id}" in ${file?.path ?? "article"}`);
            if (node.name === "Citation" && target.kind !== "BibItem") {
              throw new Error(`Citation "${id}" must point to a BibItem`);
            }
            nodes[index] = {
              type: "link",
              url: `#${id}`,
              title: target.preview,
              children: [{ type: "text", value: target.label }],
              data: { articleRef: true },
            };
            continue;
          }
          if (node.name === "Proof" && attr(node, "of")) {
            const id = attr(node, "of");
            const target = refs.get(id);
            if (!target) throw new Error(`Unresolved proof reference "${id}"`);
            setAttr(node, "ofLabel", target.label);
          }
        }
        if (Array.isArray(node.children)) resolve(node.children);
      }
    }
    resolve(tree.children);
  };
}
