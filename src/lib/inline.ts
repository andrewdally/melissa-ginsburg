// A very small Markdown renderer for one-line fields (blurbs, credits, news
// titles): *words* or _words_ become italic, so book titles can be set in
// italic inside a quote. Everything else is escaped and shown as written.

const escape = (s: string) =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export function inline(text: string) {
  return escape(text)
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.+?)\*/g, '<em>$1</em>')
    .replace(/(^|[^\w])_(.+?)_(?=[^\w]|$)/g, '$1<em>$2</em>');
}

/** The same text with the Markdown marks removed, for meta tags and alt text. */
export function plain(text: string) {
  return text.replace(/\*\*(.+?)\*\*/g, '$1').replace(/[*_](.+?)[*_]/g, '$1');
}
