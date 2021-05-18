# aesop-code-styles

The goal of this project is to locate the linting and formatting rules we use in one location. These exported configurations can
then be used by our various code bases to provide consistent code.

## Usage

### Installation

```bash
npm install -D aesop/aesop-code-styles
```

### Eslint

This library exports different eslint configurations for different environments (node, browser) and languages (JS, TS).
The exported configurations are:

- node
- node-ts
- browser
- browser-ts

In your eslint config file extend the eslint configuration most relevant to your package using one of the above.
For example, for a frontend written in TS

```js
// .eslintrc.js

module.exports = {
  'extends': [
    './node_modules/aesop-code-styles/eslint/browser-ts.js',
  ],
};
```

### Prettier

In your prettier config file, import the prettier configuration exported by this package

```js
// .prettierrc.js

module.exports = {
  ...require('aesop-code-styles/.prettierrc'),
};
```

### Stylelint

In your stylelint config file, extend the stylelint configuration exported by this package

```js
// stylelint.config.js

module.exports = {
  "extends": [
    "aesop-code-styles/stylelint.config.js",
  ],
};
```

## Contributing

This repo enforces commit message formats as they are used to automatically version the package using semantic versioning.

To add/or change the rules in this repo:

1. branch off from `main`
2. make the changes you wish to make. Ensure you use the correct commit type, otherwise the version might not be incremented
3. raise a PR to `main`, ensuring to get reviews from as many members of the dev team as possible
4. merge and wait for a new version to be published
