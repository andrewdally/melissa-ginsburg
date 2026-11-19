// Display titles are set very large. So that a long word ("Weather", "Uptown")
// never overflows its column, each title carries the width of its longest word
// in ems, measured from Libre Caslon Display's own glyph widths; the CSS then
// takes the smaller of the design size and the size at which that word fits.
// Excerpts do the same with Libre Caslon Text, so a poem's line stays one line.
import displayWidths from './caslon-display-widths.json';
import textWidths from './caslon-text-widths.json';

type Table = Record<string, number>;
const AVERAGE = 0.55;

const measure = (text: string, table: Table) =>
  [...text].reduce((sum, ch) => sum + (table[ch] ?? AVERAGE), 0);

export function longestWordEm(text: string) {
  return Math.max(
    ...text
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => measure(word, displayWidths as Table)),
  );
}

/** The width of the whole text in ems, on one line. */
export const textEm = (text: string) => measure(text, displayWidths as Table);

/** The width of a line of body type (Libre Caslon Text) in ems. */
export const lineEm = (text: string) => measure(text, textWidths as Table);

/** The inline style that hands a title's widths to the CSS. */
export const fitStyle = (text: string) =>
  `--word-em: ${longestWordEm(text).toFixed(3)}; --title-em: ${textEm(text).toFixed(3)}`;
