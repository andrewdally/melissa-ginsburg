import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';
import { INK, PAPER, bestTextOn, contrast, textColor } from './lib/color';

// Editors (and the CMS) tend to leave optional fields as "" rather than
// deleting them. Treat blanks as "not set" so they don't fail validation.
const blank = (v: unknown) => (v === '' || v === null ? undefined : v);
const optional = <T extends z.ZodType>(schema: T) => z.preprocess(blank, schema.optional());

// The CMS picks a book by its file ("runoff.md", or a path to it); the site
// knows it by name ("runoff"). Accept either.
const bookId = (v: unknown) =>
  typeof v === 'string' ? v.replace(/^.*\//, '').replace(/\.md$/, '') : v;

const color = z
  .string()
  .regex(/^#[0-9a-fA-F]{6}$/, 'Use a six-digit hex color, like #F47B20');

/** Small text on a colour needs 4.5:1; wall tiles set the kind and year small. */
const MIN_CONTRAST = 4.5;
/** A main colour closer than this to the paper disappears into the page. */
const MIN_FROM_PAPER = 1.3;

/** Collage presets; see Collage.astro. */
export const COLLAGES = ['left', 'right', 'framed', 'tower', 'band', 'door', 'column'] as const;

/** Where a tile's second piece sits on the wall; see WallTile.astro. */
export const SCRAP_POSITIONS = ['top-right', 'bottom-right', 'left', 'top-left', 'right', 'above'] as const;

const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: ({ image }) =>
    z
      .object({
        title: z.string(),
        /** Shown under the title, lower case: "poems", "a novel", "a chapbook". */
        kind: z.string(),
        category: z.enum(['poetry', 'fiction', 'chapbook']),
        /** Used only for the page's description in search results and link previews. */
        tagline: optional(z.string()),
        publisher: z.string(),
        year: optional(z.coerce.number().int()),
        /** Only needed for a book that isn't out yet: drives "Preorder" wording. */
        releaseDate: optional(z.coerce.date()),
        /** The featured book leads the home page. */
        featured: z.boolean().default(false),
        cover: image(),
        /** What the cover shows, for people who can't see it. */
        coverAlt: optional(z.string()),
        /** The main colour block, sampled from the cover. */
        color,
        /** A smaller accent block that overlaps the main one. */
        color2: optional(color),
        /** Optional third colour: a thin sliver or scrap. */
        color3: optional(color),
        /** Text set on `color`: "ink" or "paper". Leave blank to pick whichever reads better. */
        textOn: optional(z.enum(['ink', 'paper'])),
        /** Layout of the top of the book page: "left", "right", "framed", "tower", "band", "door" or "column". */
        collage: optional(z.enum(COLLAGES)),
        /** Flip the collage left to right. */
        mirror: z.boolean().default(false),
        /** "circle" only where the cover has one (a moon, a light, a target): the color2 piece becomes a circle. */
        shape: z.enum(['rect', 'circle']).default('rect'),
        /** Where the tile's second piece sits on the wall. Blank: by position along the wall. */
        scrapPosition: optional(z.enum(SCRAP_POSITIONS)),
        /** Whether that piece lies "front" (over the tile) or "back" (behind it). Blank: by position; a circle is always in front. */
        scrapLayer: optional(z.enum(['front', 'back'])),
        /** Which colour the wall piece takes: color2 (the default) or color3. */
        scrapColor: z.enum(['color2', 'color3']).default('color2'),
        /** Tile size on the collage wall: "large", "tall", "wide" or "small". */
        tile: optional(z.enum(['large', 'tall', 'wide', 'small'])),
        /** Indent every other line of the excerpt. */
        excerptStagger: z.boolean().default(false),
        buy: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
        /** For the featured book: the short description on the home page. Blank: the description's first sentence. */
        homeBlurb: optional(z.string()),
        /** For the featured book: the name on the praise entry to quote on the home page. Blank: the first one not set large on the book page. */
        homePraise: optional(z.string()),
        /** A few lines from the book, line breaks kept; a blank line starts a new stanza. */
        excerpt: optional(z.string()),
        format: optional(z.string()),
        pages: optional(z.coerce.number().int()),
        price: optional(z.string()),
        isbn: optional(z.string()),
        honors: z.array(z.string()).default([]),
        praise: z
          .array(
            z
              .object({
                /** *Asterisks* set a book title in italic. */
                quote: z.string(),
                name: z.string(),
                credit: optional(z.string()),
                url: optional(z.url()),
                /** Set one blurb as the large pull quote. */
                featured: z.boolean().default(false),
                /** The line to quote on its own (as the pull quote, or on the home page), copied exactly from the quote. Blank: the whole quote. */
                pull: optional(z.string()),
              })
              // Case aside (a pull line may start with a capital), it must be the reviewer's words.
              .refine((p) => !p.pull || p.quote.toLowerCase().includes(p.pull.toLowerCase()), {
                message: 'The pull line must be copied exactly from the quote',
                path: ['pull'],
              }),
          )
          .default([]),
        press: z
          .array(
            z.object({
              title: z.string(),
              source: z.string(),
              url: z.url(),
              quote: optional(z.string()),
            }),
          )
          .default([]),
      })
      .superRefine((book, ctx) => {
        if (book.shape === 'circle' && !book.color2) {
          ctx.addIssue({
            code: 'custom',
            path: ['shape'],
            message: 'A circle is the color2 piece; set color2.',
          });
        }
        if (book.homePraise && !book.praise.some((p) => p.name === book.homePraise)) {
          ctx.addIssue({
            code: 'custom',
            path: ['homePraise'],
            message: `No praise entry is by "${book.homePraise}". Copy the name exactly from the praise list.`,
          });
        }
        const pale = contrast(book.color, PAPER);
        if (pale < MIN_FROM_PAPER) {
          ctx.addIssue({
            code: 'custom',
            path: ['color'],
            message: `${book.color} is only ${pale.toFixed(2)}:1 against the paper, so the book disappears into the page. Lead with the book's darker colour as color, and move this one to color2.`,
          });
        }
        const on = book.textOn ?? bestTextOn(book.color);
        const ratio = contrast(book.color, textColor(on));
        if (ratio < MIN_CONTRAST) {
          ctx.addIssue({
            code: 'custom',
            path: ['textOn'],
            message: `${on} text on ${book.color} is ${ratio.toFixed(1)}:1; it needs ${MIN_CONTRAST}:1. Darken or lighten the color, or switch textOn.`,
          });
        }
        if (book.collage === 'left' && on === 'paper') {
          ctx.addIssue({
            code: 'custom',
            path: ['collage'],
            message: `The "left" collage sets the title across the colour in ink, which doesn't read on ${book.color}. Use another collage.`,
          });
        }
        // In "left", the color3 sliver also runs behind the title.
        if ((book.collage ?? (on === 'ink' ? 'left' : 'framed')) === 'left' && book.color3) {
          const sliver = contrast(book.color3, INK);
          if (sliver < MIN_CONTRAST) {
            ctx.addIssue({
              code: 'custom',
              path: ['color3'],
              message: `In the "left" collage the color3 sliver runs behind the title, and ink on ${book.color3} is ${sliver.toFixed(1)}:1; it needs ${MIN_CONTRAST}:1. Pick a lighter color3, swap it with color2, or leave it out.`,
            });
          }
        }
      })
      .transform((book) => {
        const textOn = book.textOn ?? bestTextOn(book.color);
        return {
          ...book,
          textOn,
          // The title may only cross the colour where ink reads on it.
          collage: book.collage ?? (textOn === 'ink' ? 'left' : 'framed'),
          tile: book.tile ?? (book.category === 'chapbook' ? 'small' : 'wide'),
        };
      }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    /** A headline, only when the text doesn't already say it. *Asterisks* set a book title in italic. */
    title: optional(z.string()),
    date: z.coerce.date(),
    /** Link the item to a book so it also shows on that book's page. */
    book: optional(z.preprocess(bookId, reference('books'))),
    link: optional(z.url()),
    linkLabel: optional(z.string()),
  }),
});

const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      photo: optional(image()),
      photoAlt: optional(z.string()),
    }),
});

export const collections = { books, news, pages };
