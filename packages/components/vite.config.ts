import { resolve } from 'node:path'
import UnoCSS from 'unocss/vite'
import { VineVitePlugin } from 'vue-vine/vite'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VineVitePlugin(), vue(), UnoCSS()],
  build: {
    emptyOutDir: false,
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
