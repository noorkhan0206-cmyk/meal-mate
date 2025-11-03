const js = require('@eslint/js');
const ts = require('@typescript-eslint/eslint-plugin');
const tsParser = require('@typescript-eslint/parser');
const importHelpers = require('eslint-plugin-import-helpers');
const jest = require('eslint-plugin-jest');
const react = require('eslint-plugin-react');
const reactHooks = require('eslint-plugin-react-hooks');
const sonarjs = require('eslint-plugin-sonarjs');
const sortDestructureKeys = require('eslint-plugin-sort-destructure-keys');
const unusedImports = require('eslint-plugin-unused-imports');

module.exports = [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: [
      'node_modules/',
      'dist/',
      'build/',
      '.expo/',
      '.next/',
      'coverage/',
      'android/',
      'ios/',
      'babel.config.js',
    ],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
        project: './tsconfig.json',
      },
    },
    plugins: {
      '@typescript-eslint': ts,
      react,
      'react-hooks': reactHooks,
      sonarjs,
      jest,
      'import-helpers': importHelpers,
      'sort-destructure-keys': sortDestructureKeys,
      'unused-imports': unusedImports,
    },
    rules: {
      'react/react-in-jsx-scope': 'off', // Expo auto-imports React
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      'no-undef': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'no-unused-vars': 'off',
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
      'import-helpers/order-imports': [
        'warn',
        {
          newlinesBetween: 'never',
          groups: [
            ['/^react/', '/^react-native/'],
            'module',
            [
              '/^@navigation/',
              '/^@config/',
              '/^@data/',
              '/^@api/',
              '/^@models/',
              '/^@interfaces/',
              '/^@screens/',
              '/^@components/atoms/',
              '/^@components/molecules/',
              '/^@components/organisms/',
              '/^@features/',
              '/^@hooks/',
              '/^@hoc/',
              '/^@services/',
              '/^@store/',
              '/^@theme/',
              '/^@assets/',
              '/^@localization/',
              '/^@utils/',
            ],
            ['parent', 'sibling', 'index'],
            '/^(../)+types/',
            '/^./types/',
            '/^./helpers/',
            '/^./style/',
          ],
          alphabetize: { order: 'asc', ignoreCase: true },
        },
      ],
      'sort-destructure-keys/sort-destructure-keys': 2,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    files: ['*.ts', '*.tsx'],
    rules: {
      '@typescript-eslint/no-shadow': ['error'],
      'no-shadow': 'off',
      'no-undef': 'off',
    },
  },
];
