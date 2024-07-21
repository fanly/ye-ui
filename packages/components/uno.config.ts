// uno.config.ts
import { defineConfig, presetUno } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'
import { colors } from 'unocss/preset-mini'

const types = ['primary', 'secondary', 'accent', 'success', 'info', 'warning', 'error']
const levels = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']

export default defineConfig({
  presets: [
    presetUno(),
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
  safelist: [
    ...types.map((t) => levels.map((l) => `bg-${t}-${l}`)).flat(),
    ...types.map((t) => levels.map((l) => `hover:bg-${t}-${l}`)).flat(),
    ...types.map((t) => levels.map((l) => `border-${t}-${l}`)).flat(),
    ...types.map((t) => levels.map((l) => `text-${t}-${l}`)).flat(),
    ...types.map((t) => levels.map((l) => `focus:ring-${t}-${l}`)).flat(),
    ...types.map((t) => levels.map((l) => `focus:border-${t}-${l}`)).flat(),
    ...types.map((t) => `border-r-${t}-500`),
    ...types.map((t) => `button-${t}`),
    'btn'
  ],
  theme: {
    colors: {
      primary: colors.indigo,
      secondary: colors.teal,
      accent: colors.pink,
      success: colors.green,
      info: colors.blue,
      warning: colors.yellow,
      error: colors.red,
    },
  },
  shortcuts: [
    {
      'btn': 'border-0 box-border cursor-default *:border-0 *:box-border before:border-0 before:box-border after:border-0 after:box-border disabled:cursor-default',
    },
    // dynamic shortcuts
    [/^button-(.*)$/, ([, c]) => `bg-${c}-400 hover:bg-${c}-800 text-${c}-100`],
  ]
})
