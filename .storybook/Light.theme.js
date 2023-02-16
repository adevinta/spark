import { create } from '@storybook/theming'

import defaultTheme from './default.theme.js'

export const lightTheme = create({
  ...defaultTheme,
  base: 'light',
  brandImage: './storybook-light.svg',
})
