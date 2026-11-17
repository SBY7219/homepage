import { createElement as h, Fragment } from "react";
import katex from "katex";
import { inlineMathText } from "./article/inline-math.mjs";

function inline(text = "") {
  return inlineMathText(text).map((part, index) => part.type === "inlineMath"
    ? h("span", { key: index, dangerouslySetInnerHTML: {
      __html: katex.renderToString(part.value, { throwOnError: false, trust: false }),
    } })
    : part.value);
}

function statement(kind) {
  return function Statement({ id, number, title, children }) {
    return h("section", { id, className: "article-statement" },
      h("p", { className: "article-statement-label" },
        h("a", { href: `#${id}` }, `${kind} ${number}`),
        title && h(Fragment, null, " (", ...inline(title), ")")),
      children);
  };
}

function Proof({ id, of, ofLabel, collapsible, children }) {
  const label = ofLabel ? `Proof of ${ofLabel}` : "Proof";
  const title = of ? h("a", { href: `#${of}` }, label) : label;
  const content = h("div", null, children,
    h("p", { className: "article-qed", "aria-label": "End of proof" }, "□"));
  return collapsible
    ? h("details", { id, className: "article-proof", open: true }, h("summary", null, title), content)
    : h("section", { id, className: "article-proof" }, h("p", null, h("strong", null, title)), content);
}

function Equation({ id, number, latex, children }) {
  const content = latex === undefined ? children : h("span", {
    dangerouslySetInnerHTML: {
      __html: katex.renderToString(latex, { displayMode: true, throwOnError: false, trust: false }),
    },
  });
  return h("figure", { id, className: "article-equation" },
    h("div", null, content),
    h("figcaption", null, h("a", { href: `#${id}`, "aria-label": `Equation ${number}` }, `(${number})`)));
}

function Figure({ id, number, caption, children }) {
  return h("figure", { id }, children,
    h("figcaption", null, h("a", { href: `#${id}` }, `Figure ${number}.`), " ", ...inline(caption)));
}

function Aside({ title, children }) {
  return h("aside", { className: "article-aside" }, title && h("strong", null, ...inline(title)), children);
}

function Disclosure({ summary, open = false, children }) {
  return h("details", { open, className: "article-disclosure" }, h("summary", null, summary), children);
}

function Step({ title, children }) {
  return h("li", null, title && h("strong", null, ...inline(title)), children);
}

function Tab({ label, children }) {
  return h("section", { className: "article-tab" }, h("h3", null, label), children);
}

function CodeBlock({ language = "text", filename, code = "" }) {
  return h("figure", null,
    filename && h("figcaption", null, filename),
    h("pre", null, h("code", { className: `language-${language}` }, code)));
}

function Footnote({ id, number, children }) {
  return h("span", { id, className: "article-inline-note" },
    h("sup", null, `[${number}]`), " ", h("span", { role: "note" }, children));
}

function BibItem({ id, citationLabel, authors, title, year, url }) {
  return h("li", { id }, h("strong", null, citationLabel), " ", authors, ". ",
    h("em", null, title), year && ` (${year})`, ".",
    url && h(Fragment, null, " ", h("a", { href: url }, url)));
}

function Plot({ title, points = "", xLabel = "x", yLabel = "y" }) {
  const rows = points.split(";").filter(Boolean).map(pair => pair.split(",").map(Number));
  if (!rows.length || rows.some(row => row.length !== 2 || row.some(value => !Number.isFinite(value)))) {
    throw new Error("Plot requires finite x,y pairs separated by semicolons");
  }
  const xs = rows.map(row => row[0]);
  const ys = rows.map(row => row[1]);
  const minX = Math.min(...xs), minY = Math.min(...ys);
  const spanX = Math.max(...xs) - minX || 1;
  const spanY = Math.max(...ys) - minY || 1;
  const path = rows.map(([x, y]) => `${32 + (x - minX) / spanX * 416},${208 - (y - minY) / spanY * 176}`).join(" ");
  return h("figure", null,
    h("figcaption", null, title),
    h("svg", { viewBox: "0 0 480 240", role: "img", "aria-label": title ?? `${yLabel} against ${xLabel}` },
      h("path", { d: "M32 24V208H456", fill: "none", stroke: "currentColor" }),
      h("polyline", { points: path, fill: "none", stroke: "currentColor", strokeWidth: 2 })),
    h("details", null, h("summary", null, "Data"),
      h("table", null, h("thead", null, h("tr", null, h("th", null, xLabel), h("th", null, yLabel))),
        h("tbody", null, rows.map(([x, y], index) => h("tr", { key: index }, h("td", null, x), h("td", null, y)))))));
}

export const components = {
  Definition: statement("Definition"), Theorem: statement("Theorem"), Lemma: statement("Lemma"),
  Proposition: statement("Proposition"), Corollary: statement("Corollary"),
  Example: statement("Example"), Remark: statement("Remark"),
  Proof, Equation, Figure, Aside, Disclosure, Step, Tab, CodeBlock, Footnote, BibItem, Plot,
  Caption: ({ children }) => h("figcaption", null, children),
  Disclaimer: ({ title = "Disclaimer", children }) => h(Aside, { title }, children),
  Steps: ({ children }) => h("ol", { className: "article-steps" }, children),
  Columns: ({ children }) => h("div", { className: "article-columns" }, children),
  Column: ({ children }) => h("div", null, children),
  Tabs: ({ children }) => h("div", { className: "article-tabs" }, children),
  CodeGroup: ({ children }) => h("div", { className: "article-code-group" }, children),
  CodePanel: Tab,
  EndOfArticle: () => h("hr"),
  Bibliography: ({ children }) => h("section", { className: "article-bibliography", "aria-label": "References" },
    h("h2", null, "References"), h("ul", null, children)),
};
