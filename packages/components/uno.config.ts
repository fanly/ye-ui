// uno.config.ts
import { defineConfig, presetUno } from 'unocss'
import { presetUnocssUI } from '@ye-ui/preset'

export default defineConfig({
  presets: [presetUno(), presetUnocssUI()],
})
