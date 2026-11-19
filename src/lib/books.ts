import { getCollection, type CollectionEntry } from 'astro:content';

export type Book = CollectionEntry<'books'>;

const buildTime = new Date();

/** Shown wherever a fact is still missing, so it can't go unnoticed. */
export const MISSING_YEAR = '[YEAR]';

/** Dates in content are calendar dates; format them in UTC so they never shift a day. */
export function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export const isoDate = (date: Date) => date.toISOString().slice(0, 10);

export function isUpcoming(book: Book) {
  return !!book.data.releaseDate && book.data.releaseDate > buildTime;
}

export const isFullLength = (book: Book) => book.data.category !== 'chapbook';

/** Newest first; books without a year sort to the end, then by title. */
export async function getBooks() {
  const books = await getCollection('books');
  return books.sort(
    (a, b) =>
      (b.data.year ?? 0) - (a.data.year ?? 0) || a.data.title.localeCompare(b.data.title),
  );
}

export async function getFeaturedBook() {
  const books = await getBooks();
  return books.find((b) => b.data.featured) ?? books[0];
}

/** "poems, 2022", or "a chapbook, [YEAR]" until the year is known. */
export function kindAndYear(book: Book) {
  return `${book.data.kind}, ${book.data.year ?? MISSING_YEAR}`;
}

/** The home page's label: "New poems · March 16, 2027" before release, else "poems, 2022". */
export function heroLabel(book: Book) {
  const { kind, releaseDate } = book.data;
  if (isUpcoming(book) && releaseDate) {
    return `New ${kind.replace(/^(a|an) /, '')} · ${formatDate(releaseDate)}`;
  }
  return kindAndYear(book);
}

/** "March 16, 2027" for a book not yet out, else the year. */
export function when(book: Book) {
  const { releaseDate, year } = book.data;
  if (isUpcoming(book) && releaseDate) return formatDate(releaseDate);
  return String(year ?? MISSING_YEAR);
}

/** Format, pages, price and ISBN, one fact to a line, for a margin note. */
export function editionNotes(book: Book) {
  const { format, pages, price, isbn } = book.data;
  const edition = [format, pages ? `${pages} pages` : undefined].filter(Boolean).join(', ');
  return [edition, price, isbn ? `ISBN ${isbn}` : undefined].filter(Boolean) as string[];
}

/** The first lines of a book's excerpt, ignoring stanza breaks. */
export function excerptLines(book: Book, count: number) {
  return (book.data.excerpt ?? '')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .slice(0, count);
}

const WORDS = ['no', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
/** "three" for 3; numerals from 11. */
export const countWord = (n: number) => WORDS[n] ?? String(n);
