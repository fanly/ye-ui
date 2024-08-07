import type { Theme } from 'unocss/preset-mini'
import { generate } from './utils'

export interface PresetYeDarkOptions {
  /**
   * Used to generate dark theme colors
   *
   * @default #141414
   */
  backgroundColor?: string
  /**
   * Base primary color
   *
   * @default #1677ff
   */
  primary?: string
  /**
   * Base secondary color
   *
   * @default #014D4E
   */
  secondary?: string
  /**
   * Base accent color
   *
   * @default #E75480
   */
  accent?: string
  /**
   * Base success color
   *
   * @default #52c41a
   */
  success?: string
  /**
   * Base warning color
   *
   * @default #faad14
   */
  warning?: string
  /**
   * Base error color
   *
   * @default #ff4d4f
   */
  error?: string
  /**
   * Base info color
   *
   * @default #1677ff
   */
  info?: string
}

export function dark(options: PresetYeDarkOptions = {}): Theme {
  const {
    backgroundColor = '#141414',
    primary = '#1677ff',
    secondary = '#014D4E',
    accent = '#E75480',
    success = '#52c41a',
    warning = '#faad14',
    error = '#ff4d4f',
    info = '#1677ff',
  } = options

  return {
    colors: {
      primary: generate(primary, 'dark', backgroundColor),
      success: generate(success, 'dark', backgroundColor),
      secondary: generate(secondary, 'dark', backgroundColor),
      accent: generate(accent, 'dark', backgroundColor),
      warning: generate(warning, 'dark', backgroundColor),
      error: generate(error, 'dark', backgroundColor),
      info: generate(info, 'dark', backgroundColor),
    },
  }
}

export default dark