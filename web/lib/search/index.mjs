import { parse } from "parse5";
import MiniSearch from "minisearch";
import { attr } from "../article/remark-article.mjs";
import { searchIndexOptions } from "./options.mjs";

const skippedMdx = new Set(["mdxjsEsm", "mdxFlowExpression", "mdxTextExpression", "code", "math", "inlineMath"]);
const skippedHtml = new Set(["head", "nav", "header", "footer", "script", "style", "math", "svg", "pre", "code", "noscript"]);
const clean = value => value.replace(/\s+/g, " ").trim();
const isHeading = node => /^h[1-6]$/.test(node.tagName ?? "");

function hasContent(node) {
  if (isHeading(node) || ["head", "nav", "header", "footer", "script", "style", "noscript"].includes(node.tagName)) return false;
  if (node.nodeName === "#text") return Boolean(node.value.trim());
  return (node.childNodes ?? []).some(hasContent);
}

function headingHasContent(node) {
  const siblings = node.parentNode?.childNodes ?? [];
  for (const sibling of siblings.slice(siblings.indexOf(node) + 1)) {
    if (isHeading(sibling) && Number(sibling.tagName[1]) <= Number(node.tagName[1])) break;
    if (hasContent(sibling)) return true;
  }
  return false;
}

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

function htmlText(node, omitTitle = false) {
  if (skippedHtml.has(node.tagName) || node.attrs?.some(attr => attr.name === "hidden") ||
      (omitTitle && isHeading(node) && (node.tagName === "h1" || !headingHasContent(node)))) return "";
  if (node.nodeName === "#text") return node.value;
  return (node.childNodes ?? []).map(child => htmlText(child, omitTitle)).join(" ");
}

export function legacySearchDocument(html, path, metadata = {}) {
  const tree = parse(html);
  let heading;
  let title;
  function walk(node) {
    if (!heading && node.tagName === "h1") heading = clean(htmlText(node));
    if (node.tagName === "title") title = clean((node.childNodes ?? []).map(child => child.value ?? "").join(" "));
    for (const child of node.childNodes ?? []) walk(child);
  }
  walk(tree);
  const body = metadata.summaryOnly ? metadata.description : clean(htmlText(tree, true));
  if (!body) return null;
  const url = `/${path}`;
  return { id: url, url, articleUrl: url, title: metadata.title || title || heading || path,
    heading: "", description: metadata.description || body.slice(0, 180), body };
}

export function pdfSearchDocuments(statistics) {
  const documents = [{ entry: statistics.overview, group: "数理统计" },
    ...statistics.groups.flatMap(group => group.entries.map(entry => ({ entry, group: group.title })))];
  const aliases = {
    "极大似然估计": "Maximum likelihood estimation (MLE)",
    "贝叶斯估计": "Bayesian estimation",
    "广义矩估计": "Generalized method of moments (GMM)",
    "Fisher打分法": "Fisher scoring",
    "EM 算法": "Expectation maximization",
    "Cox回归": "Cox regression",
  };
  return documents.map(({ entry, group }) => {
    const url = `/${entry.url}`;
    return { id: url, url, articleUrl: url, title: entry.title.endsWith("（PDF）") ? entry.title : `${entry.title} (PDF)`,
      heading: "", description: `${group}${aliases[entry.title] ? ` · ${aliases[entry.title]}` : ""}`,
      body: "" };
  });
}

export function createSearchIndex(documents) {
  const index = new MiniSearch(searchIndexOptions);
  index.addAll(documents);
  return JSON.stringify(index);
}
