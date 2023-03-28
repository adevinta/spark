module.exports = {
  async viteFinal(config, { configType }) {
    // This is where we can override vite config for storybook
    return config
  },
  stories: [
    '../documentation/getting-started/GettingStarted.mdx',
    '../documentation/**/!(getting-started)/*.mdx',
    '../packages/**/*.doc.mdx',
    '../packages/**/*.stories.tsx',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-styling',
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
  },
  docs: {
    autodocs: true,
  },
}
