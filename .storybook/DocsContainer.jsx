import { DocsContainer as AddonDocsContainer } from '@storybook/addon-docs'
import { useDarkMode } from 'storybook-dark-mode'

import { lightTheme } from './Light.theme.js'
import { darkTheme } from './Dark.theme.js'

export const DocsContainer = props => {
  const isDark = useDarkMode()
  return (
    <div data-mode={isDark ? 'dark' : 'light'}>
      <AddonDocsContainer {...props} theme={isDark ? darkTheme : lightTheme} />
    </div>
  )
}
