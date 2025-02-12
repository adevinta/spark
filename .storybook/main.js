import { dirname, join } from 'path'
import { createRequire } from 'module'
import turbosnap from 'vite-plugin-turbosnap'
import { mergeConfig } from 'vite'

import remarkGfm from 'remark-gfm'

import { docgenConfig } from '../config/plugins/sparkDocgen/constants.ts'

// Create a require function for CommonJS resolution in an ESM context
const require = createRequire(import.meta.url)

function getAbsolutePath(value) {
  return dirname(require.resolve(join(value, 'package.json')))
}

export default {
  async viteFinal(config, { configType }) {
    // This is where we can override vite config for Storybook
    return mergeConfig(config, {
      plugins:
        configType === 'PRODUCTION'
          ? [
              turbosnap({
                rootDir: config.root ?? process.cwd(),
              }),
            ]
          : [],
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
       * There is a bug in Storybook.
       * StoryFn declared using `_args` won't use the displayName by default.
       */
      componentNameResolver: (expression) => expression.getName(),
    },
  },
  docs: {
    docsMode: true,
  },
}
