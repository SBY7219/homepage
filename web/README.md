# Static MDX publishing

The article compiler is adapted from xuac at commit `0cb7ae6`. It retains the
semantic MDX pass, static KaTeX rendering, metadata validation, Markdown export,
and MiniSearch indexing. React runs locally during compilation. Generated HTML,
CSS, browser scripts and fonts are committed alongside the existing site files.
Cloudflare Pages continues to publish the repository root with its existing
empty build command. GitHub Actions is not part of this publishing process.

## Local preview

Use Node.js 22 or later and pnpm.

```sh
pnpm --dir web install --frozen-lockfile
pnpm --dir web dev
```

Open `http://127.0.0.1:3002`. Set `PORT=8796 pnpm --dir web dev` to use another
port. Changes under `web/`, and edits to root HTML/CSS/RSS files, rebuild the
preview in `_site/` without changing the committed publishing files. The server
binds to loopback. Rust, a database, API services and `.env` files are unnecessary.

## Article source

Write each article in `web/content/posts/<slug>.mdx`. The filename keeps its
published URL at `/blog/<slug>.html`. An uppercase alphanumeric five-character
ID supplies a permanent `/s/<id>/` short link.

```mdx
export const meta = {
  id: "A1B2C",
  title: "Article title",
  description: "A one-sentence description.",
  created: "2026-11-17",
  modified: "2026-11-17",
  status: "updating",
  categories: ["mathematics"],
  tags: [],
  numberHeadings: true,
};

<TableOfContents />

## An estimate

<Theorem id="positive-square" title="Positive squares">
For $x>0$, $x^2>0$.
</Theorem>

<Proof of="positive-square">Multiply by $x$.</Proof>

See <Ref to="positive-square" />.
```

The page supplies the H1 and dates. Use H2–H4 for article sections. Heading
anchors, optional heading numbers, statement numbers, references and the table
of contents are resolved during compilation. Duplicate IDs and unresolved
references fail the build.

Standard Markdown supports tables, code fences, footnotes and LaTeX math.
Registered components include `Definition`, `Theorem`, `Lemma`, `Proposition`,
`Corollary`, `Example`, `Remark`, `Proof`, `Equation`, `Figure`, `Caption`,
`Aside`, `Disclaimer`, `Disclosure`, `Steps`, `Step`, `Columns`, `Column`,
`Tabs`, `Tab`, `CodeGroup`, `CodePanel`, `CodeBlock`, `Plot`, `Bibliography`,
and `BibItem`. Tabs and code panels use a small browser script with arrow-key
navigation; their full content remains readable when scripting is disabled.
`Disclosure` and collapsible proofs use native HTML details.

Use `<Equation id="energy" latex="E=mc^2" />` or wrap exactly one `$$…$$`
block in `Equation`. Figure captions and statement titles accept inline math.
Bibliography entries accept stable `id`, `authors`, `shortAuthor`, `title`,
`year` and `url` values. Cite them with `<Citation to="id" />`.

Every published MDX article also gets a plain `.md` representation with
resolved reference labels and original LaTeX. The RSS feed includes MDX
articles whose status is `updating` or `finished`. A `draft` is publicly
readable. Password-protected sources are rejected by the static builder.

## Existing material

Existing HTML/MathML notes, Racket sources, fonts, PDFs, the homepage and the
supplement reference keep their source files, addresses and layouts. Their
bytes are checked by the regression suite. `web/content/catalog.mjs` defines the
five Notes subjects, Writing sections and search exclusions. The page templates
and RSS template live in `web/templates/`. `web/content/statistics.json` groups
the existing 40 PDF links. Edit the MDX source for a migrated article, rather than its generated
HTML. The original Writing Plan is retained in `web/templates/` for regression
checks.

The search index covers selected HTML notes, MDX prose and the titles of the
existing statistics PDFs; it does not extract or claim to search PDF bodies.
Outline-only pages, navigation pages, aliases and the duplicate full linear
algebra volume are excluded while their original URLs remain published.
Empty section headings are omitted from search. The index is loaded only on
the search page, and Chinese and English queries use the same tokenizer. Existing
mathematical notes continue to use their original MathML; new MDX articles use
build-time KaTeX. Comments, ratings, reader tracking and accounts are omitted.

## Build and deployment

```sh
pnpm --dir web test
pnpm --dir web build
pnpm --dir web test:site
pnpm --dir web check:published
```

`build` creates the complete preview in `_site/`, then updates generated files
in the repository root: Notes, the statistics directory, Writing, RSS, MDX article HTML and Markdown,
short links, search page and index, and article assets. `web/generated-files.json`
records the generated paths. Files outside that list are not overwritten by
the publishing step. If removing an article would leave stale public files,
the command stops and lists those files for review instead of deleting them.

Commit the MDX source and generated files together on a working branch. After
the pull request is merged, the existing Cloudflare Pages Git integration
publishes the root files. Keep the current Pages build command and output
directory, custom domain and DNS. `_site/` is a local preview and is not committed.

`check:published` rebuilds and compares generated output with the root files;
it fails if an MDX edit has not been compiled. The Node package, lockfile and
pnpm configuration live inside `web/` so that the existing root deployment does
not acquire a dependency-install step. `web/pnpm-workspace.yaml` explicitly
skips esbuild's lifecycle script; the compiler uses its prebuilt platform binary.

Make changes on a working branch and submit a pull request. Direct commits and
pushes to `main` are prohibited. Use the Git identity
`shibingyi <m13818413106@163.com>`.
