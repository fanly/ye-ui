// uno.config.ts
import { defineConfig, presetAttributify, presetWind, transformerDirectives } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'
import { colors } from 'unocss/preset-mini'

const types = ['primary', 'secondary', 'accent', 'success', 'info', 'warning', 'error']
const levels = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']
const sizes = ['xs', 'sm', 'md', 'base', 'lg']
const fractions = ['1/2', '1/3', '1/4', '1/5', '1/6', 'full', '80', '96', '120', 'sm', 'md', 'lg']

export default defineConfig({
  presets: [
    presetWind(),
    presetAttributify(),
    transformerDirectives(),
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
    ...types.map((t) => `input-theme-${t}`),
    ...types.map((t) => `input-b-${t}`),
    ...fractions.map((f) => `w-${f} h-${f}`.split(' ')).flat(),
    ...types.map((t) => `border-r-${t}-500`),
    ...sizes.map((s) => `rounded-${s}`),
    ...sizes.map((s) => `text-${s}`),
    ...sizes.map((s) => `btn-${s}`),
    ...sizes.map((s) => `input-${s}`),
    ...sizes.map((s) => `btn-c-${s}`),
    'btn',
    ...sizes.map((s) => `input-c-${s}`),
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
  rules: [],
  shortcuts: [
    {
      btn: 'border-0 box-border cursor-default *:border-0 *:box-border before:border-0 before:box-border after:border-0 after:box-border disabled:cursor-default',
      'btn-lg': 'h-16 min-h-16 px-16 text-lg font-black',
      'btn-md': 'h-12 min-h-12 px-12 text-base font-medium',
      'btn-base': 'h-12 min-h-12 px-12 text-base font-medium',
      'btn-sm': 'h-8 min-h-8 px-8 text-sm font-light',
      'btn-xs': 'h-6 min-h-6 px-6 text-xs font-thin',
      'btn-c-lg': 'w-24 h-24 rounded-1/2 p-4 text-lg font-black',
      'btn-c-md': 'w-20 h-20 rounded-1/2 p-2 text-base font-medium',
      'btn-c-base': 'w-20 h-20 rounded-1/2 p-2 text-base font-medium',
      'btn-c-sm': 'w-18 h-18 rounded-1/2 p-1 text-sm font-light',
      'btn-c-xs': 'w-14 h-14 rounded-1/2 p-0.5 text-xs font-thin',
    },
    {
      'input-lg': 'block bg-transparent border-none border-0 p-4 text-lg font-black focus:outline-none',
      'input-md': 'block bg-transparent border-none border-0 p-2.5 text-base font-medium focus:outline-none',
      'input-base': 'block bg-transparent border-none border-0 p-2.5 text-base font-medium focus:outline-none',
      'input-sm': 'block bg-transparent border-none border-0 p-2 text-sm font-light focus:outline-none',
      'input-xs': 'block bg-transparent border-none border-0 p-1 text-xs font-thin focus:outline-none',
      'input-c-md':
        'w-12 h-12 rounded-1/2 p-2.5 pr-10 text-base font-medium border-none outline-none shadow shadow-zinc-700 duration-500 ease-in-out',
    },
    // dynamic shortcuts
    [/^button-(.*)$/, ([, c]) => `bg-${c}-400 hover:bg-${c}-800 text-${c}-100`],
    [/^input-theme-(.*)$/, ([, c]) => `bg-${c}-400 hover:bg-${c}-800 text-${c}-100`],
    [/^input-b-(.*)$/, ([, c]) => `bg-transparent border-solid border-b-1 border-b-${c}-400 text-${c}-100`],
  ],
})
