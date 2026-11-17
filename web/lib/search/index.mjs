import { parse } from "parse5";
import MiniSearch from "minisearch";
import { attr } from "../article/remark-article.mjs";
import { searchIndexOptions } from "./options.mjs";

const skippedMdx = new Set(["mdxjsEsm", "mdxFlowExpression", "mdxTextExpression", "code", "math", "inlineMath"]);
const skippedHtml = new Set(["head", "nav", "header", "footer", "script", "style", "math", "svg", "pre", "code", "noscript"]);
const clean = value => value.replace(/\s+/g, " ").trim();

function mdxText(node) {
  if (skippedMdx.has(node.type) || node.data?.articleHeadingPermalink || node.data?.articleRef ||
      attr(node, "className") === "article-section-number" ||
      (node.name === "nav" && attr(node, "className") === "article-toc")) return "";
  if (["text", "inlineCode"].includes(node.type)) return node.value;
  const labels = ["title", "caption", "authors", "summary"].map(name => attr(node, name)).filter(Boolean);
  return [...labels, ...(node.children ?? []).map(mdxText)].join(" ");
}

export function articleSearchDocuments(post) {
  const articleUrl = `/blog/${post.slug}.html`;
  const common = { articleUrl, title: post.title, description: post.description };
  const documents = [];
  let section = { url: articleUrl, heading: "", parts: [] };
  function flush() {
    documents.push({ ...common, id: section.url, url: section.url,
      heading: section.heading, body: clean(section.parts.join(" ")) });
  }
  for (const node of post.tree.children) {
    const anchor = node.type === "heading" && node.data?.hProperties?.id;
    if (anchor && node.depth >= 2 && node.depth <= 4) {
      flush();
      section = { url: `${articleUrl}#${encodeURIComponent(anchor)}`, heading: clean(mdxText(node)), parts: [] };
    } else {
      section.parts.push(mdxText(node));
    }
  }
  flush();
  return documents;
}

function htmlText(node) {
  if (skippedHtml.has(node.tagName)) return "";
  if (node.nodeName === "#text") return node.value;
  return (node.childNodes ?? []).map(htmlText).join(" ");
}

export function legacySearchDocument(html, path) {
  const tree = parse(html);
  let heading;
  let title;
  function walk(node) {
    if (!heading && node.tagName === "h1") heading = clean(htmlText(node));
    if (node.tagName === "title") title = clean((node.childNodes ?? []).map(child => child.value ?? "").join(" "));
    for (const child of node.childNodes ?? []) walk(child);
  }
  walk(tree);
  const body = clean(htmlText(tree));
  if (!body) return null;
  const url = `/${path}`;
  return { id: url, url, articleUrl: url, title: title || heading || path,
    heading: "", description: body.slice(0, 180), body };
}

export function createSearchIndex(documents) {
  const index = new MiniSearch(searchIndexOptions);
  index.addAll(documents);
  return JSON.stringify(index);
}
