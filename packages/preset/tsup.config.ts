import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/prefiex.ts', 'src/shortcuts.ts', 'src/theme.ts'],
  clean: true,
  format: ['cjs', 'esm'],
  external: ['unocss'],
  dts: true,
  minify: true,
})
