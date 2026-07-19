import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  eslintPluginPrettierRecommended,
  {
    name: 'aurorafe/prettier',
    rules: {
      'prettier/prettier': 'warn',
    },
  },
]);
