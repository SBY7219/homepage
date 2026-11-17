import assert from "node:assert/strict";
import test from "node:test";
import MiniSearch from "minisearch";
import { compileArticle } from "../lib/compiler.mjs";
import { createSearchIndex, legacySearchDocument } from "../lib/search/index.mjs";
import { searchIndexOptions, searchQueryOptions } from "../lib/search/options.mjs";

const metadata = `export const meta = {
  id: "T3ST1", title: "A mathematical article", description: "A source fixture.",
  created: "2026-11-17", modified: "2026-11-17", status: "draft",
  numberHeadings: true, categories: ["mathematics"], tags: [],
};`;

test("one source produces static math, references, numbered contents, footnotes and readable Markdown", async () => {
  const source = `${metadata}

<TableOfContents />

## Estimates

See <Ref to="bound" /> and <Citation to="reference" />. A note.[^note]

<Theorem id="bound" title="A bound">
For $x > 0$, $x^2 > 0$.
</Theorem>

<Proof of="bound">Multiply by $x$.</Proof>

<Equation id="identity" latex="x=x" />

~~~js
const value = 2 ** 3;
~~~

[^note]: The domain is required.

<Bibliography>
<BibItem id="reference" authors="Fixture Author" title="Fixture Work" year="2026" />
</Bibliography>
`;
  const result = await compileArticle(source, "fixture", "https://www.sby.sh.cn");
  assert.match(result.html, /aria-label="Table of contents"/);
  assert.match(result.html, /class="article-section-number">1/);
  assert.match(result.html, /href="#bound"/);
  assert.match(result.html, /Theorem 1\.1/);
  assert.match(result.html, /class="katex"/);
  assert.match(result.html, /<math/);
  assert.match(result.html, /hljs-keyword/);
  assert.match(result.html, /data-footnote-ref/);
  assert.match(result.markdown, /Theorem 1\.1/);
  assert.match(result.markdown, /\$x > 0\$/);
  assert.match(result.markdown, /The domain is required/);
  assert.doesNotMatch(result.markdown, /export const meta|<Theorem|<Ref/);
  assert.doesNotMatch(result.html, /<script|__next|hydrateRoot/);
});

test("a static build rejects protected articles and arbitrary imports", async () => {
  const protectedSource = metadata.replace('numberHeadings: true', 'password: "fixture-only", numberHeadings: true');
  await assert.rejects(compileArticle(protectedSource, "fixture", "https://www.sby.sh.cn"), /protected/);
  await assert.rejects(compileArticle(`${metadata}\nimport fs from 'node:fs';`, "fixture", "https://www.sby.sh.cn"), /static meta export/);
});

test("legacy prose is searchable in Chinese and English while navigation, code and math are excluded", () => {
  const document = legacySearchDocument(`<html><head><title>线性代数 第2章 向量空间</title></head><body>
    <nav>Navigation-only token</nav><h1>线性代数</h1>
    <p>有限维向量空间与矩阵。Vector spaces and matrices.</p>
    <math><mi>UnsearchableFormula</mi></math><pre>UnsearchableCode</pre>
    </body></html>`, "linear_algebra.html");
  const index = MiniSearch.loadJSON(createSearchIndex([document]), searchIndexOptions);
  assert.equal(index.search("向量空间", searchQueryOptions)[0].url, "/linear_algebra.html");
  assert.equal(index.search("向量空间", searchQueryOptions)[0].title, "线性代数 第2章 向量空间");
  assert.equal(index.search("vector", searchQueryOptions)[0].url, "/linear_algebra.html");
  assert.equal(index.search("Navigation-only", searchQueryOptions).length, 0);
  assert.equal(index.search("UnsearchableFormula", searchQueryOptions).length, 0);
  assert.equal(index.search("UnsearchableCode", searchQueryOptions).length, 0);
});
