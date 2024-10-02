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
  boxShadow: {
    sm: string
    DEFAULT: string
    md: string
    lg: string
    xl: string
    none: string
  }
  /**
   * Spark color specifications: https://zeroheight.com/1186e1705/p/0879a9-colors/b/27d7a3
   */
  colors: {
    // Basic
    basic: string
    onBasic: string
    basicHovered: string
    // Basic Container
    basicContainer: string
    onBasicContainer: string
    basicContainerHovered: string
    // Accent
    accent: string
    onAccent: string
    accentHovered: string
    // Accent Container
    accentContainer: string
    onAccentContainer: string
    accentContainerHovered: string
    // Accent Variant
    accentVariant: string
    onAccentVariant: string
    accentVariantHovered: string
    // Main
    main: string
    onMain: string
    mainHovered: string
    mainContainer: string
    onMainContainer: string
    mainContainerHovered: string
    // Support
    support: string
    onSupport: string
    supportHovered: string
    supportContainer: string
    onSupportContainer: string
    supportContainerHovered: string
    // Main Variant
    mainVariant: string
    onMainVariant: string
    mainVariantHovered: string
    // Support Variant
    supportVariant: string
    onSupportVariant: string
    supportVariantHovered: string
    // Success
    success: string
    onSuccess: string
    successHovered: string
    successContainer: string
    onSuccessContainer: string
    successContainerHovered: string

    // Alert
    alert: string
    onAlert: string
    alertHovered: string

    alertContainer: string
    onAlertContainer: string
    alertContainerHovered: string

    // Error
    error: string
    onError: string
    errorHovered: string

    errorContainer: string
    onErrorContainer: string
    errorContainerHovered: string

    // Info
    info: string
    onInfo: string
    infoHovered: string

    infoContainer: string
    onInfoContainer: string
    infoContainerHovered: string

    // Neutral
    neutral: string
    onNeutral: string
    neutralHovered: string

    neutralContainer: string
    onNeutralContainer: string
    neutralContainerHovered: string

    // Background
    background: string
    onBackground: string
    // Background variant
    backgroundVariant: string
    onBackgroundVariant: string
    // Surface
    surface: string
    onSurface: string
    surfaceHovered: string

    // Surface Inverse
    surfaceInverse: string
    onSurfaceInverse: string
    surfaceInverseHovered: string

    // Outline
    outline: string
    outlineHigh: string
    // Overlay
    overlay: string
    onOverlay: string
  }
  fontFamily: {
    sans: string
    mono: string
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
  opacity: {
    0: string
    none: string
    dim1: string
    dim2: string
    dim3: string
    dim4: string
    dim5: string
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
    hide: string
    base: string
    raised: string
    dropdown: string
    sticky: string
    overlay: string
    modal: string
    popover: string
    skipLink: string
    toast: string
    tooltip: string
  }
}

export interface ThemeConfig {
  tailwindThemeConfigPath: string
  htmlFontSize?: number
  tailwindCSSPath: string
  themes: RequireAtLeastOne<Record<string, Theme>, 'default'>
}
