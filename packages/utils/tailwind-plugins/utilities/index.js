const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(() => ({ addUtilities, theme }) => {
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
    '.u-no-scrollbar': {
      scrollbarWidth: 'none',
      '&::-webkit-scrollbar': { display: 'none' },
    },
    '.u-ring': {
      'box-shadow': '0 0 0 2px rgb(var(--colors-background)), 0 0 0 4px blue;',
    },
    '.u-ring-inset': {
      'box-shadow': '0 0 0 0 rgb(var(--colors-background)) inset, 0 0 0 2px blue inset;',
    },
  })
})
