import { loadSearch } from "../lib/search/client.mjs";

const form = document.querySelector('form[role="search"]');
const input = document.getElementById("search-query");
const status = document.querySelector('[role="status"]');
const results = document.getElementById("search-results");
let search;
let generation = 0;
let debounce;

function resultItem(hit) {
  const item = document.createElement("li");
  const heading = document.createElement("h2");
  const link = document.createElement("a");
  link.href = hit.url;
  link.textContent = hit.title;
  heading.append(link);
  item.append(heading);
  if (hit.heading) {
    const section = document.createElement("p");
    section.className = "post-date";
    section.textContent = hit.heading;
    item.append(section);
  }
  const summary = document.createElement("p");
  summary.textContent = hit.snippet;
  item.append(summary);
  return item;
}

async function update() {
  const current = ++generation;
  const query = input.value.trim();
  const url = new URL(location.href);
  if (query) url.searchParams.set("q", query);
  else url.searchParams.delete("q");
  history.replaceState(null, "", url);
  results.replaceChildren();
  if (!query) {
    status.textContent = "";
    return;
  }
  status.textContent = "Searching…";
  try {
    search ??= loadSearch().catch(error => { search = undefined; throw error; });
    const find = await search;
    if (current !== generation) return;
    const hits = find(query);
    results.replaceChildren(...hits.map(resultItem));
    status.textContent = hits.length ? `${hits.length} result${hits.length === 1 ? "" : "s"}` : `No results for “${query}”.`;
  } catch {
    if (current === generation) status.textContent = "Search could not load. Submit your query to try again.";
  }
}

form.addEventListener("submit", event => {
  event.preventDefault();
  clearTimeout(debounce);
  update();
});
input.addEventListener("input", () => {
  clearTimeout(debounce);
  generation += 1;
  debounce = setTimeout(update, 180);
});
input.value = new URLSearchParams(location.search).get("q") ?? "";
update();
