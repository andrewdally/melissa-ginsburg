// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Set by the publish workflow: empty on a custom domain, "/melissa-ginsburg"
// on the github.io address.
const base = (process.env.BASE_PATH || '').replace(/\/$/, '');

// Old single-page-app addresses, so existing links keep working.
const oldPaths = {
  '/doll-apollo': '/books/doll-apollo',
  '/dear-weather-ghost': '/books/dear-weather-ghost',
  '/the-house-uptown': '/books/the-house-uptown',
  '/sunset-city': '/books/sunset-city',
  '/apollo': '/books/apollo',
  '/arbor': '/books/arbor',
  '/double-blind': '/books/double-blind',
  '/events': '/news',
};

export default defineConfig({
  site: 'https://www.melissaginsburg.net',
  base: base || '/',
  integrations: [sitemap()],
  // Astro doesn't add the base to redirect targets, so add it here.
  redirects: Object.fromEntries(
    Object.entries(oldPaths).map(([from, to]) => [from, `${base}${to}`]),
  ),
});
