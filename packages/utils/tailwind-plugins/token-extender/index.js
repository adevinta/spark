/* eslint-disable-next-line @typescript-eslint/no-var-requires */
const plugin = require('tailwindcss/plugin')

// see -> https://tailwindcss.com/docs/theme#configuration-reference
const tailwindReferenceKeys = [
  'screens',
  'colors',
  'spacing',
  'animation',
  'backgroundColor',
  'backgroundImage',
  'backgroundOpacity',
  'backgroundPosition',
  'backgroundSize',
  'borderColor',
  'borderOpacity',
  'borderRadius',
  'borderWidth',
  'boxShadow',
  'container',
  'cursor',
  'divideColor',
  'divideOpacity',
  'divideWidth',
  'fill',
  'flex',
  'flexGrow',
  'flexShrink',
  'fontFamily',
  'fontSize',
  'fontWeight',
  'gap',
  'gradientColorStops',
  'gridAutoColumns',
  'gridAutoRows',
  'gridColumn',
  'gridColumnEnd',
  'gridColumnStart',
  'gridRow',
  'gridRowStart',
  'gridRowEnd',
  'transformOrigin',
  'gridTemplateColumns',
  'gridTemplateRows',
  'height',
  'inset',
  'keyframes',
  'letterSpacing',
  'lineHeight',
  'listStyleType',
  'margin',
  'maxHeight',
  'maxWidth',
  'minHeight',
  'minWidth',
  'objectPosition',
  'opacity',
  'order',
  'outline',
  'padding',
  'placeholderColor',
  'placeholderOpacity',
  'ringColor',
  'ringOffsetColor',
  'ringOffsetWidth',
  'ringOpacity',
  'ringWidth',
  'rotate',
  'scale',
  'skew',
  'space',
  'stroke',
  'strokeWidth',
  'textColor',
  'textOpacity',
  'transitionDuration',
  'transitionDelay',
  'transitionProperty',
  'transitionTimingFunction',
  'translate',
  'width',
  'zIndex',
]

function getCSSVariableDeclarations(values) {
  const cssVariableDeclarations = Object.keys(values).reduce((acc, key) => {
    const { value } = values[key]

    acc[`--${key}`] = value

    return acc
  }, {})

  return cssVariableDeclarations
}

function getCSSVariableReferences(values) {
  const cssVariableReferences = Object.keys(values).reduce((acc, key) => {
    const { keys = [] } = values[key]

    keys.forEach(k => {
      const isValidKey = tailwindReferenceKeys.includes(k)
      if (!isValidKey) return

      acc[k] = {
        ...acc[k],
        [key]: `var(--${key})`,
      }
    })

    return acc
  }, {})

  return cssVariableReferences
}

module.exports = plugin.withOptions(
  options =>
    ({ addBase }) => {
      const config = options || {}

      addBase({
        ':root': getCSSVariableDeclarations(config),
      })
    },
  config => ({
    theme: {
      extend: getCSSVariableReferences(config),
    },
  })
)
