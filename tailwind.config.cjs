const sparkPlugins = require('@spark-ui/tailwind-plugins')
const themeUtils = require('@spark-ui/theme-utils')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./.storybook/**/*.{js,ts,jsx,tsx}', './packages/**/*.{js,ts,jsx,tsx}', './documentation/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [
    ...sparkPlugins.sparkConfig({
      themes: {
        default: themeUtils.defaultTheme,
        dark: themeUtils.defaultThemeDark,
      },
    }),
  ],
}
