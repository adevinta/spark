import { dirname, join } from 'path'
const turbosnap = require('vite-plugin-turbosnap')
const { mergeConfig } = require('vite')

import remarkGfm from 'remark-gfm'

import { docgenConfig } from '../config/plugins/sparkDocgen/constants'

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
    getAbsolutePath('@storybook/addon-links'),
    getAbsolutePath('storybook-addon-tag-badges'),
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
        backgrounds: false,
        actions: false,
        controls: false,
      },
    },
    getAbsolutePath('@storybook/addon-interactions'),
    getAbsolutePath('@storybook/addon-a11y'),
    getAbsolutePath('@chromatic-com/storybook'),
  ],
  staticDirs: ['../public'],
  framework: {
    name: getAbsolutePath('@storybook/react-vite'),
    options: {},
  },
  typescript: {
    check: true,
    reactDocgen: 'react-docgen-typescript',
    reactDocgenTypescriptOptions: {
      ...docgenConfig,
      /**
       * There is a bug in storybook.
       * StoryFn declared using `_args` won't use the displayName by default.
       */
      componentNameResolver: expression => {
        return expression.getName()
      },
    },
  },
  docs: {
    docsMode: true
  },
}

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')))
}
