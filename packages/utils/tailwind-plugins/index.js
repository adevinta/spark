/* eslint-disable @typescript-eslint/no-var-requires */
const animations = require('./animations')
const sizings = require('./sizings')
const utilities = require('./utilities')
const sparkTheme = require('./spark-theme')
const tailwindConfigViewerMisc = require('./tailwind.config.viewer.misc')
const tailwindcssRadix = require('tailwindcss-radix')

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
const sparkConfig = ({ htmlFontSize, themes }) => {
  return [
    sparkTheme({ htmlFontSize, themes }),
    sizings({ htmlFontSize }),
    animations(),
    utilities(),
    tailwindcssRadix({ variantPrefix: 'spark' }),
  ]
}

module.exports = {
  animations,
  sizings,
  utilities,
  sparkTheme,
  sparkConfig,
  tailwindConfigViewerMisc,
}
