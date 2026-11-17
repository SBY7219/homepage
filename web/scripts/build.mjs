import { execFileSync } from "node:child_process";
import { createRequire } from "node:module";
import { cp, mkdir, mkdtemp, readFile, readdir, rename, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { build } from "esbuild";
import { compileArticle } from "../lib/compiler.mjs";
import { validateManifest } from "../lib/article/article-manifest.mjs";
import { articleSearchDocuments, createSearchIndex, legacySearchDocument } from "../lib/search/index.mjs";
import { INDEX_PATH } from "../lib/search/options.mjs";
import { articlePage, blogPage, escapeHtml, searchPage } from "../lib/templates.mjs";
import { publishStaticFiles } from "./publish.mjs";

export const root = fileURLToPath(new URL("../../", import.meta.url));
export const output = path.join(root, "_site");
const sources = path.join(root, "web/content/posts");
const staticExtensions = new Set([".html", ".css", ".js", ".json", ".xml", ".png", ".svg", ".jpg", ".jpeg", ".webp",
  ".ico", ".woff", ".woff2", ".otf", ".ttf", ".pdf", ".zip", ".txt", ".rkt", ".mp4", ".webm", ".mp3"]);

export function legacyFiles() {
  return execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"], { cwd: root, encoding: "utf8" }).split("\0")
    .filter(file => file && file !== "package.json" && file !== "search.html" && file !== INDEX_PATH.slice(1) &&
      !file.startsWith("assets/blog/") && !file.startsWith("s/") && !file.startsWith("web/") && !file.startsWith(".") &&
      (staticExtensions.has(path.extname(file).toLowerCase()) || file === "CNAME"))
    .concat(".nojekyll");
}

async function write(stage, filename, contents) {
  const destination = path.join(stage, filename);
  await mkdir(path.dirname(destination), { recursive: true });
  await writeFile(destination, contents);
}

async function filesUnder(directory, prefix = "") {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const filename = path.posix.join(prefix, entry.name);
    if (entry.isDirectory()) files.push(...await filesUnder(path.join(directory, entry.name), filename));
    else if (entry.isFile()) files.push(filename);
  }
  return files;
}

function shortLink(post, origin) {
  const target = `/blog/${post.slug}.html`;
  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8" />
    <meta http-equiv="refresh" content="0;url=${target}" />
    <link rel="canonical" href="${escapeHtml(origin + target)}" />
    <title>${escapeHtml(post.title)}</title></head><body>
    <a href="${target}">${escapeHtml(post.title)}</a></body></html>\n`;
}

function feed(source, posts, origin) {
  const entries = posts.filter(post => post.status !== "draft").map(post => {
    const guid = `shibingyi-blog-${post.id}`;
    if (source.includes(`<guid isPermaLink="false">${guid}</guid>`)) return "";
    return `<item><title>${escapeHtml(post.title)}</title><link>${origin}/blog/${post.slug}.html</link>
      <guid isPermaLink="false">${guid}</guid><description>${escapeHtml(post.description)}</description>
      <pubDate>${new Date(`${post.created}T00:00:00Z`).toUTCString()}</pubDate></item>`;
  });
  return source.replace("</channel>", `${entries.join("\n")}\n</channel>`);
}

export async function buildSite() {
  const origin = `https://${(await readFile(path.join(root, "CNAME"), "utf8")).trim()}`;
  const filenames = (await readdir(sources)).filter(file => file.endsWith(".mdx")).sort();
  const posts = [];
  for (const filename of filenames) {
    const source = await readFile(path.join(sources, filename), "utf8");
    posts.push(await compileArticle(source, filename.slice(0, -4), origin));
  }
  validateManifest(posts);
  const replaced = new Set(["blog.html", "rss.xml", ...posts.map(post => `blog/${post.slug}.html`)]);
  const stage = await mkdtemp(path.join(root, ".site-build-"));
  try {
    const documents = posts.flatMap(articleSearchDocuments);
    const files = legacyFiles();
    for (const filename of files) {
      if (replaced.has(filename)) continue;
      const destination = path.join(stage, filename);
      await mkdir(path.dirname(destination), { recursive: true });
      await cp(path.join(root, filename), destination);
      if (filename.endsWith(".html") && !filename.startsWith("nutrition/")) {
        const document = legacySearchDocument(await readFile(destination, "utf8"), filename);
        if (document) documents.push(document);
      }
    }
    const index = await readFile(path.join(root, "web/templates/blog.html"), "utf8");
    await write(stage, "blog.html", blogPage(index, posts));
    await write(stage, "search.html", searchPage());
    await write(stage, "rss.xml", feed(await readFile(path.join(root, "web/templates/rss.xml"), "utf8"), posts, origin));
    for (const post of posts) {
      await write(stage, `blog/${post.slug}.html`, articlePage(post, origin));
      await write(stage, `blog/${post.slug}.md`, post.markdown);
      await write(stage, `s/${post.id}/index.html`, shortLink(post, origin));
    }
    const articleStyles = await readFile(path.join(root, "web/styles/article.css"), "utf8");
    await write(stage, "assets/blog/article.css", articleStyles);
    const require = createRequire(import.meta.url);
    const katex = path.dirname(require.resolve("katex/package.json"));
    await cp(path.join(katex, "dist"), path.join(stage, "assets/blog/katex"), {
      recursive: true,
      filter: source => path.basename(source) === "dist" || path.basename(source) === "fonts" ||
        source.includes(`${path.sep}fonts${path.sep}`) || source.endsWith("katex.min.css"),
    });
    await cp(path.join(katex, "LICENSE"), path.join(stage, "assets/blog/katex/LICENSE.txt"));
    await cp(path.join(root, "web/node_modules/minisearch/LICENSE.txt"), path.join(stage, "assets/blog/MiniSearch-LICENSE.txt"));
    const searchIndex = createSearchIndex(documents);
    await write(stage, INDEX_PATH.slice(1), searchIndex);
    await build({
      entryPoints: [path.join(root, "web/client/search.mjs"), path.join(root, "web/client/article.mjs")],
      outdir: path.join(stage, "assets/blog"),
      bundle: true, format: "esm", platform: "browser", target: "es2022", minify: true,
      legalComments: "eof",
    });
    const generatedFiles = ["blog.html", "rss.xml", "search.html", INDEX_PATH.slice(1),
      ...posts.flatMap(post => [`blog/${post.slug}.html`, `blog/${post.slug}.md`, `s/${post.id}/index.html`]),
      ...await filesUnder(path.join(stage, "assets/blog"), "assets/blog"),
    ].sort();
    await rm(output, { recursive: true, force: true });
    await rename(stage, output);
    console.log(`Built ${posts.length} MDX article(s); preserved ${files.length - replaced.size} legacy files.`);
    console.log(`Search covers ${documents.length} entries (${(Buffer.byteLength(searchIndex) / 1024 / 1024).toFixed(2)} MiB).`);
    console.log(`Static site: ${output}`);
    return { generatedFiles, articleCount: posts.length, searchCount: documents.length };
  } finally {
    await rm(stage, { recursive: true, force: true });
  }
}

if (process.argv[1] && pathToFileURL(path.resolve(process.argv[1])).href === import.meta.url) {
  const result = await buildSite();
  if (process.argv.includes("--publish") || process.argv.includes("--check")) {
    await publishStaticFiles({ root, output, files: result.generatedFiles, check: process.argv.includes("--check") });
  }
}
