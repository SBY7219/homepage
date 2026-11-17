import test from "node:test";
import assert from "node:assert/strict";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import { extractMeta, validatePost, validateManifest } from "./article-manifest.mjs";

const metadata = {
  id: "ABC12",
  title: "A test article",
  description: "One description",
  created: "2026-10-30",
  modified: "2026-10-31",
  status: "draft",
  categories: ["research"],
  tags: ["math"],
  ratingEligible: false,
};

test("manifest extracts static MDX metadata and derives slug from filename", () => {
  const tree = unified().use(remarkParse).use(remarkMdx).parse(
    `export const meta = ${JSON.stringify(metadata)};\n\n## Article body\n`,
  );
  const post = validatePost("new-article", extractMeta(tree));
  assert.deepEqual(post, { slug: "new-article", ...metadata, protected: false });
  assert.equal(post.ratingEligible, false);
});

test("manifest rejects duplicate article IDs and reserved slugs", () => {
  const a = validatePost("first", metadata);
  const b = validatePost("second", { ...metadata, id: "DEF34" });
  assert.equal(validateManifest([a, b]).length, 2);
  assert.throws(() => validateManifest([a, { ...b, id: a.id }]), /Duplicate article ID/);
  assert.throws(() => validatePost("md", metadata), /reserved slug/);
  assert.throws(() => validatePost("categories", metadata), /reserved slug/);
  assert.throws(() => validatePost("private", metadata), /reserved slug/);
});

test("manifest rejects invalid metadata and dynamic metadata expressions", () => {
  assert.throws(() => validatePost("post", { ...metadata, id: "abc12" }), /id must match/);
  assert.equal(validatePost("post", { ...metadata, status: "updating" }).status, "updating");
  assert.equal(validatePost("post", { ...metadata, status: "finished" }).status, "finished");
  assert.throws(() => validatePost("post", { ...metadata, status: "published" }), /invalid status/);
  assert.throws(() => validatePost("post", { ...metadata, status: "visible" }), /invalid status/);
  assert.throws(() => validatePost("post", { ...metadata, ratingEligible: "no" }), /must be boolean/);
  assert.equal(validatePost("post", { ...metadata, password: null }).protected, false);
  const secured = validatePost("post", { ...metadata, password: "example-secret" });
  assert.equal(secured.protected, true);
  assert.ok(!Object.hasOwn(secured, "password"), "password cannot appear in public manifest");
  assert.throws(() => validatePost("post", { ...metadata, password: "" }), /password/);
  assert.throws(() => validatePost("post", { ...metadata, password: 123 }), /password/);
  assert.throws(() => validatePost("post", { ...metadata, categories: ["MixedCase"] }), /categories/);
  const tree = unified().use(remarkParse).use(remarkMdx).parse(
    'export const meta = { title: computeTitle() };\n',
  );
  assert.throws(() => extractMeta(tree), /static literals/);
});
