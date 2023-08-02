import { createTheme } from './createTheme'
import { type Theme } from './types'

export const defaultThemeDark: Theme = createTheme({
  colors: {
    // Basic
    basic: '#DCDCE5',
    onBasic: '#1D1F2A',
    basicHovered: '#C4C5D3',
    basicPressed: '#C4C5D3',
    basicFocused: '#C4C5D3',
    // Basic Container
    basicContainer: '#4D4E7B',
    onBasicContainer: '#FFFFFF',
    basicContainerHovered: '#35376A',
    basicContainerPressed: '#35376A',
    basicContainerFocused: '#35376A',
    // Accent
    accent: '#CC99FF',
    onAccent: '#1D1F2A',
    accentHovered: '#AC7DDD',
    accentPressed: '#AC7DDD',
    accentFocused: '#AC7DDD',
    // Accent Container
    accentContainer: '#8D64BB',
    onAccentContainer: '#FFFFFF',
    accentContainerHovered: '#6E4D99',
    accentContainerPressed: '#6E4D99',
    accentContainerFocused: '#6E4D99',
    // Accent Variant
    accentVariant: '#DBB7FF',
    onAccentVariant: '#1D1F2A',
    accentVariantHovered: '#CC99FF',
    accentVariantPressed: '#CC99FF',
    accentVariantFocused: '#CC99FF',
    // Main
    main: '#3173FF',
    onMain: '#FFFFFF',
    mainHovered: '#0052FF',
    mainPressed: '#0052FF',
    mainFocused: '#0052FF',
    // Main container
    mainContainer: '#002799',
    onMainContainer: '#FFFFFF',
    mainContainerHovered: '#000A33',
    mainContainerPressed: '#000A33',
    mainContainerFocused: '#000A33',
    // Main Variant
    mainVariant: '#91B5FF',
    onMainVariant: '#1D1F2A',
    mainVariantHovered: '#6194FF',
    mainVariantPressed: '#6194FF',
    mainVariantFocused: '#6194FF',
    // Support
    support: '#DCDCE5',
    onSupport: '#1D1F2A',
    supportHovered: '#C4C5D3',
    supportPressed: '#C4C5D3',
    supportFocused: '#C4C5D3',
    // Support Container
    supportContainer: '#4D4E7B',
    onSupportContainer: '#FFFFFF',
    supportContainerHovered: '#35376A',
    supportContainerPressed: '#35376A',
    supportContainerFocused: '#35376A',
    // Support Variant
    supportVariant: '#F4F4F7',
    onSupportVariant: '#1D1F2A',
    supportVariantHovered: '#DCDCE5',
    supportVariantPressed: '#DCDCE5',
    supportVariantFocused: '#DCDCE5',
    // Success
    success: '#64BC90',
    onSuccess: '#000000',
    successHovered: '#31A56B',
    successPressed: '#31A56B',
    successFocused: '#31A56B',
    // Success container
    successContainer: '#14422B',
    onSuccessContainer: '#B7DFCB',
    successContainerHovered: '#14422B',
    successContainerPressed: '#14422B',
    successContainerFocused: '#14422B',
    // Alert
    alert: '#F7CF76',
    onAlert: '#000000',
    alertHovered: '#F4BF48',
    alertPressed: '#F4BF48',
    alertFocused: '#F4BF48',
    // Alert container
    alertContainer: '#624C1D',
    onAlertContainer: '#FBE9BF',
    alertContainerHovered: '#3D3012',
    alertContainerPressed: '#3D3012',
    alertContainerFocused: '#3D3012',
    // Error
    error: '#F8807D',
    onError: '#000000',
    errorHovered: '#F65651',
    errorPressed: '#F65651',
    errorFocused: '#F65651',
    // Error container
    errorContainer: '#622220',
    onErrorContainer: '#FCC4C2',
    errorContainerHovered: '#3E1514',
    errorContainerPressed: '#3E1514',
    errorContainerFocused: '#3E1514',
    // Info
    info: '#45B8CA',
    onInfo: '#000000',
    infoHovered: '#07A0B8',
    infoPressed: '#07A0B8',
    infoFocused: '#07A0B8',
    // Info container
    infoContainer: '#03404A',
    onInfoContainer: '#A8DEE6',
    infoContainerHovered: '#02282E',
    infoContainerPressed: '#02282E',
    infoContainerFocused: '#02282E',
    // Neutral
    neutral: '#9C9BA4',
    onNeutral: '#000000',
    neutralHovered: '#5C5B64',
    neutralPressed: '#5C5B64',
    neutralFocused: '#5C5B64',
    // Neutral container
    neutralContainer: '#313036',
    onNeutralContainer: '#D1D0D5',
    neutralContainerHovered: '#252428',
    neutralContainerPressed: '#252428',
    neutralContainerFocused: '#252428',
    // Background
    background: '#000000',
    onBackground: '#FFFFFF',
    // Background variant
    backgroundVariant: '#252428',
    onBackgroundVariant: '#FFFFFF',
    // Surface
    surface: '#000000',
    onSurface: '#FFFFFF',
    surfaceHovered: '#080632',
    surfacePressed: '#080632',
    surfaceFocused: '#080632',
    // Surface Inverse
    surfaceInverse: '#F8F8F9',
    onSurfaceInverse: '#000000',
    surfaceInverseHovered: '#EBEBED',
    surfaceInversePressed: '#EBEBED',
    surfaceInverseFocused: '#EBEBED',
    // Outline
    outline: '#4A4950',
    outlineHigh: '#FFFFFF',
    outlineHovered: '#7583FF',
    outlinePressed: '#7583FF',
    outlineFocused: '#4A4950',
    // Overlay
    overlay: '#313036', // use with dim-1 opacity
    onOverlay: '#FFFFFF',
  },
})
