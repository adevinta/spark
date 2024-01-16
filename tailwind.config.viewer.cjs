const sparkPlugins = require('@spark-ui/tailwind-plugins')
const themeUtils = require('@spark-ui/theme-utils')

module.exports = {
  theme: {
    configViewer: {
      baseFontSize: 16,
      misc: sparkPlugins.tailwindConfigViewerMisc,
    },
  },
  plugins: [
    ...sparkPlugins.sparkConfig({
      themes: {
        default: themeUtils.defaultTheme,
        dark: themeUtils.defaultThemeDark
      },
    }),
  ],
  content: [],
}
