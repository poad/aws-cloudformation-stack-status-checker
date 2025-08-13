// @ts-check

import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

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
      '@stylistic/ts': stylistic,
      github,
    },
    rules: {
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/ts/indent': ['error', 2],
      '@stylistic/max-len': ['error', 80],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/quotes': ['error', 'single'],
    },
  },
);
