import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, stat } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { parse, serializeOuter } from "parse5";
import MiniSearch from "minisearch";
import { noteSections, searchExclusions } from "../content/catalog.mjs";
import { searchIndexOptions, searchQueryOptions } from "../lib/search/options.mjs";
import { output, root } from "../scripts/build.mjs";

const fixture = JSON.parse(await readFile(new URL("./fixtures/content-contract.json", import.meta.url), "utf8"));
const hash = bytes => createHash("sha256").update(bytes).digest("hex");

function nodes(html) {
  const result = [];
  function walk(node) { result.push(node); for (const child of node.childNodes ?? []) walk(child); }
  walk(parse(html));
  return result;
}

test("all original article addresses and all 40 PDF files remain available and unchanged", async () => {
  for (const file of fixture.htmlPaths) assert.ok((await stat(path.join(output, file))).isFile(), file);
  for (const pdf of fixture.pdfs) {
    assert.equal(hash(await readFile(path.join(output, decodeURIComponent(pdf.url)))), pdf.sha256, pdf.url);
  }
  for (const [file, expected] of Object.entries(fixture.mathAndCode)) {
    const fragments = [];
    function collect(node) {
      if (["math", "pre", "code"].includes(node.tagName)) { fragments.push(serializeOuter(node)); return; }
      for (const child of node.childNodes ?? []) collect(child);
    }
    collect(parse(await readFile(path.join(output, file), "utf8")));
    assert.equal(hash(fragments.join("\n")), expected, `${file}: mathematical notation and code`);
  }
  const html = await readFile(path.join(output, "probstat.html"), "utf8");
  const actual = nodes(html).filter(node => node.tagName === "a").flatMap(node => node.attrs.filter(attr => attr.name === "href").map(attr => attr.value));
  assert.deepEqual([...actual].sort(), fixture.pdfs.map(pdf => pdf.url).sort());
  const indexedGroups = nodes(html).filter(node => node.tagName === "section").map(node => node.attrs.find(attr => attr.name === "id")?.value);
  assert.deepEqual(indexedGroups, ["foundations", "distributions", "estimation", "inference-problems", "regression", "computation", "plots"]);
});

test("the homepage changes only its writing panel and the existing typefaces and domain are retained", async () => {
  const home = await readFile(path.join(output, "index.html"), "utf8");
  const unchanged = home.replace(/      <section class="home-panel" id="writing"[\s\S]*?(?=      <section class="home-panel" id="notes")/, "");
  assert.equal(hash(unchanged), fixture.homeOutsideWriting);
  const css = await readFile(path.join(output, "styles.css"), "utf8");
  assert.deepEqual(css.match(/--font-(?:body|display):[^;]+;/g), fixture.fontDeclarations);
  assert.equal(await readFile(path.join(output, "CNAME"), "utf8"), fixture.cname);
});

test("the catalog has five subjects, preserves old subject anchors and resolves every new reading link", async () => {
  assert.equal(noteSections.length, 5);
  const pages = ["notes.html", "blog.html", "probstat.html", "blog/2026-02-notes-and-writing-plan.html", "analysis_notes.html", "macro_notes.html", "linear_algebra_notes.html"];
  for (const file of pages) {
    const html = await readFile(path.join(output, file), "utf8");
    assert.doesNotMatch(html, /页面暂缺|I plan to write|这里只是草稿/);
    for (const node of nodes(html).filter(node => node.tagName === "a")) {
      const href = node.attrs.find(attr => attr.name === "href")?.value;
      if (!href || /^(https?:|mailto:)/.test(href)) continue;
      const url = new URL(href, `https://www.sby.sh.cn/${file}`);
      let target = path.join(output, decodeURIComponent(url.pathname));
      const info = await stat(target);
      if (info.isDirectory()) target = path.join(target, "index.html");
      assert.ok((await stat(target)).isFile(), `${file}: ${href}`);
      if (url.hash && target.endsWith(".html")) {
        const ids = nodes(await readFile(target, "utf8")).flatMap(item => item.attrs?.filter(attr => attr.name === "id").map(attr => attr.value) ?? []);
        assert.ok(ids.includes(decodeURIComponent(url.hash.slice(1))), `${file}: ${href}`);
      }
    }
  }
  const ids = nodes(await readFile(path.join(output, "notes.html"), "utf8")).flatMap(node => node.attrs?.filter(attr => attr.name === "id").map(attr => attr.value) ?? []);
  for (const id of ["mathematics", "logic", "programming", "materials"]) assert.ok(ids.includes(id), id);
});

test("search omits empty pages and the duplicate volume while returning PDFs and chapter content", async () => {
  const json = await readFile(path.join(output, "search-index-v1.json"), "utf8");
  const index = MiniSearch.loadJSON(json, searchIndexOptions);
  for (const filename of Object.keys(searchExclusions)) assert.equal(index.has(`/${filename}`), false, filename);
  for (const pdf of fixture.pdfs) assert.equal(index.has(`/${pdf.url}`), true, pdf.url);
  assert.ok(index.search("向量空间", searchQueryOptions).some(hit => hit.url === "/hoffman_ch2.html"));
  assert.ok(index.search("probability and statistics", searchQueryOptions).some(hit => hit.url === "/probstat.html"));
  assert.ok(index.search("极大似然估计", searchQueryOptions).some(hit => decodeURIComponent(hit.url).endsWith("/极大似然估计.pdf")));
  assert.ok(index.search("maximum likelihood", searchQueryOptions).some(hit => decodeURIComponent(hit.url).endsWith("/极大似然估计.pdf")));
  assert.ok(index.search("GMM", searchQueryOptions).some(hit => decodeURIComponent(hit.url).endsWith("/广义矩估计.pdf")));
  assert.ok(index.search("DSL", searchQueryOptions).some(hit => hit.url === "/macro_dsl.html"));
  assert.ok(index.search("指称语义学", searchQueryOptions).some(hit => hit.url === "/ds.html"));
  assert.ok(index.search("指称语义学", searchQueryOptions).some(hit => hit.url === "/denotational_semantics_notes.html"));
});
