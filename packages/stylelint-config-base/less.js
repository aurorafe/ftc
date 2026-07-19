/** @type {import('stylelint').Config} */
export default {
  plugins: ['stylelint-less'],
  rules: {
    'at-rule-no-unknown': null,
    'less/color-no-invalid-hex': true,
    'less/no-duplicate-variables': true,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global'],
      },
    ],
  },
};
