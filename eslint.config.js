import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

export default [
  { ignores: ['dist', 'node_modules', '.next'] }, // Add more ignored directories as needed
  {
    files: ['**/*.{js,jsx,ts,tsx}'], // Include TypeScript files if applicable
    languageOptions: {
      ecmaVersion: 2021, // Use a more specific version for modern features
      globals: {
        ...globals.browser,
        ...globals.node, // Include Node.js globals if needed
      },
      parserOptions: {
        ecmaVersion: 'latest',
        ecmaFeatures: { jsx: true },
        sourceType: 'module',
      },
    },
    settings: {
      react: { version: 'detect' }, // Automatically detect the React version
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,
      ...reactHooks.configs.recommended.rules,
      'react/jsx-no-target-blank': [
        'warn',
        { allowReferrer: true, enforceDynamicLinks: 'always' },
      ],
      'react/prop-types': 'off', // Disable if you're using TypeScript
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+
      'react-hooks/exhaustive-deps': 'warn', // Warn for missing dependencies in hooks
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
];
