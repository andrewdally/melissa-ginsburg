// Reads the colour around a cover's edge at build time, so a cover can be told
// apart from a block of the same colour (Runoff's orange cover on its orange
// block) by a hairline, without anyone having to say so in the book file.
import sharp from 'sharp';
import type { ImageMetadata } from 'astro';
import { contrast } from './color';

const cache = new Map<string, string[]>();

/** Colours sampled around the cover's border, about 3% in from the edge. */
async function edgeColors(cover: ImageMetadata) {
  const path = (cover as ImageMetadata & { fsPath?: string }).fsPath;
  if (!path) return [];
  if (cache.has(path)) return cache.get(path)!;
  const { data, info } = await sharp(path)
    .removeAlpha()
    .resize(100, 100, { fit: 'fill' })
    .raw()
    .toBuffer({ resolveWithObject: true });
  const hex = (x: number, y: number) => {
    const i = (y * info.width + x) * info.channels;
    return '#' + [0, 1, 2].map((k) => data[i + k].toString(16).padStart(2, '0')).join('');
  };
  const colors: string[] = [];
  for (let t = 3; t <= 96; t += 3) colors.push(hex(t, 3), hex(t, 96), hex(3, t), hex(96, t));
  cache.set(path, colors);
  return colors;
}

/** True when most of the cover's edge is within 1.2:1 of the colour it lies on. */
export async function coverMatches(cover: ImageMetadata, color: string) {
  const colors = await edgeColors(cover);
  if (!colors.length) return false;
  const close = colors.filter((c) => contrast(c, color) < 1.2).length;
  return close / colors.length > 0.5;
}
