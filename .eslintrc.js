module.exports = {
  root: true,
  env: {
    node: true
  },
  // extends: ['plugin:vue/essential', '@vue/prettier'],
  extends: [
    'plugin:vue/strongly-recommended',
    'plugin:prettier/recommended',
    'eslint:recommended'
  ],
  rules: {
    'no-console': 'off',
    'no-debugger': 'off',
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'none', ignoreRestSiblings: false }
    ],
    'prettier/prettier': [
      'error',
      {
        tabWidth: 2,
        singleQuote: true,
        trailingComma: 'none',
        bracketSpacing: true,
        arrowParens: 'avoid'
        // proseWrap: 'preserve'
        // parser: 'flow'
      }
    ]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
};
