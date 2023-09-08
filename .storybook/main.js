const turbosnap = require('vite-plugin-turbosnap')
const { mergeConfig } = require('vite')

import remarkGfm from 'remark-gfm'

module.exports = {
  async viteFinal(config, { configType }) {
    // This is where we can override vite config for storybook
    return mergeConfig(config, {
      plugins:
        configType === 'PRODUCTION'
          ? [
              turbosnap({
                rootDir: config.root ?? process.cwd(),
              }),
            ]
          : [],
      // ...And any other config you need to change...
    })
  },

  stories: [
    '../documentation/*.mdx',
    '../documentation/**/*.mdx',
    '../packages/**/*.doc.mdx',
    '../packages/**/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-links',
    {
      name: '@storybook/addon-docs',
      options: {
        mdxPluginOptions: {
          mdxCompileOptions: {
            remarkPlugins: [remarkGfm],
          },
        },
      },
    },
    {
      name: '@storybook/addon-essentials',
      options: {
        actions: false,
        controls: false,
      },
    },
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
    '@storybook/addon-a11y',
  ],
  staticDirs: ['../public'],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  features: {
    storyStoreV7: true,
  },
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      shouldExtractLiteralValuesFromEnum: true,
      shouldRemoveUndefinedFromOptional: true,
      propFilter: prop => {
        const prohibitedPropsRegexesNew = [new RegExp('/node_modules/@types/react/.*.d.ts')]

        if (prop.declarations?.length > 0) {
          const isProhibitedProps = prop.declarations.some(declaration =>
            prohibitedPropsRegexesNew.some(regex => regex.test(declaration.fileName)),
          )

          return !isProhibitedProps
        }

        return true
      },
      componentNameResolver: expression => {
        return expression.getName()
      },
    },
  },
  docs: {
    autodocs: true,
    docsMode: true,
  },
}
