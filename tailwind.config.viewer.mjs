import sparkPlugins from '@spark-ui/tailwind-plugins'
import themeUtils from '@spark-ui/theme-utils'

export default {
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
        dark: themeUtils.defaultThemeDark,
      },
    }),
  ],
  content: [],
}
