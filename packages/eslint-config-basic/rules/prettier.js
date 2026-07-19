/** @type {import('prettier').Config} */
const prettierRules = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  arrowParens: 'always',
  bracketSpacing: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  bracketSameLine: false,
  endOfLine: 'lf',
  proseWrap: 'preserve',
  vueIndentScriptAndStyle: true,
  htmlWhitespaceSensitivity: 'ignore',
  embeddedLanguageFormatting: 'auto',
  singleAttributePerLine: false,
};

export default prettierRules;
