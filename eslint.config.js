// @ts-check

import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import stylisticTs from '@stylistic/eslint-plugin-ts';

import github from 'eslint-plugin-github';

import tseslint from 'typescript-eslint';

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    ignores: [
      '**/*.d.ts',
      '*.{js,jsx}',
      'node_modules/**/*',
      'dist',
    ],
    files: ['src/**/*.{mts,ts}', 'test/**/*.{js,ts}'],
    extends: [
      ...tseslint.configs.recommended,
    ],
    plugins: {
      '@stylistic': stylistic,
      '@stylistic/ts': stylisticTs,
      github,
    },
    rules: {
      '@stylistic/semi': 'error',
      '@stylistic/ts/indent': ['error', 2],
      'max-len': ['error', 80],
      'comma-dangle': ['error', 'always-multiline'],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
    },
  },
);
