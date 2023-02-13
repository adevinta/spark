import deepMerge from 'deepmerge'
import { PartialDeep } from 'type-fest'

import { defaultTheme } from './defaultTheme.mjs'
import type { Theme } from './types.mjs'

/**
 * Create a custom theme by merging the default theme with a partial custom theme passed as an argument.
 *
 * @param {PartialDeep<Theme>} theme - A partial theme object of type PartialDeep<Theme> which holds the theme values that need to be customized or overridden
 *
 * @returns {Theme}
 *
 * @example
 *
 * const alternativeTheme: PartialDeep<Theme> = { ... }
 * const newTheme = createTheme(alternativeTheme)
 */
export function createTheme(theme: PartialDeep<Theme> = {}): Theme {
  return deepMerge<Theme, PartialDeep<Theme>>(defaultTheme, theme)
}
