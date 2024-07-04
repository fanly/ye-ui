import type { Preset, StaticShortcutMap } from '@unocss/core'
import { button } from './button.ts'

export const shortcuts = [
  ...button,
] as Exclude<Preset['shortcuts'], undefined | StaticShortcutMap>
