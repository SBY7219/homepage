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

export function documentPage({ title, description = "", body, extraHead = "" }) {
  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${escapeHtml(title)}</title>
    ${description ? `<meta name="description" content="${escapeHtml(description)}" />` : ""}
    <link href="/styles.css?v=garamond-nav" rel="stylesheet" />
    ${extraHead}
  </head>
  <body>${navigation()}${body}</body>
</html>
`;
}

export function articlePage(post, origin) {
  const path = `/blog/${post.slug}.html`;
  const modified = post.modified !== post.created
    ? ` · Updated ${escapeHtml(displayDate(post.modified))}` : "";
  return documentPage({
    title: `${post.title} | Blog`, description: post.description,
    extraHead: `<link rel="canonical" href="${escapeHtml(origin + path)}" />
      <link rel="alternate" type="text/markdown" href="/blog/${post.slug}.md" />
      <link rel="stylesheet" href="/assets/blog/article.css" />
      <link rel="stylesheet" href="/assets/blog/katex/katex.min.css" />`,
    body: `<main class="site-shell"><article class="page-section mdx-article">
      <h1>${escapeHtml(post.title)}</h1>
      <p class="post-date"><time datetime="${post.created}">${escapeHtml(displayDate(post.created))}</time>${modified}</p>
      ${post.html}
      <p class="article-tools"><a href="/blog/${post.slug}.md">Markdown</a> · <a href="/s/${post.id}/">Short link</a></p>
    </article></main><script type="module" src="/assets/blog/article.js"></script>`,
  });
}

export function blogPage(source, posts) {
  const list = source.match(/<ul class="post-list">([\s\S]*?)<\/ul>/);
  if (!list) throw new Error("The existing blog index is missing its post list");
  const replaced = new Set(posts.map(post => `blog/${post.slug}.html`));
  const existing = [...list[1].matchAll(/<li\b[\s\S]*?<\/li>/g)]
    .map(match => match[0]).filter(item => ![...replaced].some(path => item.includes(`href="${path}"`)));
  const entries = [...posts].sort((a, b) => b.created.localeCompare(a.created) || a.slug.localeCompare(b.slug))
    .map(post => `<li><h2><a href="blog/${post.slug}.html">${escapeHtml(post.title)}</a></h2>
      <p class="post-date">${escapeHtml(displayDate(post.created))}</p>
      <p>${escapeHtml(post.description)}</p></li>`);
  const html = source.replace(list[0], `<ul class="post-list">${[...existing, ...entries].join("\n")}</ul>`);
  return html.replace('</h1>\n      </header>', '</h1>\n        <p><a href="search.html">Search</a></p>\n      </header>');
}

export function searchPage() {
  return documentPage({
    title: "Search | 施秉佚",
    extraHead: '<link rel="stylesheet" href="/assets/blog/article.css" />',
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
