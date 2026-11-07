import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig, includeIgnoreFile } from 'eslint/config';
import eslint from '@eslint/js';
import { configs, parser } from 'typescript-eslint';

// // @ts-expect-error ignore type errors
// import github from 'eslint-plugin-github';
// @ts-expect-error ignore type errors
import pluginPromise from 'eslint-plugin-promise';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, '.gitignore');

export default defineConfig(
  includeIgnoreFile(gitignorePath),
  {
    ignores: [
      '**/*.d.ts',
      '*.{js,jsx}',
      'node_modules/**/*',
      'dist',
    ],
  },
  eslint.configs.recommended,
  ...configs.strict,
  pluginPromise.configs['flat/recommended'],
  // github.getFlatConfigs().typescript,
  {
    files: ['**/*.ts'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parser,
      parserOptions: {
        projectService: {
          allowDefaultProject: ['eslint.config.ts'],
        },
        tsconfigRootDir: __dirname,
      },
    },
  },
);
