module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'scope-enum': [
      2,
      'always',
      [
        'eslint',
        'stylelint',
        'prettier',
        'dependencies',
        'build',
        'release',
        'project',
      ],
    ],
  },
};
