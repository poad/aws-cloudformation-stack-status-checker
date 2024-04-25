// @ts-check

import eslint from '@eslint/js';

import prettier from 'eslint-config-prettier';
import tseslint from 'typescript-eslint';
import { FlatCompat } from '@eslint/eslintrc';

const compat = new FlatCompat();

export default tseslint.config(
  {
    ignores: [
      '**/*.d.ts',
      '*.{js,jsx}',
      'app/tsconfig.json',
      'app/stories',
      '**/*.css',
      'node_modules/**/*',
      './.next/*',
      'out',
      '.storybook',
    ],
  },
  {
    files: ['src/**/*.ts'],
  },
  eslint.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.ts'],
    extends: [
      ...tseslint.configs.recommended,
    ],
  },
  {
    files: ['app/**/*.{js,jsx,ts,tsx}'],
    // @ts-ignore
    rules: {
      ...prettier.rules,
    },
  },
);
