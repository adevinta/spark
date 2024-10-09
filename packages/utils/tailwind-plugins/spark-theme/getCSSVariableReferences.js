import {
  DEFAULT_KEY,
  tailwindCategoryKeys,
  transitionDelayDurationLookup,
  transitionDurationLookup,
  transitionTimingFunctionLookup,
  unassignedColors,
} from './constants'
import {
  doubleHyphensRegex,
  hasNumber,
  isAlphanumericWithLeadingLetter,
  isCamelCase,
  isHex,
  isObject,
  isStringOrNumber,
  toKebabCase,
} from './utils'

function getCSSVariableReferences(_theme) {
  const themeCpy = JSON.parse(JSON.stringify(_theme))

  const { fontSize, colors, screens } = tailwindCategoryKeys

  function traverse(theme, paths = []) {
    /* eslint-disable-next-line complexity */
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
          if (k === DEFAULT_KEY) return
          if (!isObject(value[k]) && !isCamelCase(k)) return

          const tmp = value[k]
          delete value[k]
          value[toKebabCase(k)] = tmp
        })

        return traverse(value, paths.concat(key))
      }

      if (isStringOrNumber(value)) {
        const rootPath = paths[0] || ''
        const isScreenValue = rootPath.includes(screens)
        const isColorValue = rootPath.includes(colors)

        const formattedValue = (() => {
          if (isColorValue && isHex(value)) {
            return `rgb(var(--${paths.join('-')}-${key}) / <alpha-value>)`
          }

          if (isScreenValue) return String(value).toLowerCase()

          return `var(--${paths.join('-')}-${key.toLowerCase()})`
        })()

        const formattedKey = isAlphanumericWithLeadingLetter(key) ? toKebabCase(key) : key

        if (formattedKey !== key) {
          delete theme[key]
        }

        theme[formattedKey] = isScreenValue
          ? formattedValue
          : toKebabCase(formattedValue).replace(doubleHyphensRegex, '-')
      }
    })
  }

  traverse(themeCpy)

  return {
    ...themeCpy,
    colors: { ...themeCpy.colors, ...unassignedColors },
    transitionDuration: transitionDurationLookup,
    transitionDelay: transitionDelayDurationLookup,
    extend: {
      transitionTimingFunction: transitionTimingFunctionLookup,
    },
  }
}

export default { getCSSVariableReferences }
