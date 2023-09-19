import { create } from '@storybook/theming/create'
import logoUrl from '../spark-logo.svg'

export const getTheme = ({ base, sparkTheme }) =>
  create({
    base,
    // Typography
    fontBase: '"Nunito", sans-serif',
    fontCode: 'monospace',

    brandTitle: 'Spark design system',
    brandUrl: 'https://zeroheight.com/1186e1705/p/0879a9-colors/b/27d7a3',
    brandImage: logoUrl,
    brandTarget: '_self',

    //
    colorPrimary: sparkTheme.colors.main,
    colorSecondary: sparkTheme.colors.support,

    // UI
    appBg: sparkTheme.colors.background,
    appContentBg: sparkTheme.colors.backgroundVariant,
    appBorderColor: sparkTheme.colors.basic,
    appBorderRadius: sparkTheme.borderRadius.lg,

    // Text colors
    textColor: sparkTheme.colors.onBackground,
    textInverseColor: sparkTheme.colors.background,

    // Toolbar default and active colors
    barTextColor: sparkTheme.colors.onBackground,
    barSelectedColor: sparkTheme.colors.basic,
    barBg: sparkTheme.colors.background,

    // Form colors
    inputBg: 'transparent',
    inputBorder: sparkTheme.colors.basic,
    inputTextColor: sparkTheme.colors.basic,
    inputBorderRadius: sparkTheme.borderRadius.sm,
  })
