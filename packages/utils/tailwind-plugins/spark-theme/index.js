import { defaultTheme } from '@spark-ui/theme-utils'
import { withOptions } from 'tailwindcss/plugin'

import { getCSSVariableDeclarations } from './getCSSVariableDeclarations'
import { getCSSVariableReferences } from './getCSSVariableReferences'
import { getAllObjectKeys, getObjectDifferences, retrieveArrayDifferences } from './utils'

const missingDefaultThemeErrorMsg =
  'A default theme is required. Please ensure that the "themes" object passed to this plugin includes a "default" key containing your default theme.'

const additionalItemsErrorMsg = (themeLabel, keys) =>
  `The following keys: ${JSON.stringify(
    keys
  )} do not adhere to our Spark Theme interface and should be removed from the ${themeLabel} theme`

const missingItemsErrorMsg = (themeLabel, keys) =>
  `The following keys: ${JSON.stringify(
    keys
  )} are missing from the ${themeLabel} theme, but required to comply with our Spark Theme interface`

export default withOptions(
  /**
   * @typedef {Object} Options
   * @property {Object} options.themes - An object containing your themes where each key corresponds to a data-theme attribute value.
   * @property {number} htmlFontSize The base font size of your app.
   */

  /**
   * @param {Object} options The options for the plugin.
   * @param {Object} [options.themes={}] An object containing your themes where each key corresponds to a data-theme attribute value.
   * @param {string} [options.htmlFontSize=16] The base font size to use to properly compute rem values.
   * @returns {Function} The PostCSS plugin function.
   */
  options =>
    ({ addBase }) => {
      const opts = options || {
        themes: {},
      }

      const { htmlFontSize = 16, themes } = opts

      if (!themes.default) throw new Error(missingDefaultThemeErrorMsg)

      const { missingItems, additionalItems } = retrieveArrayDifferences({
        ref: getAllObjectKeys(defaultTheme),
        comp: getAllObjectKeys(themes.default),
      })

      if (missingItems.length) throw new Error(missingItemsErrorMsg('default', missingItems))

      if (additionalItems.length) {
        throw new Error(additionalItemsErrorMsg('default', additionalItems))
      }

      addBase({
        ':root': getCSSVariableDeclarations(themes.default, htmlFontSize),
      })

      Object.entries(themes).forEach(([key, value]) => {
        if (key === 'default') return

        const { missingItems, additionalItems } = retrieveArrayDifferences({
          ref: getAllObjectKeys(defaultTheme),
          comp: getAllObjectKeys(value),
        })

        if (missingItems.length) throw new Error(missingItemsErrorMsg(key, missingItems))

        if (additionalItems.length) throw new Error(additionalItemsErrorMsg(key, additionalItems))

        addBase({
          [`[data-theme="${key}"]`]: getObjectDifferences(
            getCSSVariableDeclarations(themes.default, htmlFontSize),
            getCSSVariableDeclarations(value, htmlFontSize)
          ),
        })
      })
    },
  options => {
    const opts = options || {
      themes: {},
    }

    const { themes } = opts

    if (!themes.default) throw new Error(missingDefaultThemeErrorMsg)

    return {
      theme: {
        ...getCSSVariableReferences(themes.default),
        maxWidth: ({ breakpoints, theme }) => ({
          none: 'none',
          full: '100%',
          min: 'min-content',
          max: 'max-content',
          ...breakpoints(theme('screens')),
        }),
      },
    }
  }
)
