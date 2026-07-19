/** @type {import('stylelint').Config} */
export default {
  extends: ['@aurorafe/stylelint-config-base', 'stylelint-config-recommended-vue'],
  overrides: [
    {
      files: '**/*.scss',
      customSyntax: 'postcss-scss',
      extends: ['stylelint-config-standard-scss', 'stylelint-config-recommended-vue/scss'],
    },
  ],
};
