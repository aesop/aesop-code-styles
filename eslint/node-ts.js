module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    './environment/general.js',
    './environment/typescript.js',
    'prettier',
  ],
  env: {
    es6: true,
    jest: true,
    node: true,
  },
  rules: {
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': ['error'],
  },
};
