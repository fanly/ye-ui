import {antfu} from '@antfu/eslint-config'
import * as VueVineESLintParser from '@vue-vine/eslint-parser'

export default antfu(
  {
    type: 'lib',
    unocss: true,
    vue: true,
    typescript: true,
    // 在这里覆盖 antfu 的设置：
    // - 目前不支持 ESLint Stylistic
    stylistic: false,
    formatters: {
      /**
       * Format CSS, LESS, SCSS files, also the `<style>` blocks in Vue
       * By default uses Prettier
       */
      css: true,
      /**
       * Format Markdown files
       * Supports Prettier and dprint
       * By default uses Prettier
       */
      markdown: 'prettier'
    },
    rules: {
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/consistent-type-definitions': 'off',
      'import/first': 'off',
      'import/order': 'off',
      'symbol-description': 'off',
      'no-console': 'warn',
      'max-statements-per-line': ['error', { max: 2 }],
      semi: ["error", "never"], // 语句末尾不加分号
      'vue/one-component-per-file': 'off',
      'vue/no-parsing-error': [
        'error',
        {
          'invalid-first-character-of-tag-name': false,
        },
      ],
    },
  },
  {
    ignores: [
      'node_modules', 'dist', '**/src/**/*.vine.ts'
    ],
  },
  {
    files: ['**/src/**/*.vine.ts'],
    languageOptions: {
      parser: VueVineESLintParser,
    },
    rules: {
      'no-console': 'warn',
    },
  }
)
