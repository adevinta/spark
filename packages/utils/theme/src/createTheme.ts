import deepMerge from 'deepmerge'

import { defaultTheme } from './defaultTheme'
import { type Theme } from './types'

/**
 * Create a custom theme by merging the default theme with a partial custom theme passed as an argument.
 *
 * @param theme - A partial theme object of type Partial<Theme> which holds the theme values that need to be customized or overridden
 * @param fromTheme - Use this argument if you want to derivate your theme from another theme (instead of Spark's default theme)
 *
 * @example
 *
 * const alternativeTheme: Partial<Theme> = { ... }
 * const newTheme = createTheme(alternativeTheme)
 */
export function createTheme(theme: Partial<Theme>, fromTheme: Theme = defaultTheme): Theme {
  return deepMerge<Theme, Partial<Theme>>(fromTheme, theme)
}
