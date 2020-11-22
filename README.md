# aesop-code-styles

The goal of this project is to locate the linting and formatting rules we use in one location. These exported configurations can
then be used by our various code bases to provide consistent code.

## Usage

TODO

## Eslint

In your eslint config file extend the eslint configuration exported by this page

```js
'extends': [
  './node_modules/aesop-code-styles/.eslintrc',
],
```

## Contributing

This repo enforces commit message formats as they are used to automatically version the package using semantic versioning.

To add/or change the rules in this repo:

1. branch off from `main`
2. make the changes you wish to make. Ensure you use the correct commit type, otherwise the version might not be incremented
3. raise a PR to `main`, ensuring to get reviews from as many members of the dev team as possible
4. merge and wait for a new version to be published
