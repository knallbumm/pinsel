import { resolve } from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  resolve: {
    alias: {
      // skip /dist resolution for hmr
      pinsel: resolve(__dirname, '../pinsel/index.ts'),
      '@pinsel/core': resolve(__dirname, '../core/index.ts'),
      '@pinsel/renderer': resolve(__dirname, '../renderer/index.ts'),
    },
  },
});