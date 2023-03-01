import { RequireAtLeastOne } from 'type-fest'

export interface Theme {
  screens: {
    sm: string
    md: string
    lg: string
    xl: string
    '2xl': string
  }
  borderWidth: {
    none: string
    xs: string
    s: string
    m: string
  }
  /**
   * Spark color specifications: https://zeroheight.com/1186e1705/p/0879a9-colors/b/27d7a3
   */
  colors: {
    // Primary
    primary: string
    onPrimary: string
    primaryHovered: string
    primaryDisabled: string
    primaryFocused: string
    primaryContainer: string
    onPrimaryContainer: string
    primaryContainerHovered: string
    primaryContainerDisabled: string
    primaryContainerFocused: string
    // Secondary
    secondary: string
    onSecondary: string
    secondaryHovered: string
    secondaryDisabled: string
    secondaryFocused: string
    secondaryContainer: string
    onSecondaryContainer: string
    secondaryContainerHovered: string
    secondaryContainerDisabled: string
    secondaryContainerFocused: string
    // Primary Variant
    primaryVariant: string
    onPrimaryVariant: string
    primaryVariantHovered: string
    primaryVariantDisabled: string
    primaryVariantFocused: string
    // Secondary Variant
    secondaryVariant: string
    onSecondaryVariant: string
    secondaryVariantHovered: string
    secondaryVariantDisabled: string
    secondaryVariantFocused: string
    // Success
    success: string
    onSuccess: string
    successHovered: string
    successDisabled: string
    successFocused: string
    successContainer: string
    onSuccessContainer: string
    successContainerHovered: string
    successContainerDisabled: string
    successContainerFocused: string
    // Alert
    alert: string
    onAlert: string
    alertHovered: string
    alertDisabled: string
    alertFocused: string
    alertContainer: string
    onAlertContainer: string
    alertContainerHovered: string
    alertContainerDisabled: string
    alertContainerFocused: string
    // Error
    error: string
    onError: string
    errorHovered: string
    errorDisabled: string
    errorFocused: string
    errorContainer: string
    onErrorContainer: string
    errorContainerHovered: string
    errorContainerDisabled: string
    errorContainerFocused: string
    // Info
    info: string
    onInfo: string
    infoHovered: string
    infoDisabled: string
    infoFocused: string
    infoContainer: string
    onInfoContainer: string
    infoContainerHovered: string
    infoContainerDisabled: string
    infoContainerFocused: string
    // Neutral
    neutral: string
    onNeutral: string
    neutralHovered: string
    neutralDisabled: string
    neutralFocused: string
    neutralContainer: string
    onNeutralContainer: string
    neutralContainerHovered: string
    neutralContainerDisabled: string
    neutralContainerFocused: string
    // Background
    background: string
    onBackground: string
    backgroundHovered: string
    backgroundDisabled: string
    backgroundFocused: string
    // Surface
    surface: string
    onSurface: string
    surfaceHovered: string
    surfaceDisabled: string
    surfaceFocused: string
    // Surface Inverse
    surfaceInverse: string
    onSurfaceInverse: string
    surfaceInverseHovered: string
    surfaceInverseDisabled: string
    surfaceInverseFocused: string
    // Outline
    outline: string
    // Overlay
    overlay: string
  }
  fontFamily: {
    openSans: string
  }
  fontSize: {
    xs: string
    s: string
    m: string
    l: string
    xl: string
    '2xl': string
    '3xl': string
  }
  fontWeight: {
    regular: number
    semibold: number
    bold: number
  }
  lineHeight: {
    xs: string
    s: string
    m: string
    l: string
    xl: string
    '2xl': string
    '3xl': string
  }
  width: {
    pageMin: string
    pageMax: string
  }
  borderRadius: {
    none: string
    xs: string
    s: string
    m: string
    l: string
    full: string
  }
  boxShadow: {
    none: string
    normal: string
    highlighted: string
  }
  spacing: {
    auto: string
    none: string
    sm: string
    md: string
    lg: string
    xl: string
    '2xl': string
    '3xl': string
  }
  zIndex: {
    hide: number
    base: number
    raised: number
    dropdown: number
    sticky: number
    overlay: number
    modal: number
    popover: number
    skipLink: number
    toast: number
    tooltip: number
  }
}

export interface ThemeConfig {
  tailwindThemeConfigPath: string
  tailwindCSSPath: string
  themes: RequireAtLeastOne<Record<string, Theme>, 'default'>
}
