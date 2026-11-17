import katex from "katex";

// Keep KaTeX's generated markup opaque to React. Expanding every glyph into
// JSX creates tens of thousands of RSC nodes (and development debug records)
// in long articles. Only compiler-generated, untrusted-by-default KaTeX output
// goes into innerHTML; authored HTML never passes through this path.
function textContent(node) {
  return typeof node.value === "string" ? node.value : (node.children ?? []).map(textContent).join("");
}

function staticMath(html, position) {
  const expression = {
    type: "ObjectExpression",
    properties: [{
      type: "Property", kind: "init", method: false, shorthand: false, computed: false,
      key: { type: "Identifier", name: "__html" },
      value: { type: "Literal", value: html },
    }],
  };
  return {
    type: "mdxJsxTextElement", name: "span", position, children: [],
    attributes: [{
      type: "mdxJsxAttribute", name: "dangerouslySetInnerHTML",
      value: {
        type: "mdxJsxAttributeValueExpression", value: `{__html: ${JSON.stringify(html)}}`,
        data: { estree: {
          type: "Program", sourceType: "module",
          body: [{ type: "ExpressionStatement", expression }],
        } },
      },
    }],
  };
}

export default function rehypeStaticMath() {
  return (tree, file) => {
    function visit(parent) {
      for (let index = 0; index < (parent.children?.length ?? 0); index++) {
        const node = parent.children[index];
        const classes = node.properties?.className ?? [];
        const fenced = node.type === "element" && node.tagName === "pre" &&
          node.children?.length === 1 && node.children[0].tagName === "code" &&
          node.children[0].properties?.className?.includes("language-math");
        const math = node.type === "element" &&
          (classes.includes("math-inline") || classes.includes("math-display") || classes.includes("language-math"));
        if (!fenced && !math) {
          visit(node);
          continue;
        }
        const value = textContent(fenced ? node.children[0] : node);
        const displayMode = !!fenced || classes.includes("math-display");
        let html;
        try {
          html = katex.renderToString(value, { displayMode, throwOnError: true, trust: false });
        } catch (error) {
          file.message("Could not render math with KaTeX", {
            cause: error, place: node.position, source: "rehype-static-math",
            ruleId: error.name.toLowerCase(),
          });
          html = katex.renderToString(value, { displayMode, throwOnError: false, strict: "ignore", trust: false });
        }
        parent.children[index] = staticMath(html, node.position);
      }
    }
    visit(tree);
  };
}
