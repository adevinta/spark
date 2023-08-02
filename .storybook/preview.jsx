import '../src/tailwind.css'
import './sb-theming.css'
import { ToC } from '@docs/helpers/ToC'

import { DocsContainer } from '@storybook/blocks'
import { withThemeByDataAttribute } from '@storybook/addon-styling'

const ExampleContainer = ({ children, ...props }) => {
  return (
    <DocsContainer {...props}>
      <div id="spark-doc-container">{children}</div>
      <ToC />
    </DocsContainer>
  )
}

export const parameters = {
  docs: {
    container: ExampleContainer,
  },
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
