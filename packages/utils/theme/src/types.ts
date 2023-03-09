import { RequireAtLeastOne } from 'type-fest'

interface SparkFontSize {
  fontSize: string
  lineHeight: string
  fontWeight?: string
  letterSpacing?: string
}

export interface Theme {
  borderRadius: {
    none: string
    sm: string
    md: string
    lg: string
    xl: string
    full: string
  }
  borderWidth: {
    none: string
    sm: string
    md: string
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
    outlineHigh: string
    // Overlay
    overlay: string
  }
  fontFamily: {
    openSans: string
  }
  /**
   * https://www.figma.com/file/ezqkDE3LqYrek9MvYnr4dR/Spark-Foundations?node-id=105%3A2710&t=lLeJnznf64zUBmdL-4
   */
  fontSize: {
    /** Reserved for short/important large text */
    display1: SparkFontSize
    display1Expanded: SparkFontSize
    /** Reserved for short/important medium text */
    display2: SparkFontSize
    display2Expanded: SparkFontSize
    /** Reserved for short/important small text */
    display3: SparkFontSize
    display3Expanded: SparkFontSize
    /** High-emphasis large text */
    headline1: SparkFontSize
    headline1Expanded: SparkFontSize
    /** High-emphasis medium text  */
    headline2: SparkFontSize
    headline2Expanded: SparkFontSize
    /** High-emphasis small text  */
    subhead: SparkFontSize
    subheadExpanded: SparkFontSize
    /** Content base text */
    body1: SparkFontSize
    /** Content base text low hierarchy */
    body2: SparkFontSize
    /** Support texts or error texts */
    caption: SparkFontSize
    /** Legal texts, App bar labels */
    small: SparkFontSize
    /** Content base text, Links */
    body1Link: SparkFontSize
    /** Content base text, low hierarchy Links */
    body2Link: SparkFontSize
    /** Support or error texts with a link */
    captionLink: SparkFontSize
    /** Call to actions */
    callout: SparkFontSize
  }
  fontWeight: {
    regular: string
    medium: string
    semiBold: string
    bold: string
  }
  screens: {
    sm: string
    md: string
    lg: string
    xl: string
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
  htmlFontSize?: number
  tailwindCSSPath: string
  themes: RequireAtLeastOne<Record<string, Theme>, 'default'>
}
