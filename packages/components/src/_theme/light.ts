import type { Theme } from 'unocss/preset-mini'
import { generate } from './utils'

export interface PresetYeLightOptions {
  /**
   * Used to generate light theme colors
   *
   * @default #ffffff
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
   * @default #008080
   */
  secondary?: string
  /**
   * Base accent color
   *
   * @default #FFC0CB
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

export function light(options: PresetYeLightOptions = {}): Theme {
  const {
    backgroundColor = '#ffffff',
    primary = '#1677ff',
    secondary = '#008080',
    accent = '#FFC0CB',
    success = '#52c41a',
    warning = '#faad14',
    error = '#ff4d4f',
    info = '#1677ff',
  } = options

  return {
    colors: {
      primary: generate(primary, 'default', backgroundColor),
      success: generate(success, 'default', backgroundColor),
      secondary: generate(secondary, 'default', backgroundColor),
      accent: generate(accent, 'default', backgroundColor),
      warning: generate(warning, 'default', backgroundColor),
      error: generate(error, 'default', backgroundColor),
      info: generate(info, 'default', backgroundColor),
    },
  }
}

export default light