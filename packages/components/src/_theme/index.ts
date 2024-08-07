import type { Preset } from 'unocss'
import type { Theme } from 'unocss/preset-mini'
import { type PresetThemeOptions, presetTheme } from '@ye-ui/preset'
import { light } from './light'
import { dark } from './dark'
export interface PresetYeOptions extends Omit<PresetThemeOptions<Theme>, 'theme'> {
  /**
   * Used to generate light colors
   *
   * @default #ffffff
   */
  lightBackgroundColor?: string
  /**
   * Used to generate dark theme colors
   *
   * @default #141414
   */
  darkBackgroundColor?: string
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

export function presetYeTheme(options: PresetYeOptions = {}): Preset<Theme> {
  const {
    prefix = '--un-preset-ye',
    selectors,
    lightBackgroundColor = '#f1f2f6',
    darkBackgroundColor = '#2f3542',
    primary = '#3742fa',
    secondary = '#5352ed',
    accent = '#ff7f50',
    success = '#2ed573',
    warning = '#ffa502',
    error = '#ff4757',
    info = '#1677ff',
  } = options

  return presetTheme<Theme>({
    prefix,
    selectors,
    theme: {
      light: light({
        backgroundColor: lightBackgroundColor,
        primary,
        secondary,
        accent,
        success,
        warning,
        error,
        info,
      }),
      dark: dark({
        backgroundColor: darkBackgroundColor,
        primary,
        secondary,
        accent,
        success,
        warning,
        error,
        info,
      }),
    },
  })
}

export default presetYeTheme