import type { Theme } from './types'

export const defaultTheme: Theme = {
  borderRadius: {
    none: '0px',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    full: '9999px',
  },
  borderWidth: {
    none: '0px',
    sm: '1px',
    md: '2px',
  },
  boxShadow: {
    sm: '0 1px 2px 0 rgba(108 129 157 / 0.50)',
    DEFAULT: '0 4px 8px 0 rgba(108 129 157 / 0.50)',
    md: '0 6px 12px 0 rgba(108 129 157 / 0.50)',
    lg: '0 8px 16px 0 rgba(108 129 157 / 0.50)',
    xl: '0 12px 24px 0 rgba(108 129 157 / 0.50)',
    none: 'none',
  },
  colors: {
    // Basic
    basic: '#094171',
    onBasic: '#FFFFFF',
    basicHovered: '#0C5291',
    // Basic Container
    basicContainer: '#E6F2FD',
    onBasicContainer: '#152233',
    basicContainerHovered: '#F4F9FE',
    // Accent
    accent: '#8526D9',
    onAccent: '#FFFFFF',
    accentHovered: '#9F47EB',
    // Accent Container
    accentContainer: '#E9D6FA',
    onAccentContainer: '#362555',
    accentContainerHovered: '#F5EDFD',
    // Accent Variant
    accentVariant: '#501782',
    onAccentVariant: '#FFFFFF',
    accentVariantHovered: '#6B1FAD',
    // Main
    main: '#EC5A13',
    onMain: '#FFFFFF',
    mainHovered: '#F07B42',
    // Main container
    mainContainer: '#FFE9DE',
    onMainContainer: '#89380F',
    mainContainerHovered: '#FFF2EB',
    // Main Variant
    mainVariant: '#B84A14',
    onMainVariant: '#FFFFFF',
    mainVariantHovered: '#EC5A13',
    // Support
    support: '#094171',
    onSupport: '#FFFFFF',
    supportHovered: '#0C5291',
    // Support Container
    supportContainer: '#E6F2FD',
    onSupportContainer: '#152233',
    supportContainerHovered: '#F4F9FE',
    // Support Variant
    supportVariant: '#0C5291',
    onSupportVariant: '#FFFFFF',
    supportVariantHovered: '#0F69B9',
    // Success
    success: '#3E7A40',
    onSuccess: '#FFFFFF',
    successHovered: '#4E9850',
    // Success container
    successContainer: '#DCEADC',
    onSuccessContainer: '#2F5B30',
    successContainerHovered: '#EDF5EE',
    // Alert
    alert: '#FFAA00',
    onAlert: '#202730',
    alertHovered: '#FFBB33',
    // Alert container
    alertContainer: '#FFEECC',
    onAlertContainer: '#996600',
    alertContainerHovered: '#FFF6E5',
    // Error
    error: '#D93426',
    onError: '#FFFFFF',
    errorHovered: '#E05D52',
    // Error container
    errorContainer: '#F7D7D4',
    onErrorContainer: '#822017',
    errorContainerHovered: '#FBECEB',
    // Info
    info: '#1388EC',
    onInfo: '#FFFFFF',
    infoHovered: '#69B2F3',
    // Info container
    infoContainer: '#C2E0FA',
    onInfoContainer: '#0C5291',
    infoContainerHovered: '#E6F2FD',
    // Neutral
    neutral: '#4F6076',
    onNeutral: '#FFFFFF',
    neutralHovered: '#6C819D',
    // Neutral container
    neutralContainer: '#F0F2F5',
    onNeutralContainer: '#3A4757',
    neutralContainerHovered: '#F6F8F9',
    // Background
    background: '#FFFFFF',
    onBackground: '#152233',
    // Background variant
    backgroundVariant: '#F4F9FE',
    onBackgroundVariant: '#152233',
    // Surface
    surface: '#FFFFFF',
    onSurface: '#152233',
    surfaceHovered: '#F6F8F9',
    // Surface Inverse
    surfaceInverse: '#2B3441',
    onSurfaceInverse: '#FFFFFF',
    surfaceInverseHovered: '#3A4757',
    // Outline
    outline: '#ACB8C7',
    outlineHigh: '#202730',
    // Overlay
    overlay: '#202730B8', // use with dim-1 opacity
    onOverlay: '#FFFFFF',
  },
  fontFamily: {
    sans: '"Nunito Sans", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    mono: 'SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  },
  fontSize: {
    display1: { fontSize: '2.5rem', lineHeight: '3.5rem', fontWeight: '700' },
    display1Expanded: { fontSize: '3rem', lineHeight: '4rem', fontWeight: '700' },
    display2: { fontSize: '2rem', lineHeight: '2.75rem', fontWeight: '700' },
    display2Expanded: { fontSize: '2.5rem', lineHeight: '3.5rem', fontWeight: '700' },
    display3: { fontSize: '1.5rem', lineHeight: '2rem', fontWeight: '700' },
    display3Expanded: { fontSize: '2rem', lineHeight: '2.75rem', fontWeight: '700' },
    headline1: { fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '700' },
    headline1Expanded: { fontSize: '1.5rem', lineHeight: '2rem', fontWeight: '700' }, //
    headline2: { fontSize: '1.125rem', lineHeight: '1.5rem', fontWeight: '700' }, //
    headline2Expanded: { fontSize: '1.25rem', lineHeight: '1.75rem', fontWeight: '700' }, //
    subhead: { fontSize: '1rem', lineHeight: '1.5rem', fontWeight: '700' },
    subheadExpanded: { fontSize: '1rem', lineHeight: '1.5rem', fontWeight: '700' },
    body1: { fontSize: '1rem', lineHeight: '1.5rem' },
    body2: { fontSize: '0.875rem', lineHeight: '1.25rem' },
    caption: { fontSize: '0.75rem', lineHeight: '1rem' },
    small: { fontSize: '0.625rem', lineHeight: '0.875rem' },
    body1Link: { fontSize: '1rem', lineHeight: '1.5rem' },
    body2Link: { fontSize: '0.875rem', lineHeight: '1.125rem' },
    captionLink: { fontSize: '0.75rem', lineHeight: '1rem' },
    callout: { fontSize: '1rem', lineHeight: '1.5rem' },
  },
  fontWeight: {
    regular: '400',
    medium: '500',
    semiBold: '600',
    bold: '700',
  },
  opacity: {
    0: '0',
    none: '1',
    dim1: '0.72',
    dim2: '0.56',
    dim3: '0.40',
    dim4: '0.16',
    dim5: '0.08',
  },
  screens: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
  spacing: {
    auto: 'auto',
    none: '0px',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.5rem',
    '2xl': '2rem',
    '3xl': '2.5rem',
  },
  zIndex: {
    hide: '-1',
    base: '0',
    raised: '1',
    dropdown: '1000',
    sticky: '1100',
    overlay: '1300',
    modal: '1400',
    popover: '1500',
    skipLink: '1600',
    toast: '1700',
    tooltip: '1800',
  },
}
