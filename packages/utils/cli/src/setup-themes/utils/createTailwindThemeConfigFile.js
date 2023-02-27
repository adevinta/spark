import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

import { defaultTheme } from '@spark-ui/theme-utils'

import { tailwindKeys } from './constants.js'
import {
  doubleHyphensRegex,
  hasNumber,
  isCamelCase,
  isHex,
  isObject,
  isStringOrNumber,
  toKebabCase,
} from './utils.js'

function toTailwindConfig(_theme) {
  const themeCpy = JSON.parse(JSON.stringify(_theme))

  const { fontSize, colors, screens } = tailwindKeys

  function traverse(theme, paths = []) {
    Object.entries(theme).forEach(([key, value]) => {
      // 👀 see: https://tailwindcss.com/docs/font-size#providing-a-default-line-height
      if (isObject(value) && !paths.length && key === fontSize) {
        Object.keys(value).forEach(k => {
          const prefix = toKebabCase(fontSize)
          if (isStringOrNumber(value[k])) {
            theme[key][k] = `var(--${prefix}-${k})`

            return
          }

          const kebabedKey = isCamelCase(k) || hasNumber(k) ? toKebabCase(k) : k

          if (kebabedKey !== k) {
            const tmp = theme[key][k]
            delete theme[key][k]
            theme[key][kebabedKey] = tmp
          }

          theme[key][kebabedKey] = [
            `var(--${prefix}-${kebabedKey}-font-size)`,
            {
              ...(value[kebabedKey].lineHeight && {
                lineHeight: `var(--${prefix}-${kebabedKey}-line-height)`,
              }),
              ...(value[kebabedKey].letterSpacing && {
                letterSpacing: `var(--${prefix}-${kebabedKey}-letter-spacing)`,
              }),
              ...(value[kebabedKey].fontWeight && {
                fontWeight: `var(--${prefix}-${kebabedKey}-font-weight)`,
              }),
            },
          ]
        })

        return
      }

      if (isObject(value)) {
        Object.keys(value).forEach(k => {
          if (!isObject(value[k]) && !isCamelCase(k)) {
            return
          }

          const tmp = value[k]
          delete value[k]
          value[toKebabCase(k)] = tmp
        })

        return traverse(value, paths.concat(key))
      }

      if (isStringOrNumber(value)) {
        const rootPath = paths.at(0) ?? ''
        const isScreenValue = rootPath.includes(screens)
        const isColorValue = rootPath.includes(colors)

        const formattedValue = (() => {
          if (isColorValue && isHex(value)) {
            return `rgb(var(--${paths.join('-')}-${key}) / <alpha-value>)`
          }
          if (isScreenValue) {
            return String(value).toLowerCase()
          }

          return `var(--${paths.join('-')}-${key})`
        })()

        theme[key] = isScreenValue
          ? formattedValue
          : toKebabCase(formattedValue).replace(doubleHyphensRegex, '-')
      }
    })
  }

  traverse(themeCpy)

  return themeCpy
}

/**
 * Creates a Tailwind config file that links the [theme options](https://tailwindcss.com/docs/theme#configuration-reference) provided by Tailwind with the CSS custom property values generated using the "createCSSTokensFile" function
 *
 * @param {string} path - The file path where the Tailwind config file will be created.
 *
 * @example
 *
 * createTailwindThemeConfigFile('./tailwind.theme.js') // will generate a "tailwind.theme.js" in the relative location from which it was called
 */
export function createTailwindThemeConfigFile(path) {
  try {
    writeFileSync(
      join(process.cwd(), path),
      `module.exports = ${JSON.stringify(toTailwindConfig(defaultTheme))}`,
      {
        flag: 'w',
      }
    )
  } catch (error) {
    console.error('Failed to create the Tailwind theme config file', error)
  }
}
