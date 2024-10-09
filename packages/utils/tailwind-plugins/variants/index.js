import { withOptions } from 'tailwindcss/plugin'

export default withOptions(() => ({ addVariant }) => {
  addVariant('retina', '@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)')
})
