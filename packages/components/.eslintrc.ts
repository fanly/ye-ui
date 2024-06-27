module.exports = {
  env: {
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:vue/vue3-recommended', 'prettier'],
  rules: {
    // override/add rules settings here, such as:
    // 'vue/no-unused-vars': 'error'
    'vue/no-parsing-error': [
      'error',
      {
        'invalid-first-character-of-tag-name': false,
      },
    ],
  },
}
