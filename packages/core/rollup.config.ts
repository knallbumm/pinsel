import strip from '@rollup/plugin-strip';
import ts from '@rollup/plugin-typescript';

export default {
  input: 'index.ts',
  output: {
    file: 'dist/index.js',
    format: 'es',
  },
  plugins: [
    strip({
      include: ['**/*.ts'],
      exclude: ['**/*.test.ts', 'rollup.config.ts', 'rollup.config.d.ts'],
      functions: ['logger.*'],
    }),
    ts({
      sourceMap: false,
      declaration: true,
      outDir: 'dist',
      exclude: ['**/*.test.ts'],
    }),
  ],
};
