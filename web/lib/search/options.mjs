export const INDEX_PATH = "/search-index-v1.json";

const han = /\p{Script=Han}/u;

// Use fixed Chinese bigrams so indexing and querying agree across Node and
// browser ICU versions, including when a query is part of a longer phrase.
function tokenize(text, query = false) {
  return text.normalize("NFKC").split(/(\p{Script=Han}+)/u).flatMap((part, i) => {
    if (i % 2 === 0) return part.match(/[\p{L}\p{M}\p{N}]+/gu) ?? [];
    const chars = Array.from(part);
    const pairs = chars.slice(1).map((char, j) => chars[j] + char);
    return query && pairs.length ? pairs : query ? chars : [...chars, ...pairs];
  });
}

export const searchIndexOptions = {
  fields: ["title", "heading", "description", "body"],
  storeFields: ["url", "articleUrl", "title", "heading", "description", "body"],
  tokenize: (text) => tokenize(text),
};

export const searchQueryOptions = {
  tokenize: (text) => tokenize(text, true),
  combineWith: /** @type {const} */ ("AND"),
  boost: { title: 5, heading: 3, description: 2 },
  prefix: (term, index, terms) => index === terms.length - 1 && term.length >= 2 && !han.test(term),
};
