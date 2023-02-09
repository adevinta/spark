import deepMerge from 'deepmerge'
import { PartialDeep } from 'type-fest'

import { defaultTheme } from './defaultTheme.mjs'
import type { Theme } from './types.mjs'

export function createTheme(theme: PartialDeep<Theme> = {}): Theme {
  return deepMerge<Theme, PartialDeep<Theme>>(defaultTheme, theme)
}
