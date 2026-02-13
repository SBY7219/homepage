---
name: academic-homepage
description: Design and maintain a minimal academic personal website using only static HTML and CSS, organizing notes and a static blog.
---

You are helping maintain my academic homepage in this repository.

Follow these guidelines:

1. Information architecture
   - Provide top navigation with: Home, Research, Publications, Teaching, Notes, Blog, CV, Contact.
   - The Home section should show:
     - Name, current position and affiliation.
     - One-paragraph research summary.
     - A compact list of key links (email, CV, GitHub, Google Scholar if available).
     - A visible placeholder for my profile photo (e.g., `/img/profile.jpg` with good alt text).
   - Research / Publications / Teaching can start as simple static pages, but they should have clear headings and room for future content.
   - The Notes section should organize existing `*.html` notes (e.g., `calculus.html`, `linear_algebra.html`, `logic.html`) into themed groups like:
     - Mathematics
     - Programming languages and type theory
     - Category theory and logic
     - Miscellaneous
     Use whatever structure you can infer from filenames and titles.

2. Visual style
   - Minimal light theme: white or very light background, dark text, and a single accent color used sparingly.
   - Use a system font stack for body text (e.g., `-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif`).
   - Use consistent spacing scale (e.g., 1rem / 1.5rem / 2rem) for margins and paddings.
   - Make the layout responsive:
     - On mobile: stacked layout, navigation collapses into a vertical list.
     - On larger screens: a centered content column with max width around 800–900px.

3. Implementation rules
   - Keep everything as static HTML + CSS. No build tools, no bundlers, no JS frameworks.
   - Prefer semantic HTML5 tags. Use descriptive class names in CSS.
   - Reuse the existing `styles.css` file; refactor or simplify it as needed.
   - Keep fonts in the existing `fonts/` directory and only load fonts that are actually used.

4. Notes and blog
   - Treat `*.html` files whose names look like course or topic notes (for example `calculus.html`, `linear_algebra.html`, `logic.html`, `sicm.html`) as study notes.
   - Create a `notes.html` (or similar) index page that groups and links to these notes.
   - Create a `blog.html` index page for future static posts:
     - Initially, you can add 1–2 sample posts as placeholders with title, date, and short summary.
     - Link individual posts as separate HTML files under a `blog/` directory.

5. Safety and cleanup
   - Before deleting or moving any file, propose a cleanup plan:
     - Category A: essential site assets (index, styles, fonts, key pages).
     - Category B: intermediate or source files (for example Racket `.rkt` files under `source/`).
     - Category C: clearly unused or obsolete files, if any.
   - Ask for explicit confirmation before removing or moving Category B/C files.
   - Always summarize changes and show high-level `git diff` summaries.
