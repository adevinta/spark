import { create } from '@storybook/theming'

import defaultTheme from './default.theme.js'

export const darkTheme = create({
  ...defaultTheme,
  base: 'dark',
  brandImage: './storybook-dark.svg',
})
