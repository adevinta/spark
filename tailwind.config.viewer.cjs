const sparkPlugins = require('@spark-ui/tailwind-plugins')
const themeUtils = require('@spark-ui/theme-utils')

const { toTailwindConfigViewer } = sparkPlugins.tailwindConfigViewerUtils

module.exports = {
  theme: {
    configViewer: {
      baseFontSize: 16,
      themeReplacements: toTailwindConfigViewer(themeUtils.defaultTheme),
      misc: sparkPlugins.tailwindConfigViewerMisc,
    },
  },
  plugins: [
    ...sparkPlugins.sparkConfig({
      themes: {
        default: themeUtils.defaultTheme,
      },
    }),
  ],
  content: [],
}
