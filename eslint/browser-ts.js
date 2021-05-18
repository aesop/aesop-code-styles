module.exports = {
  parser: '@typescript-eslint/parser',
  extends: ['./environment/browser.js', './environment/typescript.js'],
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', '.tsx'] }],
  },
};
