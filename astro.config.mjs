import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import playformCompress from '@playform/compress';

export default defineConfig({
  integrations: [tailwind(), playformCompress()],
  site: 'https://fandomsforpali.github.io',
  base: '/fandomsforpali',
});
