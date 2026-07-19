import { defineConfig, globalIgnores } from 'eslint/config';
import js from '@eslint/js';
import globals from 'globals';
import importPlugin from 'eslint-plugin-import';
import promisePlugin from 'eslint-plugin-promise';
import { configs as jsoncConfigs } from 'eslint-plugin-jsonc';
import htmlParser from '@html-eslint/parser';
import prettierRules from './rules/prettier.js';

export default defineConfig([
  globalIgnores(
    [
      '**/dist/**',
      '**/node_modules/**',
      '**/output/**',
      '**/coverage/**',
      '**/public/**',
      '**/.dll/**',
      '**/assets/**',
      '**/package-lock.json',
      '**/pnpm-lock.yaml',
      '**/yarn.lock',
      '**/CHANGELOG.md',
      '**/LICENSE*',
      '**/__snapshots__/**',
      '!**/.vitepress',
      '!**/.vscode',
    ],
    'aurorafe/global-ignores',
  ),
  {
    name: 'aurorafe/javascript',
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx,mts,cts}'],
    extends: [js.configs.recommended, importPlugin.flatConfigs.recommended],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.commonjs,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    plugins: {
      promise: promisePlugin,
    },
    settings: {
      'import/resolver': {
        node: {
          extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx', '.mts', '.d.ts'],
        },
      },
    },
    rules: {
      'max-len': ['warn', 120],
      camelcase: 'off',
      quotes: [
        'error',
        'single',
        {
          avoidEscape: true,
          allowTemplateLiterals: true,
        },
      ],
      semi: 'off',
      'func-names': 'off',
      'arrow-body-style': ['error', 'as-needed'],
      'class-methods-use-this': 'off',
      'array-callback-return': 'off',
      'prefer-destructuring': 'off',
      'consistent-return': 'off',
      'constructor-super': 'error',
      curly: ['error', 'multi-line'],
      eqeqeq: ['error', 'always', { null: 'ignore' }],
      'one-var': [
        'error',
        {
          initialized: 'never',
        },
      ],
      yoda: ['error', 'never'],
      'guard-for-in': 'off',
      'no-shadow': 'off',
      'no-prototype-builtins': 'off',
      'prefer-rest-params': 'off',
      'use-isnan': 'off',
      'valid-typeof': 'off',

      'import/named': 'off',
      'import/no-cycle': 'off',
      'import/no-mutable-exports': 'off',
      'import/prefer-default-export': 'off',
      'import/no-unresolved': 'off',
      'import/namespace': 'off',
      'import/extensions': 'off',
      'import/no-duplicates': 'warn',
      'import/no-extraneous-dependencies': 'off',
      'import/no-import-module-exports': 'off',

      'no-control-regex': 'off',
      'no-inner-declarations': ['error', 'functions'],
      'no-undef': 'off',
      'no-undef-init': 'off',
      'no-useless-escape': 'off',
      'no-var': 'error',
      'no-console': 'off',
      'no-unused-expressions': ['error', { allowShortCircuit: true }],
      'no-restricted-properties': 'off',
      'no-param-reassign': 'off',
      'no-plusplus': 'off',
      'no-continue': 'off',
      'no-underscore-dangle': 'off',
      'no-return-await': 'off',
      'no-await-in-loop': 'off',
      'no-use-before-define': 'off',
      'no-nested-ternary': 'off',
    },
  },
  {
    name: 'aurorafe/json',
    files: ['**/*.{json,jsonc,json5}'],
    extends: [jsoncConfigs['flat/recommended-with-jsonc']],
  },
  {
    name: 'aurorafe/package-json',
    files: ['**/package.json'],
    rules: {
      'jsonc/sort-keys': [
        'error',
        {
          pathPattern: '^$',
          order: ['name', 'displayName', 'type', 'version', 'private'],
        },
        {
          pathPattern: '^(?:dev|peer|optional|bundled)?[Dd]ependencies$',
          order: { type: 'asc' },
        },
        {
          pathPattern: '^exports.*$',
          order: ['types', 'require', 'import'],
        },
      ],
    },
  },
  {
    name: 'aurorafe/html',
    files: ['**/*.html'],
    languageOptions: {
      parser: htmlParser,
    },
    rules: {
      'prettier/prettier': ['error', { parser: 'html', ...prettierRules }],
      'no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
    },
  },
  {
    name: 'aurorafe/tests',
    files: ['**/__tests__/**/*.{js,jsx,ts,tsx}', '**/tests/unit/**/*.spec.{js,jsx,ts,tsx}'],
    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
]);
