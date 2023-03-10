import { writeFileSync } from 'node:fs'
import { join } from 'node:path'

import { defaultTheme, Theme } from '@spark-ui/theme-utils'

import { isHex, isStringOrNumber, objectEntries, toKebabCase, toKebabCaseKeys } from './utils'

type NestedObj = Record<string, string | number | Record<string, string | number>>
type TailwindConfig = Record<string, Theme[keyof Theme]>

function toTailwindConfig(theme: Theme): TailwindConfig {
  const themeCpy: Theme = JSON.parse(JSON.stringify(theme))

  function flatten(obj: Theme, path?: string) {
    objectEntries(obj as unknown as NestedObj).forEach(([key, value]) => {
      if (value !== null && typeof value === 'object') {
        const formattedPath = path ? `--${path}-${key}` : `--${key}`
        flatten(value as unknown as Theme, toKebabCase(formattedPath.replace(/-{3,}/, '--')))

        return
      }

      /* eslint-disable */
      if (isStringOrNumber(value)) {
        const formattedPath =
          /--colors/.test(path || '') && isHex(value)
            ? `rgb(var(${path}-${toKebabCase(key as string)}) / <alpha-value>)`
            : `var(${path}-${toKebabCase(key as string)})`

        /* @ts-ignore */
        obj[key as any] = formattedPath
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
export function createTailwindThemeConfigFile(path: string) {
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
