const animations = require('./animations')
const sizings = require('./sizings')
const utilities = require('./utilities')
const variants = require('./variants')
const sparkTheme = require('./spark-theme')
const tailwindcssRadix = require('tailwindcss-radix')

/**
 * @typedef {Object} Options
 * @property {Object} options.themes - An object containing your themes where each key corresponds to a data-theme attribute value.
 * @property {number} htmlFontSize The base font size of your app.
 */

/**
 * @param {Object} options The options for the plugin.
 * @param {Object} [options.themes={}] An object containing your themes, where each key corresponds to a data-theme attribute value.
 * @param {string} [options.htmlFontSize=16] The base font size to use to properly compute rem values.
 * @returns {Function[]} The PostCSS plugin functions to apply.
 */
const sparkConfig = ({ htmlFontSize, themes }) => {
  return [
    sparkTheme({ htmlFontSize, themes }),
    sizings({ htmlFontSize }),
    animations(),
    utilities(),
    variants(),
    tailwindcssRadix({ variantPrefix: 'spark' }),
  ]
}

module.exports = {
  animations,
  sizings,
  utilities,
  variants,
  sparkTheme,
  sparkConfig,
}
