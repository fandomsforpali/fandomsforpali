import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

import playformCompress from '@playform/compress';

export default defineConfig({
  integrations: [tailwind(), playformCompress()],
});