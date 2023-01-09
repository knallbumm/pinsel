import ts from '@rollup/plugin-typescript';

export default {
  input: 'index.ts',
  output: {
    file: 'dist/index.js',
    format: 'es',
  },
  plugins: [
    ts({
      sourceMap: false,
      declaration: true,
      outDir: 'dist',
      exclude: ['**/*.test.ts'],
    }),
  ],
};
