module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  env: {
    es2021: true,
    node: true,
    browser: true,
  },
  parser: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  ignorePatterns: ['/node_modules/**', '.next/*', '/build/**'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'no-unused-vars': [
      'warn',
      { args: 'none', argsIgnorePattern: 'req|res|next|val' },
    ],
    'prettier/prettier': ['error'],
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
