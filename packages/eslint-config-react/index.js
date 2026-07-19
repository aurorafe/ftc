import fs from 'node:fs';
import path from 'node:path';
import { defineConfig } from 'eslint/config';
import eslintReact from '@eslint-react/eslint-plugin';
import reactHooks from 'eslint-plugin-react-hooks';
import base from '@aurorafe/eslint-config-base';
import tsConfig from '@aurorafe/eslint-config-ts';

const isTsProject = fs.existsSync(path.join(process.cwd(), 'tsconfig.json'));

export default defineConfig([
  ...base,
  {
    name: 'aurorafe/react',
    files: ['**/*.{js,jsx,ts,tsx}'],
    extends: [
      isTsProject ? eslintReact.configs['recommended-typescript'] : eslintReact.configs.recommended,
      reactHooks.configs.flat.recommended,
    ],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: isTsProject ? ['.js', '.jsx', '.ts', '.tsx', '.d.ts'] : ['.js', '.jsx'],
        },
      },
      'import/parsers': {
        '@typescript-eslint/parser': ['.ts', '.tsx', '.d.ts'],
      },
      'import/extensions': ['.js', '.mjs', '.jsx', '.ts', '.tsx', '.d.ts'],
      'import/external-module-folders': ['node_modules', 'node_modules/@types'],
    },
    rules: {
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'off',
      '@eslint-react/no-missing-key': 'warn',
      '@eslint-react/no-nested-component-definitions': 'warn',
    },
  },
  ...(isTsProject
    ? [
        {
          name: 'aurorafe/react-typescript',
          files: ['**/*.{ts,tsx}'],
          extends: [tsConfig],
          rules: {
            'no-undef': 'off',
            'prettier/prettier': 'warn',
          },
        },
      ]
    : []),
]);
