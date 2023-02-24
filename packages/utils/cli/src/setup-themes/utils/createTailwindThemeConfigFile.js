import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

import { defaultTheme } from '@spark-ui/theme-utils'

import { isHex, isStringOrNumber, toKebabCase, toKebabCaseKeys } from '../../utils.js'

function toTailwindConfig(theme) {
  const themeCpy = JSON.parse(JSON.stringify(theme))

  /* eslint-disable complexity */
  function flatten(obj, path) {
    Object.entries(obj).forEach(([key, value]) => {
      if (value !== null && typeof value === 'object' && !path && key === 'fontSize') {
        Object.keys(value).forEach(k => {
          if (isStringOrNumber(value[k])) {
            obj[key][k] = `var(--${toKebabCase(key)}-${k})`

            return
          }

          obj[key][k] = [
            `var(--${toKebabCase(key)}-${k}-font-size`,
            {
              ...(value[k].lineHeight && {
                lineHeight: `var(--${toKebabCase(key)}-${k}-line-height`,
              }),
              ...(value[k].letterSpacing && {
                letterSpacing: `var(--${toKebabCase(key)}-${k}-letter-spacing`,
              }),
              ...(value[k].fontWeight && {
                fontWeight: `var(--${toKebabCase(key)}-${k}-font-weight`,
              }),
            },
          ]
        })

        return
      }

      if (value !== null && typeof value === 'object') {
        const formattedPath = path ? `--${path}-${key}` : `--${key}`
        flatten(value, toKebabCase(formattedPath.replace(/-{3,}/, '--')))

        return
      }

      /* eslint-disable */
      if (isStringOrNumber(value)) {
        const formattedValue = (() => {
          if (/--colors/.test(path || '') && isHex(value))
            return `rgb(var(${path}-${toKebabCase(key)}) / <alpha-value>)`
          if (/--screens/.test(path || '')) return value
          return `var(${path}-${toKebabCase(key)})`
        })()

        obj[key] = formattedValue
        /* eslint-enable */
      }
    })
  }

  flatten(themeCpy)

  return toKebabCaseKeys(themeCpy)
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
