import deepMerge from 'deepmerge'

import { defaultTheme } from './defaultTheme'
import { type Theme } from './types'

/**
 * Creates a custom theme by merging the default theme with a partial custom theme passed as an argument.
 *
 * @param {Partial<Theme>} theme - A partial theme object which holds the theme values that need to be customized or overridden. When a category is included in the `theme` parameter, all of the category's tokens must be overridden.
 * @param {Theme} [fromTheme=defaultTheme] - (Optional) A theme object from which to derive the new custom theme (instead of Spark's `defaultTheme`)
 *
 * @example
 *
 * const alternativeTheme: Partial<Theme> = { ... }
 * const newTheme = createTheme(alternativeTheme)
 */
export function createTheme(theme: Partial<Theme>, fromTheme: Theme = defaultTheme): Theme {
  return deepMerge<Theme, Partial<Theme>>(fromTheme, theme)
}
