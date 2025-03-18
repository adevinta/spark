const plugin = require('tailwindcss/plugin')

module.exports = plugin.withOptions(() => ({ addVariant }) => {
  addVariant('retina', '@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)')
})
