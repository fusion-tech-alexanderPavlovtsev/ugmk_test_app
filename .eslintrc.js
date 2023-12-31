module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
  },
  extends: [
    'airbnb-base',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  plugins: [
    'react',
    'styled-components-config',
    'eslint-plugin-no-inline-styles',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react-hooks/exhaustive-deps': 'error',
    'react/jsx-boolean-value': 'error',
    'react/jsx-no-useless-fragment': 'error',
    'react/jsx-wrap-multilines': [
      'error',
      {
        declaration: 'parens',
        assignment: 'parens',
        return: 'parens',
        arrow: 'parens',
        condition: 'parens',
        logical: 'parens',
        prop: 'parens',
      },
    ],
    'react/self-closing-comp': 'error',
    'react/jsx-curly-brace-presence': [
      'error',
      { props: 'never', children: 'never', propElementValues: 'always' },
    ],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-tag-spacing': [
      'error',
      {
        closingSlash: 'never',
        beforeSelfClosing: 'proportional-always',
        afterOpening: 'never',
        beforeClosing: 'proportional-always',
      },
    ],
    'jsx-quotes': ['error', 'prefer-double'],
    'react/prop-types': 'off',
    'react/no-unused-state': 2,
    'react/no-access-state-in-setstate': 2,
    'react/no-direct-mutation-state': 2,
    'styled-components-config/rule-name': 'off',
    'object-curly-spacing': ['error', 'always'],
    'eol-last': ['error', 'always'],
    'no-plusplus': 'off',
    'operator-linebreak': [
      'error',
      'after',
      { overrides: { '?': 'before', ':': 'before' } },
    ],
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'prefer-destructuring': 'off',
    'arrow-parens': ['error', 'always'],
    'arrow-body-style': 'off',
    'object-curly-newline': 'off',
    'no-use-before-define': 'off',
    'no-shadow': 'off',
    'space-before-function-paren': [
      'error',
      { anonymous: 'always', named: 'never', asyncArrow: 'always' },
    ],
    'no-restricted-syntax': 'off',
    camelcase: 'off',
    'no-continue': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'react/display-name': 'off',
    'consistent-return': 'off',
    'function-paren-newline': ['error', 'consistent'],
    'no-inline-styles/no-inline-styles': 2,
    'quote-props': 2,
    'import/extensions': 0,
    'import/no-extraneous-dependencies': 'off',
    'padded-blocks': ['error', 'never'],
    'react/react-in-jsx-scope': 'off',
    'no-param-reassign': [
      'error',
      { props: true, ignorePropertyModificationsFor: ['store', 'acc'] },
    ],
    semi: 'off',
    'comma-dangle': 'off',
    'import/no-named-as-default': 0,
    'import/no-named-as-default-member': 0,
  },
  overrides: [
    {
      files: ['*.jsx'],
      rules: {},
    },
  ],
};
