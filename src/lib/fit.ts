// Display titles are set very large. So that a long word ("Weather", "Uptown")
// never overflows its column, each title carries the width of its longest word
// in ems, measured from Libre Caslon Display's own glyph widths; the CSS then
// takes the smaller of the design size and the size at which that word fits.
import widths from './caslon-display-widths.json';

const table = widths as Record<string, number>;
const AVERAGE = 0.55;

export function longestWordEm(text: string) {
  return Math.max(
    ...text
      .split(/\s+/)
      .filter(Boolean)
      .map((word) => [...word].reduce((sum, ch) => sum + (table[ch] ?? AVERAGE), 0)),
  );
}

/** The width of the whole text in ems, on one line. */
export function textEm(text: string) {
  return [...text].reduce((sum, ch) => sum + (table[ch] ?? AVERAGE), 0);
}

/** The inline style that hands a title's widths to the CSS. */
export const fitStyle = (text: string) =>
  `--word-em: ${longestWordEm(text).toFixed(3)}; --title-em: ${textEm(text).toFixed(3)}`;
