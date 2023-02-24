import { defaultTheme, defaultThemeDark, type ThemeConfig } from '@spark-ui/theme-utils'

export default {
  tailwindThemeConfigPath: './tailwind.theme.cjs',
  tailwindCSSPath: './src/tailwind.css',
  themes: {
    default: defaultTheme,
    dark: defaultThemeDark,
  },
} satisfies ThemeConfig
