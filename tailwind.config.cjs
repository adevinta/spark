const themeConf = require('./tailwind.theme.cjs')

/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: themeConf,
  content: ['./packages/**/*.{js,ts,jsx,tsx}', './documentation/**/*.{js,ts,jsx,tsx,mdx}'],
}
