// uno.config.ts
import { defineConfig, presetAttributify, presetWind, transformerDirectives, transformerVariantGroup } from 'unocss'
import presetWebFonts from '@unocss/preset-web-fonts'
import presetYeTheme from './src/_theme'
const types = ['primary', 'secondary', 'accent', 'success', 'info', 'warning', 'error']
// const levels = ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900', '950']
const levels = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
const sizes = ['xs', 'sm', 'md', 'base', 'lg']
const fractions = ['1/2', '1/3', '1/4', '1/5', '1/6', 'full', '80', '96', '120', 'xs', 'sm', 'md', 'base', 'lg']
const numbers = ['0', '0.5', '1', '1.5', '2', '2.5', '3', '3.5', '4', '5', '6', '7', '8', '9', '10', '11', '12', '14', '16', '20', '24', '28', '32', '36', '40', '44', '48', '52', '56', '60', '64', '72', '80', '96']

export default defineConfig({
  presets: [
    presetWind(),
    presetAttributify(),
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
    presetYeTheme(),
  ],
  transformers: [
    transformerDirectives({
      // the defaults
      applyVariable: ['--at-apply', '--uno-apply', '--uno'],
      // or disable with:
      // applyVariable: false
    }),
    transformerVariantGroup()
  ],
  safelist: [
    ...types.map((t) => levels.map((l) => `bg-${t}-${l}`)).flat(),
    ...types.map((t) => levels.map((l) => `hover:bg-${t}-${l}`)).flat(),
    ...types.map((t) => levels.map((l) => `border-${t}-${l}`)).flat(),
    ...types.map((t) => levels.map((l) => `text-${t}-${l}`)).flat(),
    ...types.map((t) => levels.map((l) => `border-t-${t}-${l}`)).flat(),
    ...types.map((t) => levels.map((l) => `border-b-${t}-${l}`)).flat(),
    ...types.map((t) => levels.map((l) => `focus:ring-${t}-${l}`)).flat(),
    ...types.map((t) => levels.map((l) => `focus:border-${t}-${l}`)).flat(),
    ...types.map((t) => `border-r-${t}-5`),
    ...types.map((t) => `button-${t}`),
    ...types.map((t) => `input-theme-${t}`),
    ...types.map((t) => `input-b-${t}`),
    ...fractions.map((f) => `w-${f} h-${f}`.split(' ')).flat(),
    ...sizes.map((s) => `rounded-${s}`),
    ...sizes.map((s) => `text-${s}`),
    ...sizes.map((s) => `btn-${s}`),
    ...sizes.map((s) => `input-${s}`),
    ...sizes.map((s) => `btn-c-${s}`),
    ...sizes.map((s) => `c-${s}`),
    ...numbers.map((s) => `size-${s}`),
    ...numbers.map((s) => `sizeC-${s}`),
    'btn',
    'bar',
    ...types.map((t) => `bar-${t}`),
    ...sizes.map((s) => `input-c-${s}`),
  ],
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
      'c-lg': 'w-20 h-20 rounded-full',
      'c-md': 'w-16 h-16 rounded-full',
      'c-base': 'w-16 h-16 rounded-full',
      'c-sm': 'w-12 h-12 rounded-full',
      'c-xs': 'w-10 h-10 rounded-full',
    },
    {
      'input-lg': 'block bg-transparent border-none border-0 p-4 text-lg font-black focus:outline-none',
      'input-md': 'block bg-transparent border-none border-0 p-2.5 text-base font-medium focus:outline-none',
      'input-base': 'block bg-transparent border-none border-0 p-2.5 text-base font-medium focus:outline-none',
      'input-sm': 'block bg-transparent border-none border-0 p-2 text-sm font-light focus:outline-none',
      'input-xs': 'block bg-transparent border-none border-0 p-1 text-xs font-thin focus:outline-none',
      'input-c-md':
        'w-12 h-12 rounded-1/2 p-2.5 text-base font-medium border-none outline-none shadow shadow-zinc-700 duration-500 ease-in-out',
    },
    {
      'bar': 'relative block before-content-[\'\'] after-content-[\'\'] before:(h-0.5 bottom-0.5 absolute transition-all duration-200 ease-linear left-1/2) after:(h-0.5 bottom-0.5 absolute transition-all duration-200 ease-linear right-1/2)'
    },
    // dynamic shortcuts
    [/^button-(.*)$/, ([, c]) => `bg-${c}-4 hover:bg-${c}-8 text-${c}-1`],
    [/^input-theme-(.*)$/, ([, c]) => `bg-${c}-4 text-${c}-3`],
    [/^input-b-(.*)$/, ([, c]) => `bg-transparent border-solid border-b border-b-${c}-3 text-${c}-3 focus:border-b-${c}-3`],
    [/^bar-(.*)$/, ([, c]) => `before:bg-${c}-7 after:bg-${c}-7`],
    [/^size-(.*)$/, ([, c]) => `size-${c}`],
    [/^sizeC-(.*)$/, ([, c]) => `size-${c} rounded-full`],
  ],
})
