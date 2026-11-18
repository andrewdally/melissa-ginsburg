import { getCollection, type CollectionEntry } from 'astro:content';

export type Book = CollectionEntry<'books'>;

const buildTime = new Date();

/** Dates in content are calendar dates; format them in UTC so they never shift a day. */
export function formatDate(date: Date) {
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
    timeZone: 'UTC',
  });
}

export function isUpcoming(book: Book) {
  return !!book.data.releaseDate && book.data.releaseDate > buildTime;
}

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

/** "Milkweed Editions, March 16, 2027" or "Flatiron Books, 2021". */
export function publicationLine(book: Book) {
  const { publisher, releaseDate, year } = book.data;
  const when = isUpcoming(book) && releaseDate ? formatDate(releaseDate) : year;
  return [publisher, when].filter(Boolean).join(', ');
}

/** The small print at the foot of a book page, like a copyright page. */
export function colophon(book: Book) {
  const { kind, publisher, releaseDate, year, format, pages, price, isbn } = book.data;
  const edition = [format?.toLowerCase(), pages ? `${pages} pages` : undefined]
    .filter(Boolean)
    .join(', ');
  return [
    kind,
    publisher,
    releaseDate ? formatDate(releaseDate) : year,
    edition,
    price,
    isbn ? `ISBN ${isbn}` : undefined,
  ].filter(Boolean) as (string | number)[];
}
