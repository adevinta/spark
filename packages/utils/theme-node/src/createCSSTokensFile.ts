import { appendFileSync } from 'node:fs'
import { join } from 'node:path'

import hexRgb from 'hex-rgb'
import type { RequireAtLeastOne } from 'type-fest'

import type { Theme } from '../../theme/src/types'
import { isHex, isStringOrNumber, objectEntries, objectKeys, toKebabCase } from './utils'

/* eslint-disable-next-line @typescript-eslint/ban-types */
type FlattenedTheme = Record<'className' | (string & {}), string | number>
type NestedObj = Record<string, string | number | Record<string, string | number>>

function flattenTheme(theme: Theme, className: string): FlattenedTheme {
  const flattenedTheme = {} as FlattenedTheme

  function flatten(obj: Theme, path?: string) {
    objectEntries(obj as unknown as NestedObj).forEach(([key, value]) => {
      if (value !== null && typeof value === 'object') {
        const formattedPath = path ? `--${path}-${key}` : `--${key}`
        flatten(value as unknown as Theme, toKebabCase(formattedPath.replace(/-{3,}/, '--')))

        return
      }

      if (isStringOrNumber(value)) {
        const getFormattedValue = () => {
          if (isHex(value)) {
            const { red, green, blue } = hexRgb(value)

            return `${red} ${green} ${blue}`
          }

          return value
        }

        flattenedTheme[`${path}-${toKebabCase(key as string)}`] = getFormattedValue()
      }
    })
  }

  flatten(theme)

  return {
    ...flattenedTheme,
    className,
  }
}

const toStringifiedTheme = (theme: Record<string, string | number>) =>
  Object.entries(theme)
    .map(([k, v]) => `${k}:${v}`)
    .join(';')

const getStringifiedThemes = (themeRecord: Record<string, Theme>) =>
  objectKeys(themeRecord).map(key => {
    const { className, ...rest } = flattenTheme(themeRecord[key] as Theme, key)

    return key === 'default'
      ? `:root{${toStringifiedTheme(rest)}}`
      : `.${className}{${toStringifiedTheme(rest)}}`
  })

/**
 * Creates a CSS file containing theme tokens represented as CSS custom properties
 *
 * @param {string} path - The file path where the CSS file will be created.
 * @param {Record<string, Theme>} themeRecord - A record (with a required key of "default") of themes that will be included in the CSS Tokens file.
 *
 * @example
 *
 * const defaultTheme: Theme = { ... }
 * const darkTheme: Theme = { ... }
 * const otherTheme: Theme = { ... }
 *
 * const themes = {
 *   default: defaultTheme,
 *   dark: darkTheme
 *   other: otherTheme
 * }
 *
 * createCSSTokensFile('somePath.css', themes) // will generate a "somePath.css" file in the relative location from which it was called
 */
export function createCSSTokensFile(
  path: string,
  themeRecord: RequireAtLeastOne<Record<string, Theme>, 'default'>
) {
  try {
    appendFileSync(
      join(process.cwd(), path),
      `
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        @layer base {${getStringifiedThemes(themeRecord).join('')}}
        `,
      {
        flag: 'w',
      }
    )
  } catch (error) {
    console.error('Failed to create the CSS token file', error)
  }
}
