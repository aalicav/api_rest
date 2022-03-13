module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-unused-vars': [
      'error',
      {
        argsIgnorePattern: '^_',
      },
    ],
    'class-methods-use-this': 'off',
    'no-console': 0,
    'func-names': 0,
    'import/first': 'off',
    'no-param-reassign': 'off',
    camelcase: 'off',
  },
};
