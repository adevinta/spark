import {DocsContainer} from './DocsContainer.jsx'

import { darkTheme } from './Dark.theme.js'
import { lightTheme } from './Light.theme.js'

import '../src/tailwind.css'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  darkMode: {
    dark: darkTheme,
    light: lightTheme,
    stylePreview: true,
  },
  docs: {
    container: DocsContainer,
  },
}
