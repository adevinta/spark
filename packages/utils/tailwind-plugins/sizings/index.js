import { withOptions } from 'tailwindcss/plugin'

const sizingRange = [
  0, 1, 2, 4, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 36, 40, 44, 48, 56, 64, 80, 96, 112, 128, 144,
  160, 176, 192, 208, 224, 240, 256, 288, 320, 384, 400, 416, 432, 448, 464, 480, 512, 544, 576,
  608, 640, 672, 704, 736, 768, 800, 832, 864,
]

function pxToRem(pxValue, htmlFontSize) {
  const remValue = pxValue / htmlFontSize

  return `${remValue}rem`
}

function getCSSVariableDeclarations(htmlFontSize) {
  const CSSVariableDeclarations = sizingRange.reduce((acc, size) => {
    acc[`--sz-${size}`] = pxToRem(size, htmlFontSize)

    return acc
  }, {})

  return CSSVariableDeclarations
}

function getCSSVariableReferences() {
  const CSSVariableReferences = sizingRange.reduce((acc, size) => {
    acc[`sz-${size}`] = `var(--sz-${size})`

    return acc
  }, {})

  return CSSVariableReferences
}

export default withOptions(
  /**
   * @typedef {Object} Options
   * @property {number} htmlFontSize The base font size of your app.
   */

  /**
   * @param {Object} options The options for the plugin.
   * @param {string} [options.htmlFontSize=16] The base font size to use to properly compute rem values.
   * @returns {Function} The PostCSS plugin function.
   */
  options =>
    ({ addBase }) => {
      const opts = options || {}

      const { htmlFontSize = 16 } = opts

      addBase({
        ':root': getCSSVariableDeclarations(htmlFontSize),
      })
    },
  () => ({
    theme: {
      extend: {
        width: getCSSVariableReferences(),
        maxWidth: getCSSVariableReferences(),
        minWidth: getCSSVariableReferences(),
        height: getCSSVariableReferences(),
        maxHeight: getCSSVariableReferences(),
        minHeight: getCSSVariableReferences(),
        translate: getCSSVariableReferences(),
        size: getCSSVariableReferences(),
      },
    },
  })
)
