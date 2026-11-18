// The site may be served from a domain's root or from a folder (e.g. the
// github.io address before a custom domain is set). Build every internal link
// through `url()` so it works either way.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** "/books" → "/books", or "/melissa-ginsburg/books" when served from a folder. */
export function url(path: string) {
  return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/** The page's path without the folder, for comparing against site paths. */
export function withoutBase(pathname: string) {
  return base && pathname.startsWith(base) ? pathname.slice(base.length) || '/' : pathname;
}
