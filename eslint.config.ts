import { defineConfig } from 'eslint/config';
import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';

import github from 'eslint-plugin-github';

import tseslint from 'typescript-eslint';

export default defineConfig(
  {
    ignores: [
      '**/*.d.ts',
      '*.{js,jsx}',
      'node_modules/**/*',
      'dist',
    ],
  },
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  ...tseslint.configs.stylistic,
  {
    files: ['src/**/*.{mts,ts}', 'test/**/*.{js,ts}'],
    plugins: {
      '@stylistic': stylistic,
      github,
    },
    languageOptions: {
      parserOptions: {
        project: './tsconfig-eslint.json',
      },
    },
    rules: {
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/max-len': ['error', 80],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/quotes': ['error', 'single'],
    },
  },
);
