module.exports = {
  async viteFinal(config, { configType }) {
    // This is where we can override vite config for storybook
    return config;
  },
  stories: [
    "../documentation/**/*.mdx",
    "../packages/**/*.stories.@(mdx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  staticDirs: ['../public'],
  framework: "@storybook/react-vite",
  docs: {
    autodocs: "tag",
  },
  core: {
    builder: "@storybook/builder-vite",
  },
  features: {
    storyStoreV7: true,
  },
  typescript: {
    check: true,
    reactDocgen: "react-docgen-typescript",
  },
};
