import { evaluate } from "@mdx-js/mdx";
import { createElement } from "react";
import * as runtime from "react/jsx-runtime";
import { renderToStaticMarkup } from "react-dom/server";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMdx from "remark-mdx";
import remarkMath from "remark-math";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import remarkArticle from "./article/remark-article.mjs";
import rehypeStaticMath from "./article/rehype-static-math.mjs";
import { extractMeta, validatePost } from "./article/article-manifest.mjs";
import { exportArticle } from "./article/markdown-export.mjs";
import { components } from "./components.mjs";

const parser = unified().use(remarkParse).use(remarkMdx).use(remarkGfm).use(remarkMath).use(remarkArticle);

export async function compileArticle(source, slug, siteOrigin) {
  const parsed = parser.parse(source);
  const meta = extractMeta(parsed);
  const post = validatePost(slug, meta);
  if (post.protected) throw new Error(`Article ${slug} is protected and cannot be published on a static site`);
  for (const node of parsed.children.filter(node => node.type === "mdxjsEsm")) {
    const statements = node.data.estree.body;
    if (statements.some(statement => statement.type !== "ExportNamedDeclaration" ||
        statement.declaration?.type !== "VariableDeclaration" ||
        statement.declaration.declarations.some(declaration => declaration.id?.name !== "meta"))) {
      throw new Error(`Article ${slug} only supports the static meta export`);
    }
  }
  const tree = await parser.run(parsed);
  const markdown = exportArticle(tree, meta, slug, { siteOrigin });
  const { default: Content } = await evaluate(source, {
    ...runtime,
    remarkPlugins: [remarkGfm, remarkMath, remarkArticle],
    rehypePlugins: [rehypeStaticMath, rehypeHighlight],
  });
  const html = renderToStaticMarkup(createElement(Content, { components }));
  return { ...post, html, markdown, tree };
}
