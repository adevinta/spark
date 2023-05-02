/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(options => ({ addUtilities, theme }) => {
  addUtilities({
    '.u-current-font-size': {
      width: '1em',
      height: '1em',
    },
    '.u-shadow-border-transition': {
      transition: `box-shadow ${theme('transitionDuration.100')} ${theme(
        'transitionTimingFunction.in'
      )}, border-color ${theme('transitionDuration.300')} ${theme('transitionTimingFunction.in')}`,
    },
  })
})
