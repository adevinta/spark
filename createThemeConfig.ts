import {
  createCSSTokensFile,
  createTailwindConfigFile,
  createTheme,
  defaultTheme,
  Theme,
} from './packages/utils/theme/index.mjs'

export const alternativeTheme: Theme = createTheme({
  colors: {
    transparent: 'transparent',
    bg: {
      primary: '#7dead5',
      primaryAccent: '#0b968f',
      primarySubtle: '#c1c1f7',
      secondary: '#9180f4',
      secondaryAccent: '#9580F4',
      secondarySubtle: '#c1c1f7',
      body: '#fff',
    },
    bd: {
      primary: '#f28133',
      secondary: '#3481f2',
    },
    fg: {
      default: '#334155',
      accent: '#1161d7',
      cta: '#000',
      ctaInverse: '#fff',
    },
  },
})

const themes = {
  default: defaultTheme,
  alternative: alternativeTheme,
}

createTailwindConfigFile('./tailwind.theme.cjs')
createCSSTokensFile('./src/tailwind.css', themes)
