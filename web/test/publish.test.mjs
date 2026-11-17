import assert from "node:assert/strict";
import { mkdtemp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import os from "node:os";
import path from "node:path";
import test from "node:test";
import { publishStaticFiles } from "../scripts/publish.mjs";

test("local publishing refreshes owned output, preserves legacy files and catches an unbuilt edit", async () => {
  const root = await mkdtemp(path.join(os.tmpdir(), "static-mdx-publish-"));
  try {
    const output = path.join(root, "_site");
    await mkdir(path.join(output, "blog"), { recursive: true });
    await writeFile(path.join(root, "linear_algebra.html"), "Original MathML");
    await writeFile(path.join(output, "blog/article.html"), "First version");
    const options = { root, output, files: ["blog/article.html"] };
    await publishStaticFiles(options);
    await publishStaticFiles({ ...options, check: true });
    assert.equal(await readFile(path.join(root, "linear_algebra.html"), "utf8"), "Original MathML");
    await writeFile(path.join(output, "blog/article.html"), "Revised version");
    await assert.rejects(publishStaticFiles({ ...options, check: true }), /out of date/);
    assert.equal(await readFile(path.join(root, "blog/article.html"), "utf8"), "First version");
    await publishStaticFiles(options);
    assert.equal(await readFile(path.join(root, "blog/article.html"), "utf8"), "Revised version");
    await assert.rejects(publishStaticFiles({ root, output, files: [] }), /Review their removal/);
    await assert.rejects(publishStaticFiles({ root, output, files: ["../outside.html"] }), /Invalid generated path/);
  } finally {
    await rm(root, { recursive: true, force: true });
  }
});
