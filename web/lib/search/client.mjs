import MiniSearch from "minisearch";
import { INDEX_PATH, searchIndexOptions, searchQueryOptions } from "./options.mjs";

function snippet(hit) {
  const bodyTerms = hit.terms.filter(term => hit.match[term]?.includes("body"));
  if (!bodyTerms.length) return hit.description;
  const lower = hit.body.toLowerCase();
  const positions = bodyTerms.map(term => lower.indexOf(term)).filter(position => position >= 0);
  const position = positions.length ? Math.min(...positions) : 0;
  const start = Math.max(0, position - 45);
  const end = start + 160;
  return `${start ? "…" : ""}${hit.body.slice(start, end).trim()}${end < hit.body.length ? "…" : ""}`;
}

export async function loadSearch() {
  const response = await fetch(INDEX_PATH);
  if (!response.ok) throw new Error("Search index is unavailable");
  const index = await MiniSearch.loadJSONAsync(await response.text(), searchIndexOptions);
  return query => {
    if (!query.trim()) return [];
    const hits = index.search(query, searchQueryOptions);
    const seen = new Set();
    const results = [];
    for (const hit of hits) {
      if (seen.has(hit.articleUrl)) continue;
      seen.add(hit.articleUrl);
      const section = Object.values(hit.match).some(fields => fields.includes("heading") || fields.includes("body"));
      results.push({ url: section ? hit.url : hit.articleUrl, title: hit.title,
        heading: section ? hit.heading : "", snippet: snippet(hit) });
      if (results.length === 10) break;
    }
    return results;
  };
}
