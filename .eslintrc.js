module.exports = {
  env: {
    browser: true,
    node: true,
    es2020: true,
  },

  parserOptions: {
    ecmaVersion: 2020,
  },

  extends: ['airbnb-base', 'prettier'],

  rules: {
    camelcase: 'off',
    'import/no-extraneous-dependencies': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'max-len': 'off',
    'no-console': 'warn',
    'no-debugger': 'warn',
    'no-unused-vars': 'warn',
    'no-param-reassign': 'off',
    'no-empty-pattern': 'off',
    'arrow-parens': 'off',
    'consistent-return': 'off',
    'arrow-body-style': 'off',
    'object-curly-newline': 'off',
    'implicit-arrow-linebreak': 'off',
    'no-underscore-dangle': 'off',
    semi: [2, 'never'],
    'no-multiple-empty-lines': 'off',
    'unicorn/number-literal-case': 'off',
    'no-nested-ternary': 'off',
    'no-continue': 'off',
  },

  ignorePatterns: ['node_modules/'],
}
