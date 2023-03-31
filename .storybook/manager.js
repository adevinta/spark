import { addons } from '@storybook/manager-api'
import { create } from '@storybook/theming/create'
import logoUrl from './spark-logo.svg'

const storybookTheme = create({
  base: 'light',
  fontBase: '"Nunito", sans-serif',
  fontCode: 'monospace',
  brandTitle: 'Spark design system',
  brandUrl: 'https://zeroheight.com/1186e1705/p/0879a9-colors/b/27d7a3',
  brandImage: logoUrl,
  brandTarget: '_self',
})

addons.setConfig({
  theme: storybookTheme,
})
