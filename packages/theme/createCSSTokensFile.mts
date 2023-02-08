import { appendFileSync, existsSync, mkdirSync } from 'fs'
import hexRgb from 'hex-rgb'
import parentModule from 'parent-module'
import { join } from 'path'

import type { Theme } from './types.js'
import {
  buildFilePath,
  isHex,
  isStringOrNumber,
  objectEntries,
  objectKeys,
  toKebabCase,
} from './utils.mjs'

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

export function createCSSTokensFile(path: string, themeRecord: Record<string, Theme>) {
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
    appendFileSync(
      rootPath + filepath,
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

    console.log(`✨ CSS tokens file has been created 👉 ${path}`)
  } catch (error) {
    console.error(error)
  }
}
