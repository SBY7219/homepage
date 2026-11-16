# Static MDX publishing

The article compiler is adapted from xuac at commit `0cb7ae6`. It retains the
semantic MDX pass, static KaTeX rendering, metadata validation, Markdown export,
and MiniSearch indexing. React renders HTML during the build. The deployed
files run on GitHub Pages.

## Local preview

Use Node.js 22 or later and pnpm.

```sh
pnpm install --frozen-lockfile --ignore-scripts
pnpm dev
```

Open `http://127.0.0.1:3002`. Set `PORT=8795 pnpm dev` to use another port.
Changes under `web/`, and edits to root HTML/CSS/RSS files, rebuild the preview.
The server binds to loopback. Root `.env` files are unnecessary for this version.

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
supplement reference are copied from the tracked site files. Their addresses
and bytes are checked by the regression suite. `blog.html` remains the index
template, and its existing static entries are retained alongside MDX articles.
The search index covers public HTML notes and MDX prose. It is loaded only on
the search page, and Chinese and English queries use the same tokenizer.

## Build and deployment

```sh
pnpm test
pnpm build
pnpm test:site
```

The deployable output is `_site/`. The Pages workflow builds and validates pull
requests and deploys merged `main` changes through the GitHub Pages artifact
API. At the first production switch, set the repository's Pages build source
to **GitHub Actions**. Keep the current custom domain and DNS configuration.

Make changes on a working branch and submit a pull request. Direct commits and
pushes to `main` are prohibited. Use the Git identity
`shibingyi <m13818413106@163.com>`.
