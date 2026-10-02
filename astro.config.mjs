import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import { BASE_URL } from './src/data/siteConfig';

import playformCompress from '@playform/compress';

export default defineConfig({
  integrations: [tailwind(), playformCompress()],
  site: 'https://fandomsforpali.github.io',
  base: BASE_URL,
});
