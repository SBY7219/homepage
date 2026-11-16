# AGENTS.md

## Repository expectations

- This repository hosts my personal academic homepage and a large collection of HTML notes.
- The site is served as a static site via GitHub Pages with a custom domain on Cloudflare.
- Keep the published site fully static for GitHub Pages. MDX articles are compiled by the Node.js build in `web/`; legacy HTML, CSS, mathematical notes, and assets retain their current URLs.

## Goals for this project

- Redesign `index.html` and `styles.css` into a clean, minimal academic homepage.
- Provide clear navigation sections: Home, Research, Publications, Teaching, Notes, Blog, CV, Contact.
- Organize the many existing `*.html` note files behind a dedicated Notes section instead of listing everything on the front page.
- Add a static Blog index page and leave room for future posts.
- Reserve a visible slot on the home page for my profile photo (use a placeholder image path).

## Constraints

- Use semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`).
- Make the layout responsive without JavaScript or heavy frameworks; pure CSS only.
- Keep typography simple and readable: a system sans-serif font stack, comfortable line height, limited width for long text.
- Keep color palette minimal: light background, dark text, and at most one accent color.

## MDX writing and publishing

- Article source lives in `web/content/posts/<slug>.mdx`. The output URL is `/blog/<slug>.html`; the companion Markdown file uses `.md`.
- Keep the five-character article `id`, slug, and creation date stable. Use `TableOfContents`, `Theorem`, `Proof`, `Equation`, `Ref`, and `Citation` as documented in `web/README.md`.
- `blog.html` is the index template. Its static entries, including the supplement reference, are preserved during the build. Existing migrated article HTML is a legacy snapshot; edit its MDX source for new revisions.
- Run `pnpm test`, `pnpm build`, and `pnpm test:site` before publishing. `_site/` is the generated deployment artifact.
- Use a working branch. Direct commits or pushes to `main` are prohibited. Commit author and committer must be `shibingyi <m13818413106@163.com>`.
- Preserve the existing homepage design, fonts, wording, article bodies, and links except when the user requests a change.

## Safety

- Before deleting or moving any file (especially under `source/` and `notes/`), always propose a list of candidates and wait for my explicit confirmation.
- Do not modify GitHub Pages or Cloudflare configuration files (such as CNAME) unless explicitly asked.
