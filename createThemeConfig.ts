import { createTheme, defaultTheme, Theme } from '@spark-ui/theme-utils'
import { createCSSTokensFile, createTailwindThemeConfigFile } from '@spark-ui/theme-utils-node'

export const darkTheme: Theme = createTheme({
  colors: {
    // Primary
    primary: '##F07B42',
    onPrimary: '#14191F',
    primaryContainer: '#5C250A',
    onPrimaryContainer: '#FBDFD1',
    primaryHovered: '#B84A14', // todo: update when dark theme is in figma
    primaryDisabled: '#F0F5FA', // todo: update when dark theme is in figma
    primaryFocused: '#EC5A13', // todo: update when dark theme is in figma
    primaryContainerHovered: '##FBDFD1', // todo: update when dark theme is in figma
    primaryContainerDisabled: '##F0F5FA', // todo: update when dark theme is in figma
    primaryContainerFocused: '#FDECE8', // todo: update when dark theme is in figma
    // Secondary
    secondary: '#F0F5FA',
    onSecondary: '#14191F',
    secondaryContainer: '#2B3640',
    onSecondaryContainer: '#DAE6F1',
    secondaryHovered: '#010509', // todo: update when dark theme is in figma
    secondaryDisabled: '#F0F5FA', // todo: update when dark theme is in figma
    secondaryFocused: '#06233D', // todo: update when dark theme is in figma
    secondaryContainerHovered: '#EDDEE5', // todo: update when dark theme is in figma
    secondaryContainerDisabled: '#F0F5FA', // todo: update when dark theme is in figma
    secondaryContainerFocused: '#F0F5FA', // todo: update when dark theme is in figma
    // Primary Variant
    primaryVariant: '#F7BEA1',
    onPrimaryVariant: '#14191F',
    primaryVariantHovered: '#89380F', // todo: update when dark theme is in figma
    primaryVariantDisabled: '#F0F5FA', // todo: update when dark theme is in figma
    primaryVariantFocused: '#B84A14', // todo: update when dark theme is in figma
    // Secondary Variant
    secondaryVariant: '#BBCDDD',
    onSecondaryVariant: '#141B1F',
    secondaryVariantHovered: '#3D4D5C', // todo: update when dark theme is in figma
    secondaryVariantDisabled: '#F0F5FA', // todo: update when dark theme is in figma
    secondaryVariantFocused: '#4E6579', // todo: update when dark theme is in figma
    // Success
    success: '#71AD73',
    onSuccess: '#14191F',
    successContainer: '#1F3D20',
    onSuccessContainer: '#DCEADC',
    successHovered: '#3E7A40', // todo: update when dark theme is in figma
    successDisabled: '#F0F5FA', // todo: update when dark theme is in figma
    successFocused: '#4E9850', // todo: update when dark theme is in figma
    successContainerHovered: '#DCEADC', // todo: update when dark theme is in figma
    successContainerDisabled: '#F0F5FA', // todo: update when dark theme is in figma
    successContainerFocused: '#EDF5EE', // todo: update when dark theme is in figma
    // Alert
    alert: '#FFCC66',
    onAlert: '#F0F5FA',
    alertContainer: '#664400',
    onAlertContainer: '#FFEECC',
    alertHovered: '#CC8800', // todo: update when dark theme is in figma
    alertDisabled: '#F0F5FA', // todo: update when dark theme is in figma
    alertFocused: '#FFAA00', // todo: update when dark theme is in figma
    alertContainerHovered: '#FFEECC', // todo: update when dark theme is in figma
    alertContainerDisabled: '#F0F5FA', // todo: update when dark theme is in figma
    alertContainerFocused: '#FFF6E5', // todo: update when dark theme is in figma
    // Error
    error: '#E05D52',
    onError: '#14191F',
    errorContainer: '#57150F',
    onErrorContainer: '#F7D7D4',
    errorHovered: '#AD291F', // todo: update when dark theme is in figma
    errorDisabled: '#F0F5FA', // todo: update when dark theme is in figma
    errorFocused: '#D93426', // todo: update when dark theme is in figma
    errorContainerHovered: '#F7D7D4', // todo: update when dark theme is in figma
    errorContainerDisabled: '#F0F5FA', // todo: update when dark theme is in figma
    errorContainerFocused: '#FBECEB', // todo: update when dark theme is in figma
    // Info
    info: '#429FF0',
    onInfo: '#14191F',
    infoContainer: '#08365D',
    onInfoContainer: '#CFE6FB',
    infoHovered: '#0F6CBD', // todo: update when dark theme is in figma
    infoDisabled: '#F0F5FA', // todo: update when dark theme is in figma
    infoFocused: '#1388EC', // todo: update when dark theme is in figma
    infoContainerHovered: '#CFE6FB', // todo: update when dark theme is in figma
    infoContainerDisabled: '#F0F5FA', // todo: update when dark theme is in figma
    infoContainerFocused: '#E7F3FD', // todo: update when dark theme is in figma
    // Neutral
    neutral: '#7F95A9',
    onNeutral: '#14191F',
    neutralContainer: '#2B3640',
    onNeutralContainer: '#DAE6F1',
    neutralHovered: '#4E6579', // todo: update when dark theme is in figma
    neutralDisabled: '#F0F5FA', // todo: update when dark theme is in figma
    neutralFocused: '#627C93', // todo: update when dark theme is in figma
    neutralContainerHovered: '#DAE6F1', // todo: update when dark theme is in figma
    neutralContainerDisabled: '#F0F5FA', // todo: update when dark theme is in figma
    neutralContainerFocused: '#F0F5FA', // todo: update when dark theme is in figma
    // Background
    background: '#14191F',
    onBackground: '#F7FAFD',
    backgroundHovered: '#F7FAFD', // todo: update when dark theme is in figma
    backgroundDisabled: '#F0F5FA', // todo: update when dark theme is in figma
    backgroundFocused: '#FFFFFF', // todo: update when dark theme is in figma
    // Surface
    surface: '#14191F',
    onSurface: '#F7FAFD',
    surfaceHovered: '#F7FAFD', // todo: update when dark theme is in figma
    surfaceDisabled: '#F0F5FA', // todo: update when dark theme is in figma
    surfaceFocused: '#FFFFFF', // todo: update when dark theme is in figma
    // Surface Inverse
    surfaceInverse: '#F0F5FA',
    onSurfaceInverse: '#14191F',
    surfaceInverseHovered: '#14191F', // todo: update when dark theme is in figma
    surfaceInverseDisabled: '#F0F5FA', // todo: update when dark theme is in figma
    surfaceInverseFocused: '#14191F', // todo: update when dark theme is in figma
    // Outline
    outline: '#3D4D5C',
    // Overlay
    overlay: '#2B3640',
  },
})

const themes = {
  default: defaultTheme,
  dark: darkTheme,
}

createTailwindThemeConfigFile('./tailwind.theme.cjs')
createCSSTokensFile('./src/tailwind.css', themes)
