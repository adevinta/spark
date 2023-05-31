module.exports = {
  overrides: [
    {
      files: ['**/*.test.ts', '**/*.test.tsx'],
      rules: {
        'max-lines-per-function': [1, { max: 300, skipBlankLines: true, skipComments: true }],
        'max-nested-callbacks': [1, 4],
      },
    },
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks', 'simple-import-sort', 'prettier'],
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  globals: {
    fetch: 'readonly',
  },
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
  },
  rules: {
    // Overwrite rules specified from the extended configs or add ones
    // Prettier
    'prettier/prettier': 1,
    // Typescript
    '@typescript-eslint/consistent-type-definitions': [1, 'interface'],
    '@typescript-eslint/array-type': [2, { default: 'array', readonly: 'array' }],
    '@typescript-eslint/explicit-module-boundary-types': 0,
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/no-object-literal-type-assertion': 0,
    '@typescript-eslint/no-shadow': 1,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-use-before-define': [
      2,
      { functions: false, classes: true, variables: false },
    ],
    '@typescript-eslint/switch-exhaustiveness-check': 2,
    // React
    'jsx-quotes': [1, 'prefer-double'],
    'react/react-in-jsx-scope': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'react/prop-types': 0,
    'react/jsx-key': 0,
    'react/display-name': [0, { ignoreTranspilerName: false }],
    // Tailwind
    'tailwindcss/no-custom-classname': [
      2,
      {
        config: './tailwind.config.cjs',
        callees: ['cx', 'classnames', 'clsx', 'cva', 'tw', 'makeVariants'],
        whitelist: ['sb-unstyled'],
      },
    ],
    // import
    'import/no-absolute-path': 0,
    'import/exports-last': 0,
    // simple-import-sort
    'simple-import-sort/imports': 1,
    // Misc
    'array-callback-return': 1,
    complexity: [1, 8],
    curly: [1, 'all'],
    'max-lines': [1, { max: 300, skipBlankLines: true, skipComments: true }],
    'max-lines-per-function': [1, { max: 100, skipBlankLines: true, skipComments: true }],
    'max-depth': [2, 2],
    'max-nested-callbacks': [1, 2],
    'newline-before-return': 1,
    'no-console': [1, { allow: ['error'] }],
    'no-debugger': 1,
    'no-nested-ternary': 2,
    'no-shadow': 0,
    'no-unused-expressions': [1, { allowShortCircuit: true }],
    'no-use-before-define': 0,
    'no-var': 2,
    quotes: [1, 'single', { allowTemplateLiterals: false, avoidEscape: true }],
    'space-before-function-paren': [
      1,
      { anonymous: 'always', named: 'never', asyncArrow: 'always' },
    ],
  },
}
