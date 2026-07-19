import { defineConfig } from 'eslint/config';
import pluginVue from 'eslint-plugin-vue';
import tseslint from 'typescript-eslint';
import tsConfig from '@aurorafe/eslint-config-ts';

export default defineConfig(
  ...tsConfig,
  ...pluginVue.configs['flat/essential'],
  {
    name: 'aurorafe/vue',
    files: ['**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
        extraFileExtensions: ['.vue'],
        sourceType: 'module',
      },
    },
    rules: {
      'no-undef': 'off',
      'vue/html-self-closing': 'off',
      'vue/attributes-order': 'off',
      'vue/multi-word-component-names': [
        'off',
        {
          ignores: ['index'],
        },
      ],
      'vue/no-v-model-argument': 'off',
      'vue/first-attribute-linebreak': [
        'error',
        {
          singleline: 'ignore',
          multiline: 'below',
        },
      ],
      'vue/singleline-html-element-content-newline': 'off',
      'vue/multiline-html-element-content-newline': 'off',
      'vue/component-definition-name-casing': ['error', 'PascalCase'],
      'vue/no-v-html': 'off',
      'vue/require-default-prop': 'off',
      'vue/no-setup-props-destructure': 'off',
      'vue/no-mutating-props': 'off',
      'vue/v-on-event-hyphenation': [
        'warn',
        'always',
        {
          autofix: true,
        },
      ],
    },
  },
  {
    name: 'aurorafe/vue-html',
    files: ['**/*.html'],
    rules: {
      'vue/comment-directive': 'off',
    },
  },
);
