# AGENTS.md

## Repository expectations

- This repository hosts my personal academic homepage and a large collection of HTML notes.
- The site is served as a static site via GitHub Pages with a custom domain on Cloudflare.
- Keep everything as plain static HTML + CSS. Do not introduce Jekyll, Hugo, or any build system.

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
