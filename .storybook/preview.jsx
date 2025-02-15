import { DocsContainer } from '@storybook/blocks'
import { Icon } from '@spark-ui/icon'
import { ShareExpand } from '@spark-ui/icons/dist/icons/ShareExpand'

import '../src/tailwind.css'
import './sb-theming.css'

import { ToC } from '@docs/helpers/ToC'

const ExampleContainer = ({ children, ...props }) => {
  const shouldDisplayExperimentalBanner = (() => {
    const docsPrepared = props.context.channel.data.docsPrepared
    if (!docsPrepared) return false

    return docsPrepared.some(doc => {
      if (!doc.id) return false
      return doc.id.includes('experimental-')
    })
  })()

  return (
    <DocsContainer {...props}>
      <div id="spark-doc-container">
        {shouldDisplayExperimentalBanner && (
          <p id="experimental-banner">
            This component is still experimental. Avoid usage in production features
          </p>
        )}

        {children}
      </div>

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
        [
          'Setup',
          'Styling overview',
          'Handling multiple themes',
          'Migrating from Styled Components',
          'Tailwind config viewer',
          'FAQ',
        ],
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

const preview = {
  globalTypes: {
    theme: {
      name: 'Theme',
      description: 'Set the color theme',
      defaultValue: 'light',
      toolbar: {
        // show the theme name once selected in the toolbar
        dynamicTitle: true,
        items: [
          { value: 'light', right: '⚪️', title: 'Light' },
          { value: 'dark', right: '⚫️', title: 'Dark' },
        ],
      },
    },
  },
  initialGlobals: {
    theme: 'light',
  },
}

export default preview

export const decorators = [
  // custom theme decorator, see https://yannbraga.dev/blog/multi-theme-decorator
  (storyFn, { globals }) => {
    const themeKey = globals.theme

    const htmlElement = document.querySelector('html')
    if (!htmlElement) return
    htmlElement.setAttribute('data-theme', themeKey)

    return storyFn()
  },
  (storyFn, { id, viewMode }) => {
    const params = new URLSearchParams(window.top?.location.search)
    params.set('id', id)
    params.delete('path')

    return (
      <div className="relative w-full">
        {viewMode === 'docs' && (
          <div className="absolute -right-lg -top-xl">
            <a
              href={`/iframe.html?${params.toString()}`}
              target="_blank"
              className="text-basic hover:text-basic-hovered focus:text-basic-hovered enabled:active:text-basic-hovered"
            >
              <Icon size="sm" label="expand">
                <ShareExpand />
              </Icon>
            </a>
          </div>
        )}
        {storyFn()}
      </div>
    )
  },
]
export const tags = ['autodocs']
