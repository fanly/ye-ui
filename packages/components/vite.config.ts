import { resolve } from 'node:path'
import { URL, fileURLToPath } from 'node:url'
import UnoCSS from 'unocss/vite'
import { VineVitePlugin } from 'vue-vine/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import browserslist from 'browserslist'
import type { CSSModulesConfig } from 'lightningcss'
import { browserslistToTargets } from 'lightningcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), UnoCSS(), VineVitePlugin()],
  css: {
    transformer: 'lightningcss',
    lightningcss: {
      targets: browserslistToTargets(browserslist('>= 0.25%')),
      cssModules: {
        dashedIdents: true,
      } as CSSModulesConfig,
    },
  },
  build: {
    sourcemap: true,
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
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      'utils': fileURLToPath(new URL('./src/utils', import.meta.url))
    }
  }
})
