import { DocsContainer as AddonDocsContainer } from '@storybook/addon-docs'
import { useDarkMode } from './addons/dark-mode/src'

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
