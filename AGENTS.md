# AGENTS.md

## Repository expectations

- This repository hosts my personal academic homepage and a large collection of HTML notes.
- The live `www.sby.sh.cn` site is served by Cloudflare Pages from the repository root. GitHub hosts the source; GitHub Actions is not required for publishing.
- Publish plain static HTML, CSS and browser scripts. MDX is compiled locally before committing; production does not run a build system.

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

## Safety

- Before deleting or moving any file (especially under `source/` and `notes/`), always propose a list of candidates and wait for my explicit confirmation.
- Do not modify GitHub Pages or Cloudflare configuration files (such as CNAME) unless explicitly asked.

## Static MDX writing and publishing

- Preserve the existing five-column homepage, EB Garamond fonts, colors, navigation, article text and URLs unless the user asks to change them. The current design takes precedence over the older redesign goals above.
- Write blog articles in `web/content/posts/<slug>.mdx`. Use the components and metadata documented in `web/README.md`. Keep article IDs, slugs and creation dates stable.
- Existing mathematical notes retain their Racket/SMathML sources and HTML/MathML output. They are indexed by search without conversion to MDX.
- Run `pnpm --dir web install --frozen-lockfile` to install the local compiler. Rust, API services, databases, comments, ratings and reader accounts are not part of this site.
- Before committing, run `pnpm --dir web test`, `pnpm --dir web build`, `pnpm --dir web test:site` and `pnpm --dir web check:published`. Commit MDX source and its generated HTML, Markdown, search index and assets together.
- `web/content/catalog.mjs` defines the Notes subjects, Writing sections and search exclusions. `web/content/statistics.json` keeps the 40 existing PDF links. Templates live in `web/templates/`. Root `notes.html`, `probstat.html`, `blog.html`, `rss.xml`, MDX article output, `search.html`, `assets/blog/` and `s/` are generated publishing files listed in `web/generated-files.json`.
- Keep original article, PDF and short-link URLs available. Exclude empty outlines and duplicate aliases from catalogs and search rather than deleting their files. Mathematical content, code, sources and citations remain intact when trimming introductory boilerplate.
- Keep the compiler dependencies and lockfile inside `web/`. The root remains ready to publish without a cloud build. Do not add a GitHub Actions publishing workflow or require a payment method.
- Work on a branch and publish through a pull request. Direct commits or pushes to `main` are prohibited. Commit author and committer must both be `shibingyi <m13818413106@163.com>`.
