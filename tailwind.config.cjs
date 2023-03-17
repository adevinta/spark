const sparkPlugins = require('@spark-ui/tailwind-plugins')
const themeUtils = require('@spark-ui/theme-utils')
const tailwindcssRadix = require('tailwindcss-radix')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./packages/**/*.{js,ts,jsx,tsx}', './documentation/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [
    sparkPlugins.sparkTheme({
      themes: {
        default: themeUtils.defaultTheme,
        dark: themeUtils.defaultThemeDark,
      },
    }),
    sparkPlugins.animations(),
    sparkPlugins.sizings(),
    tailwindcssRadix(),
  ],
}
