/** @type {import('eslint-config-next')*/
module.exports = {
  extends: ['next', 'next/core-web-vitals', 'prettier'],
  plugins: ['import', 'unused-imports'],
  rules: {
    '@next/next/no-img-element': 'off',
    'no-console': ['error', { allow: ['warn', 'error', 'debug', 'info'] }],
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      {
        vars: 'all',
        varsIgnorePattern: '^_',
        args: 'after-used',
        argsIgnorePattern: '^_',
      },
    ],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling'], 'index', 'object', 'type'],
        'newlines-between': 'always',
        pathGroupsExcludedImportTypes: ['builtin'],
        alphabetize: { order: 'asc', caseInsensitive: true },
        pathGroups: [
          {
            pattern: '{react, next/**}',
            group: 'external',
            position: 'before',
          },
          {
            pattern: '@contract/**',
            group: 'internal',
            position: 'before',
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'before',
          },
        ],
      },
    ],
  },
};
