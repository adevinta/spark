import { DEFAULT_KEY } from './constants'
import { hexRgb } from './hexRgb'
import {
  doubleHyphensRegex,
  getRemEquivalentValue,
  isHex,
  isObject,
  isStringOrNumber,
  toKebabCase,
} from './utils'

function getCSSVariableDeclarations(_theme, htmlFontSize) {
  const CSSVariableObj = {}

  function traverse(theme, paths = []) {
    Object.entries(theme).forEach(([key, value]) => {
      if (isObject(value)) return traverse(value, paths.concat(key))

      if (isStringOrNumber(value)) {
        const getFormattedValue = () => {
          if (isHex(value)) {
            const { red, green, blue } = hexRgb(value)

            return `${red} ${green} ${blue}`
          }

          if (/rem$/gi.test(value)) return getRemEquivalentValue(value, htmlFontSize)

          return value
        }

        CSSVariableObj[
          `--${[...paths, key === DEFAULT_KEY ? key.toLowerCase() : key]
            .map(toKebabCase)
            .join('-')
            .replace(doubleHyphensRegex, '-')}`
        ] = getFormattedValue()
      }
    })
  }

  traverse(_theme)

  return CSSVariableObj
}

export default { getCSSVariableDeclarations }
