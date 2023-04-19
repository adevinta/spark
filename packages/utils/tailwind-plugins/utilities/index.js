/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(options => ({ addUtilities }) => {
  addUtilities({
    '.current-icon-size': {
      width: '1em',
      height: '1em',
    },
  })
})
