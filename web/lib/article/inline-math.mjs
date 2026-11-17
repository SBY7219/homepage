import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkMath from "remark-math";

const parser = unified().use(remarkParse).use(remarkMath);

export function inlineMathText(value) {
  if (!value.includes("$")) return [{ type: "text", value }];

  const parts = [];
  let offset = 0;
  function visit(node) {
    if (node.type === "inlineMath") {
      const { start, end } = node.position;
      if (start.offset > offset) {
        parts.push({ type: "text", value: value.slice(offset, start.offset) });
      }
      parts.push({ type: "inlineMath", value: node.value });
      offset = end.offset;
    } else {
      node.children?.forEach(visit);
    }
  }

  visit(parser.parse(value));
  if (offset < value.length) parts.push({ type: "text", value: value.slice(offset) });
  return parts;
}
