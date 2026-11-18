// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.melissaginsburg.net',
  integrations: [sitemap()],
  // Old single-page-app addresses, so existing links keep working.
  redirects: {
    '/doll-apollo': '/books/doll-apollo',
    '/dear-weather-ghost': '/books/dear-weather-ghost',
    '/the-house-uptown': '/books/the-house-uptown',
    '/sunset-city': '/books/sunset-city',
    '/apollo': '/books/apollo',
    '/arbor': '/books/arbor',
    '/double-blind': '/books/double-blind',
    '/events': '/news',
  },
});
