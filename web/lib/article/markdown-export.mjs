import { inlineMathText } from "./inline-math.mjs";
import { attr } from "./remark-article.mjs";
import GithubSlugger from "github-slugger";
import { unified } from "unified";
import remarkStringify from "remark-stringify";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";

const t = (value) => ({ type: "text", value: String(value) });
const para = (...children) => ({ type: "paragraph", children: children.flat() });
const strong = (value) => ({ type: "strong", children: inlineMathText(value) });
const heading = (depth, value) => ({ type: "heading", depth, children: [t(value)] });
const rule = () => ({ type: "thematicBreak" });
const link = (url, label) => ({ type: "link", url, children: [t(label)] });
const statementKinds = new Set(["Definition", "Theorem", "Lemma", "Proposition", "Corollary", "Example", "Remark"]);

function nodesOf(children, ctx) {
  return (children ?? []).flatMap((node) => convert(node, ctx));
}

function staticSection(name, children) {
  return [para(strong(name)), ...children];
}

function markdownFor(node, ctx) {
  const name = node.name;
  const id = attr(node, "id");
  const title = attr(node, "title");
  const number = attr(node, "number");
  const children = () => nodesOf(node.children, ctx);

  if (statementKinds.has(name)) {
    return staticSection(`${name} ${number}${title ? ` (${title})` : ""}.`, children());
  }
  switch (name) {
    case "Proof":
      return staticSection(`Proof${attr(node, "ofLabel") ? ` of ${attr(node, "ofLabel")}` : ""}.`, [...children(), para(t("□"))]);
    case "Equation": {
      const latex = attr(node, "latex");
      const math = (node.children ?? []).filter((child) => child.type === "math");
      if (latex !== undefined) return [{ type: "math", value: latex }, para(t(`(${number})`))];
      if (math.length !== 1) throw new Error("Equation requires exactly one display-math child");
      return [{ ...math[0] }, para(t(`(${number})`))];
    }
    case "Figure":
      return [...children(), para({ type: "emphasis", children: inlineMathText(`Figure ${number}. ${attr(node, "caption") ?? ""}`) })];
    case "Caption": {
      const contents = children();
      const label = { type: "emphasis", children: [t("Caption:")] };
      if (contents.length === 1 && contents[0].type === "paragraph") {
        return [para(label, t(" "), contents[0].children)];
      }
      return [para(label), ...contents];
    }
    case "Aside":
      return [{ type: "blockquote", children: staticSection(title ?? "Note", children()) }];
    case "Disclaimer":
      return [{ type: "blockquote", children: staticSection(title ?? "Disclaimer", children()) }];
    case "Disclosure":
      return staticSection(attr(node, "summary") ?? "Details", children());
    case "Steps": {
      const items = (node.children ?? []).filter((child) =>
        child.type === "mdxJsxFlowElement" && child.name === "Step",
      );
      if (items.length !== (node.children ?? []).filter((child) =>
        !(child.type === "text" && !child.value.trim()),
      ).length) {
        throw new Error("Steps only accepts Step children");
      }
      return [{ type: "list", ordered: true, spread: false, children: items.map((item) => ({
        type: "listItem", spread: false,
        children: staticSection(attr(item, "title") ?? "Step", nodesOf(item.children, ctx)),
      })) }];
    }
    case "Step":
      throw new Error("Step must be a child of Steps");
    case "Columns":
      return (node.children ?? []).flatMap((child, index) => index === 0
        ? convert(child, ctx)
        : [rule(), ...convert(child, ctx)]);
    case "Column":
    case "Tab":
    case "CodePanel":
      return children();
    case "Tabs":
    case "CodeGroup":
      return (node.children ?? []).flatMap((child) => [
        heading(3, attr(child, "label") ?? "Tab"), ...convert(child, ctx),
      ]);
    case "CodeBlock":
      return [{
        type: "code",
        lang: attr(node, "language") ?? "text",
        meta: attr(node, "filename"),
        value: attr(node, "code") ?? "",
      }];
    case "Plot": {
      const pairs = (attr(node, "points") ?? "").split(";")
        .map((pair) => pair.split(",").map(Number))
        .filter((pair) => pair.length === 2 && pair.every(Number.isFinite));
      return [
        para(strong(attr(node, "title") ?? "Plot")),
        {
          type: "table", align: ["right", "right"], children: [
            { type: "tableRow", children: [
              { type: "tableCell", children: [t(attr(node, "xLabel") ?? "x")] },
              { type: "tableCell", children: [t(attr(node, "yLabel") ?? "y")] },
            ] },
            ...pairs.map(([x, y]) => ({ type: "tableRow", children: [
              { type: "tableCell", children: [t(x)] },
              { type: "tableCell", children: [t(y)] },
            ] })),
          ],
        },
      ];
    }
    case "Footnote": {
      const identifier = `note-${number}`;
      ctx.footnotes.push({
        type: "footnoteDefinition",
        identifier,
        children: [para(...children().flatMap((entry) => entry.type === "paragraph" ? entry.children : [entry]))],
      });
      return [{ type: "footnoteReference", identifier }];
    }
    case "DemoFallback":
      return children();
    case "Demo": {
      const fallback = [];
      function findFallback(current) {
        if (current.name === "DemoFallback") fallback.push(current);
        else for (const child of current.children ?? []) findFallback(child);
      }
      for (const child of node.children ?? []) findFallback(child);
      if (!fallback.length) throw new Error("Every Demo requires a DemoFallback for the Markdown export");
      return [
        heading(3, attr(node, "title") ?? "Interactive demonstration"),
        ...fallback.flatMap((child) => convert(child, ctx)),
        para(link(`${ctx.siteOrigin ?? ""}/blog/${ctx.slug}`, "Open the interactive demonstration")),
      ];
    }
    case "Counter":
      return [para(t(attr(node, "description") ?? "Interactive counter."))];
    case "SineFrequency":
      return [para(t("For u_n(x) = sin(nπx), the ratio of the L² norm to the derivative norm is 1/(nπ)."))];
    case "EndOfArticle":
      return [rule()];
    case "Bibliography":
      return [heading(2, "References"), ...children()];
    case "BibItem": {
      const authors = attr(node, "authors") ?? "";
      const work = attr(node, "title") ?? "";
      const year = attr(node, "year");
      const url = attr(node, "url");
      const label = attr(node, "citationLabel");
      return [para(t(`${label} ${authors}. ${work}${year ? ` (${year})` : ""}.`), ...(url ? [t(" "), link(url, url)] : []))];
    }
    default:
      // HTML phrasing tags can appear in ordinary authored MDX; preserve their content.
      if (["span", "strong", "em", "small", "div", "section", "nav"].includes(name)) return children();
      if (name === "a") return [link(attr(node, "href") ?? "", (node.children ?? []).map((c) => c.value ?? "").join(""))];
      if (name === "br") return [t(" ")];
      throw new Error(`Component <${name}> has no Markdown export rule`);
  }
}

function convert(node, ctx) {
  if (node.type === "mdxjsEsm") return [];
  if (node.type === "link" && node.data?.articleHeadingPermalink) return [];
  // HTML headings link their title to the section; Markdown keeps plain heading text.
  if (node.type === "link" && node.data?.articleHeadingTextLink) return nodesOf(node.children, ctx);
  if (node.type === "link" && ctx.headingLinks.has(node.url)) {
    return [{ ...node, url: ctx.headingLinks.get(node.url), children: nodesOf(node.children, ctx) }];
  }
  if (node.type === "mdxFlowExpression" || node.type === "mdxTextExpression") {
    throw new Error("Dynamic MDX expressions require a static Markdown representation");
  }
  if (node.type === "mdxJsxFlowElement" || node.type === "mdxJsxTextElement") {
    return markdownFor(node, ctx);
  }
  if (node.type === "link" && node.data?.articleRef) {
    // Plain Markdown keeps the human-readable reference label, without a fragile HTML anchor.
    return [t(node.children.map((child) => child.value ?? "").join(""))];
  }
  if (!Array.isArray(node.children)) return [node];
  return [{ ...node, children: nodesOf(node.children, ctx) }];
}

export function exportArticle(tree, meta, slug, { includeHeader = true, siteOrigin } = {}) {
  // HTML anchors omit display numbers, while plain Markdown renderers derive slugs
  // from the visible numbered headings. Re-point the TOC to the Markdown slugs.
  const slugger = new GithubSlugger();
  const headingLinks = new Map();
  function headingText(node) {
    if (node.data?.articleHeadingPermalink) return "";
    if (["text", "inlineCode", "inlineMath"].includes(node.type)) return node.value ?? "";
    return (node.children ?? []).map(headingText).join("");
  }
  function collectHeadings(node) {
    if (node.type === "heading") {
      const original = node.data?.hProperties?.id;
      const markdown = slugger.slug(headingText(node).trim());
      if (original) headingLinks.set(`#${original}`, `#${markdown}`);
    }
    for (const child of node.children ?? []) collectHeadings(child);
  }
  collectHeadings(tree);
  const ctx = { slug, siteOrigin, footnotes: [], headingLinks };
  const converted = nodesOf(tree.children, ctx);
  if (includeHeader) converted.unshift(
    heading(1, meta.title),
    para(t(meta.description)),
    para(t(`Created: ${meta.created}; Modified: ${meta.modified}; Categories: ${meta.categories.join(", ")}; Tags: ${meta.tags.join(", ")}.`)),
  );
  converted.push(...ctx.footnotes);
  if (meta.titleNote) converted.push(para(strong("Title note."), t(` ${meta.titleNote.trim()}`)));
  const serializer = unified().use(remarkStringify).use(remarkGfm).use(remarkMath);
  return serializer.stringify({ type: "root", children: converted });
}
