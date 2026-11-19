import { noteSections, writingSections, notesIntroduction, writingIntroduction } from "../content/catalog.mjs";

export function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[character]);
}

export function displayDate(date) {
  return new Intl.DateTimeFormat("en-US", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" })
    .format(new Date(`${date}T00:00:00Z`));
}

function navigation() {
  const links = [
    ["Home", "index.html"], ["Research", "research.html"], ["Teaching", "teaching.html"],
    ["Notes", "notes.html"], ["Blog", "blog.html"], ["CV", "cv.html"], ["Contact", "contact.html"],
  ];
  return `<header class="site-header"><div class="site-shell"><nav class="top-nav" aria-label="Main navigation">
    ${links.map(([label, path]) => `<a href="/${path}">${label}</a>`).join("\n")}
  </nav></div></header>`;
}

export function documentPage({ title, description = "", body, extraHead = "", bodyClass = "" }) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)}</title>
${description ? `    <meta name="description" content="${escapeHtml(description)}" />\n` : ""}    <link href="/styles.css?v=reading" rel="stylesheet" />
${extraHead ? `    ${extraHead}\n` : ""}  </head>
  <body${bodyClass ? ` class="${escapeHtml(bodyClass)}"` : ""}>${navigation()}${body}</body>
</html>
`;
}

export function articlePage(post, origin) {
  const path = `/blog/${post.slug}.html`;
  const modified = post.modified !== post.created
    ? ` · Updated <time datetime="${post.modified}">${escapeHtml(displayDate(post.modified))}</time>` : "";
  const noteId = `title-note-${post.id.toLowerCase()}`;
  const noteRef = post.titleNote
    ? `<sup class="article-title-note-ref"><a href="#${noteId}" id="${noteId}-ref" aria-label="Read the title note">*</a></sup>` : "";
  const titleNote = post.titleNote
    ? `<aside class="article-title-note" id="${noteId}" aria-label="Title note">
      <p><a href="#${noteId}-ref" aria-label="Back to the article title">*</a> ${escapeHtml(post.titleNote)}</p>
    </aside>` : "";
  return documentPage({
    title: `${post.title} | Blog`, description: post.description,
    bodyClass: "article-page-body",
    extraHead: `<link rel="canonical" href="${escapeHtml(origin + path)}" />
      <link rel="alternate" type="text/markdown" href="/blog/${post.slug}.md" />
      <link rel="stylesheet" href="/assets/blog/katex/katex.min.css" />
      <link rel="stylesheet" href="/assets/blog/article.css?v=reading" />`,
    body: `<main class="site-shell article-page"><article class="mdx-article">
      <header class="article-heading">
        <h1>${escapeHtml(post.title)}${noteRef}</h1>
        <p class="post-date"><time datetime="${post.created}">${escapeHtml(displayDate(post.created))}</time>${modified}</p>
      </header>
      <div class="article-content">${post.html}</div>${titleNote ? `\n      ${titleNote}` : ""}
      <footer class="article-tools"><a href="/blog/${post.slug}.md">Markdown</a> · <a href="/s/${post.id}/">Short link</a></footer>
    </article></main><script type="module" src="/assets/blog/article.js"></script>`,
  });
}

export function blogPage(source, posts) {
  const sections = writingSections.map(section => {
    const selected = posts.filter(post => {
      const group = writingSections.find(item => post.categories.includes(item.id))?.id ?? "essays";
      return group === section.id;
    }).sort((a, b) => b.modified.localeCompare(a.modified) || a.slug.localeCompare(b.slug));
    const entries = [...selected.map(post => ({ url: `blog/${post.slug}.html`, title: post.title,
      description: post.description, date: post.modified, updated: post.modified !== post.created })), ...section.entries];
    if (!entries.length) return "";
    return `<section class="page-section" id="${section.id}"><h2>${escapeHtml(section.title)}</h2>
      <ul class="post-list catalog-list">${entries.map(item => `<li><h3><a href="${escapeHtml(item.url)}">${escapeHtml(item.title)}</a></h3>
        ${item.date ? `<p class="post-date">${item.updated ? "Updated " : ""}<time datetime="${item.date}">${escapeHtml(displayDate(item.date))}</time></p>` : ""}
        <p>${escapeHtml(item.description)}</p></li>`).join("\n")}</ul></section>`;
  }).join("\n");
  return fillCatalog(source, "writing", `<header class="page-header"><h1>Writing</h1>
    <p>${escapeHtml(writingIntroduction)}</p><p><a href="search.html">Search</a></p></header>\n${sections}`);
}

function fillCatalog(source, name, content) {
  const marker = `<!--${name}-catalog-->`;
  if (!source.includes(marker)) throw new Error(`The ${name} template is missing its catalog marker`);
  return source.replace(marker, () => content.replace(/[ \t]+$/gm, ""));
}

const links = entries => `<ul>${entries.map(item => `<li><a href="${escapeHtml(item.url)}">${escapeHtml(item.title)}</a></li>`).join("\n")}</ul>`;

export function notesPage(source) {
  const sections = noteSections.map(section => `<section class="page-section" id="${section.id}">
    <h2>${escapeHtml(section.title)}</h2>${links(section.entries)}
    ${(section.groups ?? []).map(group => `<div${group.id ? ` id="${group.id}"` : ""}><h3>${escapeHtml(group.title)}</h3>${links(group.entries)}</div>`).join("\n")}
    </section>`).join("\n");
  return fillCatalog(source, "notes", `<header class="page-header"><h1>Notes</h1>
    <p>${escapeHtml(notesIntroduction)}</p><p><a href="search.html">Search</a></p></header>\n${sections}`);
}

export function statisticsPage(source, statistics) {
  return fillCatalog(source, "statistics", `<h1>${escapeHtml(statistics.title)}</h1>
    <p>${escapeHtml(statistics.description)}</p><p><a href="${escapeHtml(statistics.overview.url)}">${escapeHtml(statistics.overview.title)}</a></p>
    ${statistics.groups.map(group => `<section id="${group.id}"><h2>${escapeHtml(group.title)}</h2>${links(group.entries)}</section>`).join("\n")}`);
}

export function searchPage() {
  return documentPage({
    title: "Search | 施秉佚",
    extraHead: '<link rel="stylesheet" href="/assets/blog/article.css?v=reading" />',
    body: `<main class="site-shell site-main site-search">
      <header class="page-header"><h1>Search</h1></header>
      <form role="search">
        <label class="visually-hidden" for="search-query">Search notes and writing</label>
        <input id="search-query" name="q" type="search" autocomplete="off" aria-label="Search notes and writing" />
        <button type="submit">Search</button>
      </form>
      <p role="status" aria-live="polite"></p>
      <ol class="post-list" id="search-results"></ol>
    </main><script type="module" src="/assets/blog/search.js"></script>`,
  });
}
