import { defineCollection, reference } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Editors (and the CMS) tend to leave optional fields as "" rather than
// deleting them. Treat blanks as "not set" so they don't fail validation.
const blank = (v: unknown) => (v === '' || v === null ? undefined : v);
const optional = <T extends z.ZodType>(schema: T) => z.preprocess(blank, schema.optional());

const color = z
  .string()
  .regex(/^#[0-9a-fA-F]{6}$/, 'Use a six-digit hex color, like #F47B20');

const books = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/books' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Shown under the title, lower case: "poems", "a novel", "a chapbook". */
      kind: z.string(),
      category: z.enum(['poetry', 'fiction', 'chapbook']),
      /** One sentence for the top of the page. */
      tagline: optional(z.string()),
      publisher: z.string(),
      year: optional(z.coerce.number().int()),
      /** Only needed for a book that isn't out yet: drives "Preorder" wording. */
      releaseDate: optional(z.coerce.date()),
      /** The featured book leads the home page. */
      featured: z.boolean().default(false),
      cover: image(),
      coverAlt: optional(z.string()),
      /** The book's color: tints the top of its page. */
      color,
      /** Optional second color that drifts in from the right. */
      color2: optional(color),
      buy: z.array(z.object({ label: z.string(), url: z.url() })).default([]),
      /** A few lines from the book, line breaks kept. */
      excerpt: optional(z.string()),
      format: optional(z.string()),
      pages: optional(z.coerce.number().int()),
      price: optional(z.string()),
      isbn: optional(z.string()),
      honors: z.array(z.string()).default([]),
      praise: z
        .array(
          z.object({
            quote: z.string(),
            name: z.string(),
            credit: optional(z.string()),
            url: optional(z.url()),
            /** Set one blurb as the large pull quote. */
            featured: z.boolean().default(false),
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
    }),
});

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    /** Link the item to a book so it also shows on that book's page. */
    book: optional(reference('books')),
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
