import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts', 'src/prefixes.ts', 'src/shortcuts.ts', 'src/theme.ts'],
  clean: true,
  format: ['cjs', 'esm'],
  external: ['unocss'],
  dts: true,
  minify: true,
})
