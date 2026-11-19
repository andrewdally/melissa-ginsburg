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
| Bio, photo, and the two-sentence summary on the home page | `src/content/pages/about.md` |
| Tagline, footer lines, agent, email, social links, arts commission credit | `src/data/site.json` |

The book marked `featured: true` leads the home page. A news item with
`book: <book file name>` also appears on that book's page.

In quotes, credits, interview titles and news titles, put a book's title between
asterisks to set it in italic: `*Runoff*`.

Anything still unknown shows on the site in square brackets, like `[YEAR]`, so it
can't be missed.

### Book fields

Each book file sets its own look; no page has CSS of its own.

| Field | What it does |
| --- | --- |
| `title`, `kind`, `category` | The title; "poems", "a novel" or "a chapbook"; and `poetry`, `fiction` or `chapbook`. |
| `publisher`, `year` | Shown under the title. A chapbook without a `year` shows `[YEAR]`. |
| `releaseDate` | Only for a book not out yet: the page says "Preorder from" and gives the date. |
| `featured` | `true` for the one book that leads the home page. |
| `cover`, `coverAlt` | The cover image, and a short description of it for people who can't see it. |
| `color` | The main colour block, sampled from the cover. |
| `color2` | A smaller accent block, and the second colour in the book's small colour scrap. |
| `color3` | Optional: a thin sliver or third scrap. |
| `textOn` | `ink` or `paper`: the colour of words set on `color`. Leave it out to use whichever reads better. The build stops with a message if the words wouldn't be readable (4.5:1 contrast). |
| `collage` | The top of the book page: `left` (the title crosses the colour, as for *Runoff*), `right` (the colour on the right, the title on paper at the left), or `framed` (as for *Doll Apollo*). `left` only works where ink reads on `color`; leave it out to get `left` for a light colour and `framed` for a dark one. |
| `tile` | The book's tile on the wall of books: `large`, `tall`, `wide` (the default) or `small` (the default for chapbooks). |
| `excerpt` | A few lines from the book. Line breaks are kept; a blank line starts a new stanza. |
| `excerptStagger` | `true` to indent every other line of the excerpt. |
| `buy` | Order links, each a `label` and `url`. The home page uses the first one. |
| `format`, `pages`, `price`, `isbn`, `honors` | Publication details, shown in the margin beside the description. Write the ISBN with its hyphens. |
| `praise` | Blurbs: `quote`, `name`, and optional `credit` and `url`. Mark one `featured: true` for the large pull quote; give it a `pull` (a line copied exactly from its quote) to set just that line large, with the whole blurb listed below. |
| `press` | Interviews and conversations: `title`, `source`, `url`, and an optional `quote`. |
| `tagline` | Not shown on the page; used as the page's description in search results and link previews. |

## Working on it

```
npm install
npm run dev       # local site at http://localhost:4321
npm run build     # static site in dist/
npm run preview   # serve the built site
```

In `npm run dev`, add `?grid` to any address to draw the 12-column grid over the page.
Text should start only at the outer margin, column 2 or column 6.

A GitHub Action (`Check links`) tests every outside link on the built site, on each
change and weekly. It reports dead links; it doesn't stop the site from publishing.

Old addresses from the previous site (`/doll-apollo`, `/events`, …) redirect to their
new homes; see `redirects` in `astro.config.mjs`.
