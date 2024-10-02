import { createTheme } from './createTheme'
import { type Theme } from './types'

export const defaultThemeDark: Theme = createTheme({
  boxShadow: {
    sm: '0 1px 2px 0 rgba(0 0 0 / 0.50)',
    DEFAULT: '0 4px 8px 0 rgba(0 0 0 / 0.50)',
    md: '0 6px 12px 0 rgba(0 0 0 / 0.50)',
    lg: '0 8px 16px 0 rgba(0 0 0 / 0.50)',
    xl: '0 12px 24px 0 rgba(0 0 0 / 0.50)',
    none: 'none',
  },
  colors: {
    // Basic
    basic: '#C2E0FA',
    onBasic: '#152233',
    basicHovered: '#9FCEF7',
    // Basic Container
    basicContainer: '#094171',
    onBasicContainer: '#F4F9FE',
    basicContainerHovered: '#152233',
    // Accent
    accent: '#CFA3F5',
    onAccent: '#1B052E',
    accentHovered: '#AC7DDD',
    // Accent Container
    accentContainer: '#501782',
    onAccentContainer: '#F5EDFD',
    accentContainerHovered: '#360F57',
    // Accent Variant
    accentVariant: '#B775F0',
    onAccentVariant: '#1B052E',
    accentVariantHovered: '#B775F0',
    // Main
    main: '#F07B42',
    onMain: '#2F1305',
    mainHovered: '#EC5A13',
    // Main container
    mainContainer: '#89380F',
    onMainContainer: '#FFF2EB',
    mainContainerHovered: '#5C250A',
    // Main Variant
    mainVariant: '#F49D71',
    onMainVariant: '#2F1305',
    mainVariantHovered: '#6194FF',
    // Support
    support: '#C2E0FA',
    onSupport: '#152233',
    supportHovered: '#9FCEF7',
    // Support Container
    supportContainer: '#094171',
    onSupportContainer: '#F4F9FE',
    supportContainerHovered: '#152233',
    // Support Variant
    supportVariant: '#E6F2FD',
    onSupportVariant: '#152233',
    supportVariantHovered: '#C2E0FA',
    // Success
    success: '#95C196',
    onSuccess: '#101E10',
    successHovered: '#71AD73',
    // Success container
    successContainer: '#2F5B30',
    onSuccessContainer: '#EDF5EE',
    successContainerHovered: '#1F3D20',
    // Alert
    alert: '#FFCC66',
    onAlert: '#332200',
    alertHovered: '#FFBB33',
    // Alert container
    alertContainer: '#664400',
    onAlertContainer: '#FFF6E5',
    alertContainerHovered: '#332200',
    // Error
    error: '#E8867D',
    onError: '#2B0B08',
    errorHovered: '#E05D52',
    // Error container
    errorContainer: '#822017',
    onErrorContainer: '#FBECEB',
    errorContainerHovered: '#57150F',
    // Info
    info: '#9FCEF7',
    onInfo: '#152233',
    infoHovered: '#69B2F3',
    // Info container
    infoContainer: '#0C5291',
    onInfoContainer: '#F4F9FE',
    infoContainerHovered: '#094171',
    // Neutral
    neutral: '#ACB8C7',
    onNeutral: '#202730',
    neutralHovered: '#6C819D',
    // Neutral container
    neutralContainer: '#3A4757',
    onNeutralContainer: '#F6F8F9',
    neutralContainerHovered: '#2B3441',
    // Background
    background: '#202730',
    onBackground: '#F6F8F9',
    // Background variant
    backgroundVariant: '#13171D',
    onBackgroundVariant: '#F6F8F9',
    // Surface
    surface: '#202730',
    onSurface: '#F6F8F9',
    surfaceHovered: '#000000',
    // Surface Inverse
    surfaceInverse: '#F6F8F9',
    onSurfaceInverse: '#2B3441',
    surfaceInverseHovered: '#F0F2F5',
    // Outline
    outline: '#4F6076',
    outlineHigh: '#F0F2F5',
    // Overlay
    overlay: '#2B3441B8', // use with dim-1 opacity
    onOverlay: '#F6F8F9',
  },
})
