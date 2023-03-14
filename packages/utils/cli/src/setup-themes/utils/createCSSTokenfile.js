import { appendFileSync } from 'node:fs'
import { join } from 'node:path'

import hexRgb from 'hex-rgb'

import { DEFAULT_KEY } from './constants.js'
import {
  doubleHyphensRegex,
  getRemEquivalentValue,
  isHex,
  isObject,
  isStringOrNumber,
  toKebabCase,
} from './utils.js'

function toCSSVars(_theme, className, htmlFontSize) {
  const flattenedTheme = {}

  function flatten(theme, paths = []) {
    Object.entries(theme).forEach(([key, value]) => {
      if (isObject(value)) {
        return flatten(value, paths.concat(key))
      }

      if (isStringOrNumber(value)) {
        const getFormattedValue = () => {
          if (isHex(value)) {
            const { red, green, blue } = hexRgb(value)

            return `${red} ${green} ${blue}`
          }

          if (/rem$/gi.test(value)) {
            return getRemEquivalentValue(value, htmlFontSize)
          }

          return value
        }

        flattenedTheme[
          `--${[...paths, key === DEFAULT_KEY ? key.toLowerCase() : key]
            .map(toKebabCase)
            .join('-')
            .replace(doubleHyphensRegex, '-')}`
        ] = getFormattedValue()
      }
    })
  }

  flatten(_theme)

  return {
    ...flattenedTheme,
    className,
  }
}

const toStringifiedTheme = theme =>
  Object.entries(theme)
    .map(([k, v]) => `${k}:${v}`)
    .join(';')

const getStringifiedThemes = (themeRecord, htmlFontSize) =>
  Object.keys(themeRecord).map(key => {
    const { className, ...rest } = toCSSVars(themeRecord[key], key, htmlFontSize)

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
export function createCSSTokensFile(path, themeRecord, htmlFontSize) {
  try {
    appendFileSync(
      join(process.cwd(), path),
      `
        @tailwind base;
        @tailwind components;
        @tailwind utilities;
        @layer base {${getStringifiedThemes(themeRecord, htmlFontSize).join('')}}
        `,
      {
        flag: 'w',
      }
    )
  } catch (error) {
    console.error('Failed to create the CSS token file', error)
  }
}
