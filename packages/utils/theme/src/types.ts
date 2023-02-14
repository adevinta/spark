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
  colors: {
    transparent: string
    bg: {
      body: string
      primary: string
      primaryAccent: string
      primarySubtle: string
      secondary: string
      secondaryAccent: string
      secondarySubtle: string
    }
    fg: {
      default: string
      accent: string
      cta: string
      ctaInverse: string
    }
    bd: {
      primary: string
      secondary: string
    }
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
    xs: string
    s: string
    m: string
    l: string
    xl: string
    xxl: string
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
