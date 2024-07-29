import { resolve } from 'node:path'
import UnoCSS from 'unocss/vite'
import { VineVitePlugin } from 'vue-vine/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import browserslist from 'browserslist'
import { browserslistToTargets } from 'lightningcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    UnoCSS(),
    VineVitePlugin(),
  ],
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%')),
    },
  },
  build: {
    emptyOutDir: false,
    cssMinify: 'lightningcss',
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: '@ye-ui/components',
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
