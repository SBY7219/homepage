import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { parse } from "parse5";
import { legacyFiles, output, root } from "../scripts/build.mjs";

function text(node) {
  return node.nodeName === "#text" ? node.value : (node.childNodes ?? []).map(text).join(" ");
}

function articleText(html) {
  let article;
  function find(node) {
    if (node.tagName === "article") article = node;
    for (const child of node.childNodes ?? []) find(child);
  }
  find(parse(html));
  return text(article).replace(/\s+/g, " ").trim();
}

test("every existing published file keeps its bytes except the MDX article, blog index and RSS", async () => {
  const derived = new Set(["blog.html", "rss.xml", "blog/2026-02-notes-and-writing-plan.html"]);
  const digest = content => createHash("sha256").update(content).digest("hex");
  let checked = 0;
  for (const filename of legacyFiles()) {
    if (derived.has(filename)) continue;
    const source = await readFile(path.join(root, filename));
    const built = await readFile(path.join(output, filename));
    assert.equal(digest(built), digest(source), filename);
    checked += 1;
  }
  assert.ok(checked > 200);
});

test("the migrated article preserves the full visible article text at its existing address", async () => {
  const filename = "blog/2026-02-notes-and-writing-plan.html";
  const original = articleText(await readFile(path.join(root, filename), "utf8"));
  const built = await readFile(path.join(output, filename), "utf8");
  assert.equal(articleText(built).replace(/ Markdown · Short link$/, ""), original);
  assert.match(built, /\/blog\/2026-02-notes-and-writing-plan\.md/);
  assert.doesNotMatch(built, /<script[^>]+src="https?:|__next|hydrateRoot/);
  const markdown = await readFile(path.join(output, "blog/2026-02-notes-and-writing-plan.md"), "utf8");
  assert.match(markdown, /I plan to write topic surveys, proof notes, and updates on translation projects\./);
});

test("new static navigation preserves existing writing links and gives search and fixed IDs usable destinations", async () => {
  const blog = await readFile(path.join(output, "blog.html"), "utf8");
  assert.match(blog, /href="nutrition\/"/);
  assert.match(blog, /href="blog\/2026-02-notes-and-writing-plan\.html"/);
  assert.match(blog, /href="search\.html"/);
  const search = await readFile(path.join(output, "search.html"), "utf8");
  assert.match(search, /role="search"/);
  const shortLink = await readFile(path.join(output, "s/N0TES/index.html"), "utf8");
  assert.match(shortLink, /url=\/blog\/2026-02-notes-and-writing-plan\.html/);
  const rss = await readFile(path.join(output, "rss.xml"), "utf8");
  assert.match(rss, /shibingyi-blog-N0TES/);
  assert.match(rss, /Lectures on the Curry-Howard/);
});

test("the published directory contains static files and excludes application source and credentials", async () => {
  const directories = await readdir(output);
  assert.ok(!directories.includes("node_modules"));
  assert.ok(!directories.includes("web"));
  assert.ok(!directories.includes("api"));
  assert.ok(!directories.some(name => name.startsWith(".env")));
  const scripts = await readFile(path.join(output, "assets/blog/search.js"), "utf8");
  assert.doesNotMatch(scripts, /react-dom|hydrateRoot|__next/);
});
