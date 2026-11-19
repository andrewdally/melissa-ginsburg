// The site's two fixed colours. Every other colour belongs to a book.
export const PAPER = '#F3EEE5';
export const INK = '#221E19';

function luminance(hex: string) {
  const [r, g, b] = [1, 3, 5]
    .map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4));
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** WCAG contrast ratio between two six-digit hex colours, 1 to 21. */
export function contrast(a: string, b: string) {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

/** Whichever of ink or paper reads better on a colour. */
export function bestTextOn(color: string): 'ink' | 'paper' {
  return contrast(color, INK) >= contrast(color, PAPER) ? 'ink' : 'paper';
}

export const textColor = (on: 'ink' | 'paper') => (on === 'ink' ? INK : PAPER);

const hex = (n: number) => Math.round(n).toString(16).padStart(2, '0');

/** A colour mixed with the paper: `amount` of the colour, the rest paper. */
export function tint(color: string, amount: number) {
  const channel = (c: string, i: number) => parseInt(c.slice(i, i + 2), 16);
  return `#${[1, 3, 5]
    .map((i) => hex(channel(color, i) * amount + channel(PAPER, i) * (1 - amount)))
    .join('')
    .toUpperCase()}`;
}
