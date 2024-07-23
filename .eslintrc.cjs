module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true, 
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended', 
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:prettier/recommended', 
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'node_modules'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: '18.2',
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  plugins: [
    'react-refresh',
    'jsx-a11y', 
    'import', 
    'prettier', 
  ],
  rules: {
    'react/prop-types': 'off',
    'no-unused-vars': 'warn',
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'jsx-a11y/no-autofocus': 'warn', 
    'jsx-a11y/anchor-is-valid': 'warn', 
    'import/no-unresolved': 'error', 
    'import/named': 'error', 
    'import/default': 'error', 
    'import/namespace': 'error', 
    'prettier/prettier': 'warn', 
    'no-console': 'warn', 
    'no-debugger': 'warn', 
  },
};
