# melissaginsburg.net

Melissa Ginsburg's website, built with [Astro](https://astro.build) as a static site.

## Where the content lives

Everything on the site comes from plain text files; no code changes are needed to update it.

| What | Where |
| --- | --- |
| Books (one file each) | `src/content/books/*.md` |
| Book covers | `src/assets/covers/` |
| News and readings (one file each) | `src/content/news/*.md` |
| Poems &c. list | `src/data/poems.json` |
| Bio and photo | `src/content/pages/about.md` |
| Footer line, agent, email, social links | `src/data/site.json` |

A book's `color` (and optional `color2`) tints the top of its page. The book marked
`featured: true` leads the home page. A news item with `book: <book file name>` also
appears on that book's page.

## Working on it

```
npm install
npm run dev       # local site at http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve the built site
```

Old addresses from the previous site (`/doll-apollo`, `/events`, …) redirect to their
new homes; see `redirects` in `astro.config.mjs`.
