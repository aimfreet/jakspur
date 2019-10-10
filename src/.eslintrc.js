module.exports = {
    root: true,
    env: {
      node: true,
    },
    extends: [
      'plugin:vue/recommended',
      '@vue/airbnb',
    ],
    rules: {
      'linebreak-style': 0,
      'no-console': 'error',
      'no-debugger': 'error',
      'no-param-reassign': [
        'error',
        {
          props: true,
          ignorePropertyModificationsFor: [
            'state',
          ],
        },
      ],
      'no-shadow': [
        'error',
        {
          allow: [
            'getters',
            'state',
          ],
        },
      ],
    },
    parserOptions: {
      parser: 'babel-eslint',
    },
  };
  