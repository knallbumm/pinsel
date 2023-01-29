import commonjs from '@rollup/plugin-commonjs';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import { defineConfig } from 'rollup';
import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';

const iifeName = 'Pinsel';

export default [
  defineConfig({
    input: 'index.ts',
    output: [
      {
        file: 'dist/index.mjs',
        format: 'es',
      },
      {
        file: 'dist/index.cjs',
        format: 'cjs',
      },
    ],
    external: ['@pinsel/core', '@pinsel/renderer'], // TODO maybe use something like @manypkg/get-packages
    plugins: [esbuild()],
  }),
  defineConfig({
    input: 'index.ts',
    output: [
      {
        file: 'dist/index.iife.min.js',
        format: 'iife',
        name: iifeName,
        extend: true,
        globals: {
          '@pinsel/core': iifeName,
          '@pinsel/renderer': iifeName,
        },
      },
    ],
    plugins: [
      esbuild({
        minify: true,
      }),
      commonjs({}),
      nodeResolve(),
    ],
  }),
  defineConfig({
    input: 'index.ts',
    output: {
      file: 'dist/index.d.ts',
      format: 'es',
    },
    plugins: [dts({})],
  }),
];
