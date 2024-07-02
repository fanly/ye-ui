// uno.config.ts
import { defineConfig, toEscapedSelector as e, presetUno } from 'unocss'
import { presetUnocssUI } from '@ye-ui/preset'
import presetWebFonts from '@unocss/preset-web-fonts'

export default defineConfig({
  presets: [
    presetUno(),
    presetUnocssUI(),
    presetWebFonts({
      provider: 'google', // default provider
      fonts: {
        // these will extend the default theme
        sans: 'Roboto',
        mono: ['Fira Code', 'Fira Mono:400,700'],
        // custom ones
        lobster: 'Lobster',
        lato: [
          {
            name: 'Lato',
            weights: ['400', '700'],
            italic: true,
          },
          {
            name: 'sans-serif',
            provider: 'none',
          },
        ],
      },
    }),
  ],
  rules: [
    [
      /^text-(.*)$/,
      ([, c], { theme }) => {
        if (theme.colors[c])
          return { color: theme.colors[c] }
      },
    ],
    [
      /^button-(.+)$/,
      ([, color], { rawSelector, theme }) => {
        const selector = e(rawSelector)
        console.log(theme)
        // const themes = theme as Theme
        const themeColor = theme.colors[color]
        console.log(themeColor)
        // return a string instead of an object
        return `
          ${selector} {
            background: ${themeColor};
            color: color-contrast(${themeColor} vs #fff, #000);
          }
          /* you can have multiple rules */
          ${selector}:hover {
            background: hsl(from ${themeColor} h s calc(l * 1.2));
          }
          `
      },
    ],
  ],
})
