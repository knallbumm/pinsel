import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      // skip /dist resolution for hmr
      pinsel: resolve(__dirname, '../packages/pinsel/index.ts'),
      '@pinsel/core': resolve(__dirname, '../packages/core/index.ts'),
      '@pinsel/renderer': resolve(__dirname, '../packages/renderer/index.ts'),
    },
  },
});
