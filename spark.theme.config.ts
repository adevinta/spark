import { defaultTheme, defaultThemeDark, type Theme } from '@spark-ui/theme-utils'

// TODO: this interface should be imported from @spark-ui/theme-utils
interface SparkConfig {
  tailwindThemeConfigFilePath: string
  CSSTokens: {
    themes: Record<string, Theme>
    filePath: string
  }
}

export default {
  tailwindThemeConfigFilePath: './tailwind.theme.cjs',
  CSSTokens: {
    themes: {
      default: defaultTheme,
      dark: defaultThemeDark,
    },
    filePath: './src/tailwind.css',
  },
} satisfies SparkConfig
