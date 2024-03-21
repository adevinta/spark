import { create } from '@storybook/theming/create'
import logoUrl from '../spark-logo.svg'

// https://github.com/storybookjs/storybook/blob/next/code/lib/theming/src/types.ts
export const getTheme = ({ base, sparkTheme }) =>
  create({
    base,
    // Brand
    colorPrimary: sparkTheme.colors.main,
    colorSecondary: sparkTheme.colors.support,

    // UI
    appBg: sparkTheme.colors.backgroundVariant,
    appContentBg: sparkTheme.colors.background,
    // appPreviewBg: TODO
    appBorderColor: sparkTheme.colors.basicContainer,
    appBorderRadius: sparkTheme.borderRadius.lg,

    // Typography
    fontBase: '"Nunito", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: sparkTheme.colors.onBackground,
    textInverseColor: sparkTheme.colors.background,
    // textMutedColor: TODO

    // Toolbar default and active colors
    barTextColor: sparkTheme.colors.onBackground,
    barHoverColor: sparkTheme.colors.basicContainerHovered,
    barSelectedColor: sparkTheme.colors.basicContainer,
    barBg: sparkTheme.colors.backgroundVariant,

    // Form colors
    buttonBg: sparkTheme.colors.primary,
    buttonBorder: 'transparent',
    inputBg: 'transparent',
    inputBorder: sparkTheme.colors.basic,
    inputTextColor: sparkTheme.colors.basic,
    inputBorderRadius: sparkTheme.borderRadius.sm,

    brandTitle: 'Spark design system',
    brandUrl: 'https://zeroheight.com/1186e1705/p/0879a9-colors/b/27d7a3',
    brandImage: logoUrl,
    brandTarget: '_self',

    // gridCellSize?: TODO
  })
