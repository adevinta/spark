import { createTheme } from './createTheme'
import { type Theme } from './types'

export const defaultThemeDark: Theme = createTheme({
  colors: {
    // Basic
    basic: '#C2E0FA',
    onBasic: '#152233',
    basicHovered: '#9FCEF7',
    basicPressed: '#9FCEF7',
    basicFocused: '#9FCEF7',
    // Basic Container
    basicContainer: '#094171',
    onBasicContainer: '#F4F9FE',
    basicContainerHovered: '#152233',
    basicContainerPressed: '#152233',
    basicContainerFocused: '#152233',
    // Accent
    accent: '#CFA3F5',
    onAccent: '#1B052E',
    accentHovered: '#AC7DDD',
    accentPressed: '#AC7DDD',
    accentFocused: '#AC7DDD',
    // Accent Container
    accentContainer: '#501782',
    onAccentContainer: '#F5EDFD',
    accentContainerHovered: '#360F57',
    accentContainerPressed: '#360F57',
    accentContainerFocused: '#360F57',
    // Accent Variant
    accentVariant: '#B775F0',
    onAccentVariant: '#1B052E',
    accentVariantHovered: '#B775F0',
    accentVariantPressed: '#B775F0',
    accentVariantFocused: '#B775F0',
    // Main
    main: '#F07B42',
    onMain: '#2F1305',
    mainHovered: '#EC5A13',
    mainPressed: '#EC5A13',
    mainFocused: '#EC5A13',
    // Main container
    mainContainer: '#89380F',
    onMainContainer: '#FFF2EB',
    mainContainerHovered: '#5C250A',
    mainContainerPressed: '#5C250A',
    mainContainerFocused: '#5C250A',
    // Main Variant
    mainVariant: '#F49D71',
    onMainVariant: '#2F1305',
    mainVariantHovered: '#6194FF',
    mainVariantPressed: '#6194FF',
    mainVariantFocused: '#6194FF',
    // Support
    support: '#C2E0FA',
    onSupport: '#152233',
    supportHovered: '#9FCEF7',
    supportPressed: '#9FCEF7',
    supportFocused: '#9FCEF7',
    // Support Container
    supportContainer: '#094171',
    onSupportContainer: '#F4F9FE',
    supportContainerHovered: '#152233',
    supportContainerPressed: '#152233',
    supportContainerFocused: '#152233',
    // Support Variant
    supportVariant: '#E6F2FD',
    onSupportVariant: '#152233',
    supportVariantHovered: '#C2E0FA',
    supportVariantPressed: '#C2E0FA',
    supportVariantFocused: '#C2E0FA',
    // Success
    success: '#95C196',
    onSuccess: '#101E10',
    successHovered: '#71AD73',
    successPressed: '#71AD73',
    successFocused: '#71AD73',
    // Success container
    successContainer: '#2F5B30',
    onSuccessContainer: '#EDF5EE',
    successContainerHovered: '#1F3D20',
    successContainerPressed: '#1F3D20',
    successContainerFocused: '#1F3D20',
    // Alert
    alert: '#FFCC66',
    onAlert: '#332200',
    alertHovered: '#FFBB33',
    alertPressed: '#FFBB33',
    alertFocused: '#FFBB33',
    // Alert container
    alertContainer: '#664400',
    onAlertContainer: '#FFF6E5',
    alertContainerHovered: '#332200',
    alertContainerPressed: '#332200',
    alertContainerFocused: '#332200',
    // Error
    error: '#E8867D',
    onError: '#2B0B08',
    errorHovered: '#E05D52',
    errorPressed: '#E05D52',
    errorFocused: '#E05D52',
    // Error container
    errorContainer: '#822017',
    onErrorContainer: '#FBECEB',
    errorContainerHovered: '#57150F',
    errorContainerPressed: '#57150F',
    errorContainerFocused: '#57150F',
    // Info
    info: '#9FCEF7',
    onInfo: '#152233',
    infoHovered: '#69B2F3',
    infoPressed: '#69B2F3',
    infoFocused: '#69B2F3',
    // Info container
    infoContainer: '#0C5291',
    onInfoContainer: '#F4F9FE',
    infoContainerHovered: '#094171',
    infoContainerPressed: '#094171',
    infoContainerFocused: '#094171',
    // Neutral
    neutral: '#ACB8C7',
    onNeutral: '#202730',
    neutralHovered: '#6C819D',
    neutralPressed: '#6C819D',
    neutralFocused: '#6C819D',
    // Neutral container
    neutralContainer: '#3A4757',
    onNeutralContainer: '#F6F8F9',
    neutralContainerHovered: '#2B3441',
    neutralContainerPressed: '#2B3441',
    neutralContainerFocused: '#2B3441',
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
    surfacePressed: '#000000',
    surfaceFocused: '#000000',
    // Surface Inverse
    surfaceInverse: '#F6F8F9',
    onSurfaceInverse: '#2B3441',
    surfaceInverseHovered: '#F0F2F5',
    surfaceInversePressed: '#F0F2F5',
    surfaceInverseFocused: '#F0F2F5',
    // Outline
    outline: '#4F6076',
    outlineHigh: '#F0F2F5',
    // Overlay
    overlay: '#2B3441B8', // use with dim-1 opacity
    onOverlay: '#F6F8F9',
  },
})
