import { Theme } from './types'

function hexToLuminance(hex: string): number {
  // Convert hex to RGB
  const r = parseInt(hex.slice(1, 3), 16) / 255
  const g = parseInt(hex.slice(3, 5), 16) / 255
  const b = parseInt(hex.slice(5, 7), 16) / 255

  // Apply the formula for relative luminance
  const rgb = [r, g, b].map((value): number => {
    return value <= 0.03928 ? value / 12.92 : Math.pow((value + 0.055) / 1.055, 2.4)
  }) as [number, number, number]

  return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]
}

function contrastRatio(hex1: string, hex2: string): number {
  const luminance1 = hexToLuminance(hex1)
  const luminance2 = hexToLuminance(hex2)

  const ratio =
    (Math.max(luminance1, luminance2) + 0.05) / (Math.min(luminance1, luminance2) + 0.05)

  return ratio
}

function getWCAGScore(contrast: number, fontSizePx: number): string {
  const isLargeText = fontSizePx >= 24 // 24px or larger is considered large text

  if (contrast >= 7) {
    return 'AAA'
  } else if (contrast >= 4.5 && !isLargeText) {
    return 'AA'
  } else if (contrast >= 3 && isLargeText) {
    return 'AA'
  } else {
    return 'Failed'
  }
}

/**
 * https://www.w3.org/WAI/WCAG21/Understanding/contrast-minimum.html
 *
 * - Normal text  expected ratio: 4.5:1
 * - Large text (>= 18pt or 14pt with bold font) expected ratio: 3:1
 *
 * (1pt = 1.333px, therefore 14pt and 18pt are equivalent to approximately 18.5px and 24px)
 *
 *
 * How to read contrast:
 *
 * In the ratio "4.5:1", the 4.5 represents the luminance of the lighter color compared to the darker color, which is 1.
 * A ratio of 4.5:1 means the lighter color is 4.5 times brighter than the darker color.
 *
 * 1:1 – No contrast (the two colors are identical).
 * 21:1 (maximum contrast, black vs. white).
 */
export function checkColorContrast(
  hex1: string,
  hex2: string,
  fontSizePx: number
): { contrastRatio: string; score: string; textSize: string; colors: [string, string] } {
  const ratio = contrastRatio(hex1, hex2)

  return {
    contrastRatio: ratio.toFixed(2),
    score: getWCAGScore(ratio, fontSizePx),
    textSize: fontSizePx >= 24 ? 'Large' : 'Small',
    colors: [hex1, hex2],
  }
}

const NORMAL_FONT_SIZE = 16
const LARGE_FONT_SIZE = 16

const getSmallAndLargeCompliance = (background: string, foreground: string) => {
  return {
    small: checkColorContrast(background, foreground, NORMAL_FONT_SIZE),
    large: checkColorContrast(background, foreground, LARGE_FONT_SIZE),
  }
}

export const getThemeContrastReport = (theme: Theme) => {
  const { colors } = theme

  const tokenPairsReport = {
    // MAIN
    main: {
      previewStyles: 'bg-main text-on-main',
      ...getSmallAndLargeCompliance(colors.main, colors.onMain),
    },
    mainHovered: {
      previewStyles: 'bg-main-hovered text-on-main',
      ...getSmallAndLargeCompliance(colors.mainHovered, colors.onMain),
    },
    mainContainer: {
      previewStyles: 'bg-main-container text-on-main-container',
      ...getSmallAndLargeCompliance(colors.mainContainer, colors.onMainContainer),
    },
    mainContainerHovered: {
      previewStyles: 'bg-main-container-hovered text-on-main-container',
      ...getSmallAndLargeCompliance(colors.mainContainerHovered, colors.onMainContainer),
    },
    // SUPPORT
    support: {
      previewStyles: 'bg-support text-on-support',
      ...getSmallAndLargeCompliance(colors.support, colors.onSupport),
    },
    supportHovered: {
      previewStyles: 'bg-support-hovered text-on-support',
      ...getSmallAndLargeCompliance(colors.supportHovered, colors.onSupport),
    },
    supportContainer: {
      previewStyles: 'bg-support-container text-on-support-container',
      ...getSmallAndLargeCompliance(colors.supportContainer, colors.onSupportContainer),
    },
    supportContainerHovered: {
      previewStyles: 'bg-support-container-hovered text-on-support-container',
      ...getSmallAndLargeCompliance(colors.supportContainerHovered, colors.onSupportContainer),
    },
    // ACCENT
    accent: {
      previewStyles: 'bg-accent text-on-accent',
      ...getSmallAndLargeCompliance(colors.accent, colors.onAccent),
    },
    accentHovered: {
      previewStyles: 'bg-accent-hovered text-on-accent',
      ...getSmallAndLargeCompliance(colors.accentHovered, colors.onAccent),
    },
    accentContainer: {
      previewStyles: 'bg-accent-container text-on-accent-container',
      ...getSmallAndLargeCompliance(colors.accentContainer, colors.onAccentContainer),
    },
    accentContainerHovered: {
      previewStyles: 'bg-accent-container-hovered text-on-accent-container',
      ...getSmallAndLargeCompliance(colors.accentContainerHovered, colors.onAccentContainer),
    },
    // BASIC
    basic: {
      previewStyles: 'bg-basic text-on-basic',
      ...getSmallAndLargeCompliance(colors.basic, colors.onBasic),
    },
    basicHovered: {
      previewStyles: 'bg-basic-hovered text-on-basic',
      ...getSmallAndLargeCompliance(colors.basicHovered, colors.onBasic),
    },
    basicContainer: {
      previewStyles: 'bg-basic-container text-on-basic-container',
      ...getSmallAndLargeCompliance(colors.basicContainer, colors.onBasicContainer),
    },
    basicContainerHovered: {
      previewStyles: 'bg-basic-container-hovered text-on-basic-container',
      ...getSmallAndLargeCompliance(colors.basicContainerHovered, colors.onBasicContainer),
    },
    // SUCCESS
    success: {
      previewStyles: 'bg-success text-on-success',
      ...getSmallAndLargeCompliance(colors.success, colors.onSuccess),
    },
    successHovered: {
      previewStyles: 'bg-success-hovered text-on-success',
      ...getSmallAndLargeCompliance(colors.successHovered, colors.onSuccess),
    },
    successContainer: {
      previewStyles: 'bg-success-container text-on-success-container',
      ...getSmallAndLargeCompliance(colors.successContainer, colors.onSuccessContainer),
    },
    successContainerHovered: {
      previewStyles: 'bg-success-container-hovered text-on-success-container',
      ...getSmallAndLargeCompliance(colors.successContainerHovered, colors.onSuccessContainer),
    },
    // ERROR
    error: {
      previewStyles: 'bg-error text-on-error',
      ...getSmallAndLargeCompliance(colors.error, colors.onError),
    },
    errorHovered: {
      previewStyles: 'bg-error-hovered text-on-error',
      ...getSmallAndLargeCompliance(colors.errorHovered, colors.onError),
    },
    errorContainer: {
      previewStyles: 'bg-error-container text-on-error-container',
      ...getSmallAndLargeCompliance(colors.errorContainer, colors.onErrorContainer),
    },
    errorContainerHovered: {
      previewStyles: 'bg-error-container-hovered text-on-error-container',
      ...getSmallAndLargeCompliance(colors.errorContainerHovered, colors.onErrorContainer),
    },
    // ALERT
    alert: {
      previewStyles: 'bg-alert text-on-alert',
      ...getSmallAndLargeCompliance(colors.alert, colors.onAlert),
    },
    alertHovered: {
      previewStyles: 'bg-alert-hovered text-on-alert',
      ...getSmallAndLargeCompliance(colors.alertHovered, colors.onAlert),
    },
    alertContainer: {
      previewStyles: 'bg-alert-container text-on-alert-container',
      ...getSmallAndLargeCompliance(colors.alertContainer, colors.onAlertContainer),
    },
    alertContainerHovered: {
      previewStyles: 'bg-alert-container-hovered text-on-alert-container',
      ...getSmallAndLargeCompliance(colors.alertContainerHovered, colors.onAlertContainer),
    },
    // INFO
    info: {
      previewStyles: 'bg-info text-on-info',
      ...getSmallAndLargeCompliance(colors.info, colors.onInfo),
    },
    infoHovered: {
      previewStyles: 'bg-info-hovered text-on-info',
      ...getSmallAndLargeCompliance(colors.infoHovered, colors.onInfo),
    },
    infoContainer: {
      previewStyles: 'bg-info-container text-on-info-container',
      ...getSmallAndLargeCompliance(colors.infoContainer, colors.onInfoContainer),
    },
    infoContainerHovered: {
      previewStyles: 'bg-info-container-hovered text-on-info-container',
      ...getSmallAndLargeCompliance(colors.infoContainerHovered, colors.onInfoContainer),
    },
    // NEUTRAL
    neutral: {
      previewStyles: 'bg-neutral text-on-neutral',
      ...getSmallAndLargeCompliance(colors.neutral, colors.onNeutral),
    },
    neutralHovered: {
      previewStyles: 'bg-neutral-hovered text-on-neutral',
      ...getSmallAndLargeCompliance(colors.neutralHovered, colors.onNeutral),
    },
    neutralContainer: {
      previewStyles: 'bg-neutral-container text-on-neutral-container',
      ...getSmallAndLargeCompliance(colors.neutralContainer, colors.onNeutralContainer),
    },
    neutralContainerHovered: {
      previewStyles: 'bg-neutral-container-hovered text-on-neutral-container',
      ...getSmallAndLargeCompliance(colors.neutralContainerHovered, colors.onNeutralContainer),
    },
    // BACKGROUND
    background: {
      previewStyles: 'bg-background text-on-background',
      ...getSmallAndLargeCompliance(colors.background, colors.onBackground),
    },
    backgroundVariant: {
      previewStyles: 'bg-background-variant text-on-background-variant',
      ...getSmallAndLargeCompliance(colors.backgroundVariant, colors.onBackgroundVariant),
    },
    // SURFACE
    surface: {
      previewStyles: 'bg-surface text-on-surface',
      ...getSmallAndLargeCompliance(colors.surface, colors.onSurface),
    },
    surfaceHovered: {
      previewStyles: 'bg-surface-hovered text-on-surface',
      ...getSmallAndLargeCompliance(colors.surfaceHovered, colors.onSurface),
    },
    // SURFACE INVERSE
    surfaceInverse: {
      previewStyles: 'bg-surface-inverse text-on-surface-inverse',
      ...getSmallAndLargeCompliance(colors.surfaceInverse, colors.onSurfaceInverse),
    },
    surfaceInverseHovered: {
      previewStyles: 'bg-surface-inverse-hovered text-on-surface-inverse',
      ...getSmallAndLargeCompliance(colors.surfaceInverseHovered, colors.onSurfaceInverse),
    },
  }

  return tokenPairsReport
}
