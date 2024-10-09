import tailwindcssRadix from 'tailwindcss-radix'

import animations from './animations'
import sizings from './sizings'
import sparkTheme from './spark-theme'
import tailwindConfigViewerUtils from './tailwind-config-viewer'
import tailwindConfigViewerMisc from './tailwind-config-viewer/misc'
import utilities from './utilities'
import variants from './variants'

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

export default {
  animations,
  sizings,
  utilities,
  variants,
  sparkTheme,
  sparkConfig,
  tailwindConfigViewerUtils,
  tailwindConfigViewerMisc,
}
