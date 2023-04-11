import { createTheme } from './createTheme'
import { type Theme } from './types'

export const defaultThemeDark: Theme = createTheme({
  colors: {
    // Primary
    primary: '#7583FF',
    onPrimary: '#000000',
    primaryHovered: '#5952D6',
    primaryDisabled: '#080632',
    primaryFocused: '#5952D6',
    // Primary container
    primaryContainer: '#0D0A50',
    onPrimaryContainer: '#B1AEEC',
    primaryContainerHovered: '#080632',
    primaryContainerDisabled: '#080632',
    primaryContainerFocused: '#080632',
    // Primary Variant
    primaryVariant: '#B1AEEC',
    onPrimaryVariant: '#000000',
    primaryVariantHovered: '#8580E1',
    primaryVariantDisabled: '#080632',
    primaryVariantFocused: '#8580E1',
    // Secondary
    secondary: '#FE6BA7',
    onSecondary: '#000000',
    secondaryHovered: '#FD398A',
    secondaryDisabled: '#3F0E22',
    secondaryFocused: '#FD398A',
    // Secondary Container
    secondaryContainer: '#651737',
    onSecondaryContainer: '#FEBAD6',
    secondaryContainerHovered: '#3F0E22',
    secondaryContainerDisabled: '#3F0E22',
    secondaryContainerFocused: '#3F0E22',
    // Secondary Variant
    secondaryVariant: '#FE92BF',
    onSecondaryVariant: '#000000',
    secondaryVariantHovered: '#FE6BA7',
    secondaryVariantDisabled: '#3F0E22',
    secondaryVariantFocused: '#FE6BA7',
    // Success
    success: '#64BC90',
    onSuccess: '#000000',
    successHovered: '#31A56B',
    successDisabled: '#14422B',
    successFocused: '#31A56B',
    // Success container
    successContainer: '#14422B',
    onSuccessContainer: '#B7DFCB',
    successContainerHovered: '#14422B',
    successContainerDisabled: '#14422B',
    successContainerFocused: '#14422B',
    // Alert
    alert: '#F7CF76',
    onAlert: '#000000',
    alertHovered: '#F4BF48',
    alertDisabled: '#3D3012',
    alertFocused: '#F4BF48',
    // Alert container
    alertContainer: '#624C1D',
    onAlertContainer: '#FBE9BF',
    alertContainerHovered: '#3D3012',
    alertContainerDisabled: '#3D3012',
    alertContainerFocused: '#3D3012',
    // Error
    error: '#F8807D',
    onError: '#000000',
    errorHovered: '#F65651',
    errorDisabled: '#3E1514',
    errorFocused: '#F65651',
    // Error container
    errorContainer: '#622220',
    onErrorContainer: '#FCC4C2',
    errorContainerHovered: '#3E1514',
    errorContainerDisabled: '#3E1514',
    errorContainerFocused: '#3E1514',
    // Info
    info: '#45B8CA',
    onInfo: '#000000',
    infoHovered: '#07A0B8',
    infoDisabled: '#02282E',
    infoFocused: '#07A0B8',
    // Info container
    infoContainer: '#03404A',
    onInfoContainer: '#A8DEE6',
    infoContainerHovered: '#02282E',
    infoContainerDisabled: '#02282E',
    infoContainerFocused: '#02282E',
    // Neutral
    neutral: '#9C9BA4',
    onNeutral: '#000000',
    neutralHovered: '#5C5B64',
    neutralDisabled: '#252428',
    neutralFocused: '#5C5B64',
    // Neutral container
    neutralContainer: '#313036',
    onNeutralContainer: '#D1D0D5',
    neutralContainerHovered: '#252428',
    neutralContainerDisabled: '#252428',
    neutralContainerFocused: '#252428',
    // Background
    background: '#000000',
    onBackground: '#FFFFFF',
    backgroundHovered: '#080632',
    backgroundDisabled: '#252428',
    backgroundFocused: '#080632',
    // Background variant
    backgroundVariant: '#252428',
    onBackgroundVariant: '#FFFFFF',
    // Surface
    surface: '#000000',
    onSurface: '#FFFFFF',
    surfaceHovered: '#080632',
    surfaceDisabled: '#252428',
    surfaceFocused: '#080632',
    // Surface Inverse
    surfaceInverse: '#F8F8F9',
    onSurfaceInverse: '#000000',
    surfaceInverseHovered: '#EBEBED',
    surfaceInverseDisabled: '#252428',
    surfaceInverseFocused: '#EBEBED',
    // Outline
    outline: '#4A4950',
    outlineHigh: '#FFFFFF',
    outlineHovered: '#7583FF',
    outlineDisabled: '#252428',
    outlineFocused: '#4A4950',
    // Overlay
    overlay: '#313036', // use with dim-1 opacity
    onOverlay: '#FFFFFF',
  },
})
