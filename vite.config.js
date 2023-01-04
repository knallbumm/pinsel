import typescript from '@rollup/plugin-typescript';
import { resolve } from 'path';
import { typescriptPaths } from 'rollup-plugin-typescript-paths';
import { defineConfig } from 'vite';

export default defineConfig({
  esbuild: { minify: true },
  resolve: {
    alias: [
      {
        find: '~',
        replacement: resolve(__dirname, './src'),
      },
    ],
  },
  build: {
    manifest: true,
    minify: true,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'pinsel',
      formats: ['es'],
    },
    rollupOptions: {
      plugins: [
        typescriptPaths({
          preserveExtensions: true,
        }),
        typescript({
          sourceMap: false,
          declaration: true,
          outDir: 'dist',
          exclude: ['**/*.test.ts', '**/_visualizer/**'],
        }),
      ],
    },
  },
});
