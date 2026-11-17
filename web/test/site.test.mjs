import assert from "node:assert/strict";
import { createHash } from "node:crypto";
import { readFile, readdir } from "node:fs/promises";
import path from "node:path";
import test from "node:test";
import { legacyFiles, output, root } from "../scripts/build.mjs";

test("every source file is preserved in the preview except generated catalogs, the MDX article and RSS", async () => {
  const derived = new Set(["notes.html", "probstat.html", "blog.html", "rss.xml", "blog/2026-02-notes-and-writing-plan.html"]);
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

test("reading routes replace the writing promise at its existing address and retain its creation date", async () => {
  const filename = "blog/2026-02-notes-and-writing-plan.html";
  const original = await readFile(path.join(root, "web/templates/original-writing-plan.html"), "utf8");
  const built = await readFile(path.join(output, filename), "utf8");
  assert.match(original, /February 13, 2026/);
  assert.match(built, /datetime="2026-02-13"/);
  assert.match(built, /<h1>Reading routes<\/h1>/);
  assert.match(built, /Statistical inference/);
  assert.match(built, /Types and proofs/);
  assert.match(built, /Language implementation/);
  assert.doesNotMatch(built, /I plan to write|Topic surveys, proof notes/);
  assert.match(built, /\/blog\/2026-02-notes-and-writing-plan\.md/);
  assert.doesNotMatch(built, /<script[^>]+src="https?:|__next|hydrateRoot/);
  const markdown = await readFile(path.join(output, "blog/2026-02-notes-and-writing-plan.md"), "utf8");
  assert.match(markdown, /## Statistical inference/);
  assert.match(markdown, /P423/);
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

test("the existing root publishing directory contains the current MDX output and needs no cloud build", async () => {
  const { files } = JSON.parse(await readFile(path.join(root, "web/generated-files.json"), "utf8"));
  assert.ok(files.includes("search-index-v1.json"), "the search page needs its generated index in the root deployment");
  for (const filename of files) {
    assert.deepEqual(await readFile(path.join(root, filename)), await readFile(path.join(output, filename)), filename);
  }
  const directories = await readdir(root);
  assert.ok(!directories.includes("package.json"), "Cloudflare must not detect a new root package install");
  assert.ok(!directories.includes(".github"), "publishing must not depend on GitHub Actions");
});
