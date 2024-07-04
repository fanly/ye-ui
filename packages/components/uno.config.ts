// uno.config.ts
import { defineConfig, presetUno } from 'unocss'
import { presetUnocssUI } from '@ye-ui/preset'
import prefixes from '@ye-ui/preset/prefixes'
import extractor from '@ye-ui/extractor'
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
  extractors: [
    extractor({
      prefixes,
    }),
  ],
})
