const themeConf = require('./tailwind.theme.cjs')
const sparkPlugins = require('@spark-ui/tailwind-plugins')

/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: themeConf,
  content: ['./packages/**/*.{js,ts,jsx,tsx}', './documentation/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [sparkPlugins.animations()],
}
