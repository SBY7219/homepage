import test from "node:test";
import assert from "node:assert/strict";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import remarkArticle, { attr, walk } from "./remark-article.mjs";
import { exportArticle } from "./markdown-export.mjs";

const processor = unified()
  .use(remarkParse)
  .use(remarkMdx)
  .use(remarkMath)
  .use(remarkGfm)
  .use(remarkArticle);

const meta = {
  title: "Test", description: "Test article", created: "2026-10-30",
  modified: "2026-10-30", categories: ["examples"], tags: [],
};

async function compile(source) {
  return processor.run(processor.parse(source));
}

test("section-based numbering and forward references are build-time resolved", async () => {
  const tree = await compile(`## Introduction
See <Ref to="later" /> and <Ref to="eqn" />.

<Theorem id="earlier">Statement</Theorem>
<Lemma id="later">Proof ingredient</Lemma>
<Equation id="eqn" latex="x=1" />

## Other section
<Proposition id="third">Result</Proposition>
`);
  const nodes = [];
  walk(tree, (node) => { if (["Theorem", "Lemma", "Equation", "Proposition"].includes(node.name)) nodes.push(node); });
  assert.equal(attr(nodes[0], "number"), "1.1");
  assert.equal(attr(nodes[1], "number"), "1.2");
  assert.equal(attr(nodes[2], "number"), "1.1");
  assert.equal(attr(nodes[3], "number"), "2.1");
  const md = exportArticle(tree, meta, "test");
  assert.match(md, /Theorem 1\.1/);
  assert.match(md, /Lemma 1\.2/);
  assert.match(md, /Equation \(1\.1\)/);
  assert.match(md, /Proposition 2\.1/);
  assert.doesNotMatch(md, /<Theorem|<Equation/);
});

test("table of contents uses stable generated heading anchors and references carry previews", async () => {
  const tree = await compile(`<TableOfContents />

## Some Statement

See <Ref to="lemma" />.

<Lemma id="lemma" title="Local result">
This is the content.
</Lemma>

### Proof details

#### When $x=0$
`);
  const nav = tree.children.find((node) => node.name === "nav");
  assert.ok(nav);
  const heading = tree.children.find((node) => node.type === "heading");
  assert.equal(heading.children[0].type, "link");
  assert.equal(heading.children[0].url, "#some-statement");
  assert.equal(heading.children[0].data.articleHeadingTextLink, true);
  const numbers = [];
  walk(nav, (node) => {
    if (node.name === "span" && attr(node, "className") === "article-section-number") numbers.push(node);
  });
  assert.equal(numbers.length, 0);
  const markdown = exportArticle(tree, meta, "test");
  assert.match(markdown, /\[Some Statement\]\(#some-statement\)/);
  assert.match(markdown, /\[Proof details\]\(#proof-details\)/);
  assert.match(markdown, /\[When \$x=0\$\]\(#when-x0\)/);
  let reference;
  walk(tree, (node) => { if (node.type === "link" && node.url === "#lemma") reference = node; });
  assert.match(reference?.title ?? "", /Local result/);
});

test("opt-in heading numbering keeps stable HTML anchors and correct Markdown TOC links", async () => {
  const tree = await compile(`export const meta = { numberHeadings: true };

<TableOfContents />

## Main result

### Background

#### Technical detail

## Further results
`);
  const headings = tree.children.filter((node) => node.type === "heading");
  assert.equal(headings.length, 4);
  assert.equal(headings[0].data.hProperties.id, "main-result");
  for (const [heading, number] of headings.map((h, i) => [h, ["1", "1.1", "1.1.1", "2"][i]])) {
    const titleLink = heading.children[0];
    assert.equal(titleLink.type, "link");
    assert.equal(titleLink.data.articleHeadingTextLink, true);
    assert.equal(titleLink.url, `#${heading.data.hProperties.id}`);
    assert.equal(titleLink.children[0].name, "span");
    assert.equal(attr(titleLink.children[0], "className"), "article-section-number");
    assert.equal(titleLink.children[0].children[0].value, number);
    assert.equal(titleLink.children[1].value, " ");
  }
  assert.equal(headings[1].data.hProperties.id, "background");
  assert.equal(headings[2].data.hProperties.id, "technical-detail");
  const toc = tree.children.find((node) => node.name === "nav");
  const tocNumbers = [];
  walk(toc, (node) => {
    if (node.name === "span" && attr(node, "className") === "article-section-number") {
      tocNumbers.push(node.children[0].value);
    }
  });
  assert.deepEqual(tocNumbers, ["1", "1.1", "1.1.1", "2"]);
  const md = exportArticle(tree, { ...meta, numberHeadings: true }, "test");
  assert.match(md, /## 1 Main result/);
  assert.match(md, /### 1\.1 Background/);
  assert.match(md, /#### 1\.1\.1 Technical detail/);
  assert.match(md, /\[1\.1\.1 Technical detail\]\(#111-technical-detail\)/);
  assert.match(md, /\[1 Main result\]\(#1-main-result\)/);
  assert.match(md, /\[1\.1 Background\]\(#11-background\)/);
  assert.doesNotMatch(md, /#main-result/);
});

test("headings containing authored links retain their links and separate permalink", async () => {
  const tree = await compile(`## Background and [references](https://example.org)

Text.
`);
  const heading = tree.children.find((node) => node.type === "heading");
  const links = heading.children.filter((child) => child.type === "link");
  assert.equal(links.length, 2);
  assert.equal(links[0].url, "https://example.org");
  assert.equal(links[1].url, "#background-and-references");
  assert.equal(links[1].data.articleHeadingPermalink, true);
  assert.ok(exportArticle(tree, meta, "test").includes("## Background and [references](https://example.org)"));
});

test("Equation accepts display-math children without losing KaTeX commands", async () => {
  const tree = await compile(String.raw`## Equations

<Equation id="sqrt-demo">

$$
\frac{1}{\sqrt{2}}
$$

</Equation>
`);
  const equation = tree.children.find((node) => node.name === "Equation");
  assert.ok(equation);
  assert.equal(equation.children.filter((node) => node.type === "math").length, 1);
  const md = exportArticle(tree, meta, "test");
  assert.match(md, /\\sqrt\{2\}/);
  assert.match(md, /\(1\.1\)/);
});

test("duplicate anchors and missing references fail before publishing", async () => {
  await assert.rejects(
    compile('<Theorem id="repeat">A</Theorem>\n<Figure id="repeat" caption="X">B</Figure>'),
    /Duplicate article anchor/,
  );
  await assert.rejects(compile("Broken <Ref to=\"missing\" />"), /Unresolved article reference/);
  const badDemo = await compile('<Demo title="bad"><Counter /></Demo>');
  assert.throws(() => exportArticle(badDemo, meta, "test"), /DemoFallback/);
});

test("disclaimers preserve their label, text and links in Markdown", async () => {
  const tree = await compile(`<Disclaimer title="Inspiration">
This argument was inspired by [a public lecture](https://example.org/talk).
</Disclaimer>

<Disclaimer title="Tool use">An external tool processed the data.</Disclaimer>

<Disclaimer>Editorial notice.</Disclaimer>
`);
  const md = exportArticle(tree, meta, "test");
  assert.match(md, /> \*\*Inspiration\*\*/);
  assert.match(md, /\[a public lecture\]\(https:\/\/example\.org\/talk\)/);
  assert.match(md, /> \*\*Tool use\*\*/);
  assert.match(md, /An external tool processed the data\./);
  assert.match(md, /> \*\*Disclaimer\*\*/);
  assert.doesNotMatch(md, /<Disclaimer/);
});

test("vertical Steps exports a numbered list with prose, links and math", async () => {
  const tree = await compile(String.raw`<Steps>
  <Step title="Phenomenon">
    Study the [physical system](https://example.org).
  </Step>
  <Step title="Model">
    Formulate the equation $Ax=b$.
  </Step>
</Steps>`);
  const md = exportArticle(tree, meta, "test");
  assert.match(md, /1\. \*\*Phenomenon\*\*/);
  assert.match(md, /2\. \*\*Model\*\*/);
  assert.match(md, /\[physical system\]\(https:\/\/example\.org\)/);
  assert.match(md, /\$Ax=b\$/);
  assert.doesNotMatch(md, /<Steps|<Step/);
  const bad = await compile('<Steps><Aside title="No">Not a step.</Aside></Steps>');
  assert.throws(() => exportArticle(bad, meta, "test"), /Steps only accepts Step children/);
});

test("semantic Markdown export preserves inline notes, citations, figures and demo fallbacks", async () => {
  const tree = await compile(`## Start
A statement.<Footnote id="trace">A longer note.</Footnote>

<Figure id="shape" caption="A diagram">![Diagram](/diagrams/interval.svg)</Figure>

<Demo title="A demo">
<Counter />
<DemoFallback>Mathematical static meaning.</DemoFallback>
</Demo>

See <Citation to="book" />.

<Bibliography>
<BibItem id="book" authors="A. Author" title="A work" year="2026" />
</Bibliography>
`);
  const md = exportArticle(tree, meta, "test");
  assert.match(md, /\[\^note-1\]/);
  assert.match(md, /\[\^note-1\]: A longer note\./);
  assert.match(md, /Figure 1\.1\. A diagram/);
  assert.match(md, /Mathematical static meaning/);
  assert.doesNotMatch(md, /<Counter|<Demo|<Footnote/);
  assert.match(md, /A\. Author/);
});
