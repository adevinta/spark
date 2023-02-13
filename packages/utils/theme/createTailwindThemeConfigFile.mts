import { existsSync, mkdirSync, writeFileSync } from 'fs'
import parentModule from 'parent-module'
import { join } from 'path'

import { defaultTheme } from './defaultTheme.mjs'
import type { Theme } from './types.mjs'
import {
  buildFilePath,
  isHex,
  isStringOrNumber,
  objectEntries,
  toKebabCase,
  toKebabCaseKeys,
} from './utils.mjs'

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
 * @returns {void}
 *
 * @example
 *
 * createTailwindThemeConfigFile('tailwind.theme.js')
 */
export function createTailwindThemeConfigFile(path: string) {
  const { filepath, rootPath } = buildFilePath(join(parentModule() || '', path))

  const folders = filepath.split('/').slice(0, -1)
  folders.reduce((acc, folder) => {
    const folderPath = acc + folder + '/'
    if (!existsSync(folderPath)) {
      mkdirSync(folderPath)
    }

    return folderPath
  }, rootPath)

  try {
    writeFileSync(
      rootPath + filepath,
      `module.exports = ${JSON.stringify(toTailwindConfig(defaultTheme))}`,
      {
        flag: 'w',
      }
    )

    console.log(`✨ Tailwind theme config file has been created 👉 ${path}`)
  } catch (error) {
    console.error(error)
  }
}
