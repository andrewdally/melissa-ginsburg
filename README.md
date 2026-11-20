# melissaginsburg.net

Melissa Ginsburg's website, built with [Astro](https://astro.build) as a static site.

## Editing in Pages CMS

Melissa edits the site in [Pages CMS](https://app.pagescms.org), a web editor
for the files in this repository. It has forms for **News & events**, **Poems &c.**,
**Books**, **About** and **Site details**, laid out by `.pages.yml`. Each save
commits to `main`, and the publish workflow puts it on the site in a couple of
minutes.

Setup, once, by the repository owner:

1. Sign in at [app.pagescms.org](https://app.pagescms.org) with GitHub and install
   its GitHub App on this repository.
2. Open the repository there, go to **Collaborators**, and invite Melissa by
   email. She signs in with a link sent to that address; she doesn't need a
   GitHub account.

Good to know:

- **Events** are news items dated the day of the event. Put the venue, city and
  time in the text. The News page lists items newest first, so upcoming events
  sit at the top.
- **New poems** are added at the bottom of the list. Drag the new poem to the top:
  the list is newest first, and the home page shows the top three.
- **Images** upload to `src/assets` (covers to `src/assets/covers`). Cover
  colours still have to be chosen by eye: see the book fields below.
- **If a save doesn't appear on the site**, the build has stopped on something
  it checks, such as a colour too pale against the paper or text that wouldn't
  be readable on its colour. The **Actions** tab on GitHub shows the failed run
  and its message. The site keeps showing the last good version until it's
  fixed.
- When you add a field to `src/content.config.ts`, add it to `.pages.yml` too.
  The editor keeps fields it doesn't know about, but can't show them.

## Where the content lives

Everything on the site comes from plain text files; no code changes are needed to update it.

| What | Where |
| --- | --- |
| Books (one file each) | `src/content/books/*.md` |
| Book covers | `src/assets/covers/` |
| News and readings (one file each) | `src/content/news/*.md` |
| Poems &c. list | `src/data/poems.json` |
| Bio and photo (the home page quotes the bio's first and last sentences) | `src/content/pages/about.md` |
| Tagline, footer line, agent, email, social links, arts commission credit, the About page's colours | `src/data/site.json` |

The book marked `featured: true` leads the home page, and three pieces in its
colours sit at one edge of the News and Poems &c. pages. Text may cross the main
colour and the lighter accent, so if ink wouldn't read on one of them (4.5:1),
it's mixed with paper until it does.
Colour comes only from a book's cover, or on the About page from the photo
(`aboutColors` in `site.json`).

A news item with `book: <book file name>` also appears on that book's page. Its
`title` is optional: leave it out when the text already says the same thing.

To open the Poems &c. page with a few lines from a poem, add an `excerpt` to that
poem in `poems.json` (line breaks as `\n`). The first poem with one is shown.

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
| `color` | The main colour block, sampled from the cover. If it's too close to the paper to stand out (under 1.3:1), the build stops: lead with the book's darker colour instead. A cover whose edge is the same colour as this block gets a fine ink outline automatically. |
| `color2` | A smaller accent block, and the second colour in the book's small colour scrap. |
| `color3` | Optional: a third piece of paper. In the `left` collage it's the sliver behind the title, so ink must read on it. |
| `textOn` | `ink` or `paper`: the colour of words set on `color`. Leave it out to use whichever reads better. The build stops with a message if the words wouldn't be readable (4.5:1 contrast). |
| `collage` | The top of the book page: `left` (the title crosses the colour, as for *Runoff*), `tower` (a tall narrow block off the edge of the page, as for *Doll Apollo*), `band` (a broad band off the edge of the page with the cover half off its end, as for *Arbor*), `door` (a tall narrow block down from the top of the page like a doorway, the cover half off it, as for *The House Uptown*), `column` (a tall block down from the top of the page behind the cover, the title level with the cover's top, as for *Arbor*), `right` (as for *Sunset City*) or `framed` (as for *Apollo*). `left` only works where ink reads on `color`; leave it out to get `left` for a light colour and `framed` for a dark one. Give books next to each other on the Books page different collages. |
| `mirror` | `true` to flip the collage left to right. |
| `shape` | `circle` only where the cover has a circle in it (a moon, a light, a target): the `color2` piece becomes a circle over an edge or corner of the main block (behind it in the `framed` collage), and the book's piece on the wall is a circle too, always in front. Leave it out otherwise. |
| `scrapPosition` | Where the tile's second piece sits on the wall: `top-right`, `bottom-right`, `left` (a third of the way down the left edge), `top-left`, `above` (rising above the top right) or `right` (a thin edge tucked behind the right side). Give books next to each other different positions. Leave it out to cycle through `top-right`, `bottom-right`, `left`, `top-right` along the wall. |
| `scrapLayer` | `front` to lay that piece over the tile, `back` to tuck it behind. Front pieces stay clear of the title. A circle is always in front. |
| `scrapColor` | `color3` to use the third colour for the wall piece instead of `color2`. |
| `tile` | The book's tile on the wall of books: `large`, `tall`, `wide` (the default) or `small` (the default for chapbooks). |
| `excerpt` | A few lines from the book. Line breaks are kept; a blank line starts a new stanza. |
| `excerptStagger` | `true` to indent every other line of the excerpt. |
| `buy` | Order links, each a `label` and `url`, best first. The top of the book page shows the first three (ideally an independent shop, Square Books for signed copies, and the publisher), and the rest follow the description as "Also from"; the home page uses the first one. |
| `format`, `pages`, `price`, `isbn`, `honors` | Publication details, shown in the margin beside the description. Write the ISBN with its hyphens. |
| `praise` | Blurbs: `quote`, `name`, and optional `credit` and `url`. Mark one `featured: true` for the large pull quote; give it a `pull` (a line copied exactly from its quote) to set just that line large, with the whole blurb listed below. A `pull` on another blurb is the line the home page quotes. |
| `homeBlurb` | Featured book only: the short description on the home page. Leave it out to use the description's first sentence. |
| `homePraise` | Featured book only: the `name` on the blurb to quote on the home page. Leave it out to use the first blurb that isn't the pull quote. |
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

Old addresses from the previous site (`/doll-apollo`, `/events`, …) redirect to their
new homes; see `redirects` in `astro.config.mjs`.
