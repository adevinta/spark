import '../src/tailwind.css'
import './sb-theming.css'

import { withThemeByDataAttribute } from '@storybook/addon-styling'

export const parameters = {
  options: {
    storySort: {
      order: [
        'Getting Started',
        'Using Spark',
        'Components',
        'Utils',
        'Hooks',
        'Contributing',
        '*',
      ],
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  withThemeByDataAttribute({
    themes: {
      light: 'light',
      dark: 'dark',
    },
    defaultTheme: 'light',
    attributeName: 'data-theme',
  }),
]
