import { antfu } from '@antfu/eslint-config'
import * as VueVineESLintParser from '@vue-vine/eslint-parser'

export default antfu( {
  // 在这里覆盖 antfu 的设置：
  // - 目前不支持 ESLint Stylistic
  stylistic: false,
  }, {
  files: [
    '/packages/**/*.vine.ts',
  ],
  languageOptions: {
    parser: VueVineESLintParser,
  },
  ignores: ['/dist', '/node_modules', '/packages/**/dist', '/packages/**/node_modules'],
  rules: {
    '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    '@typescript-eslint/consistent-type-definitions': 'off',
    'import/first': 'off',
    'import/order': 'off',
    'symbol-description': 'off',
    'no-console': 'warn',
    'max-statements-per-line': ['error', { max: 2 }],
    'vue/one-component-per-file': 'off',
    'vue/no-parsing-error': [
      'error',
      {
        'invalid-first-character-of-tag-name': false,
      },
    ],
  },
})
