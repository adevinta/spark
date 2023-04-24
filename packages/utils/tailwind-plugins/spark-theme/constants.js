const tailwindCategoryKeys = {
  colors: 'colors',
  fontSize: 'fontSize',
  screens: 'screens',
}

const unassignedColors = {
  inherit: 'inherit',
  current: 'currentColor',
  transparent: 'transparent',
}

const transitionDurationLookup = {
  0: '0ms',
  50: '50ms',
  100: '100ms',
  200: '200ms',
  300: '300ms',
  400: '400ms',
  500: '500ms',
  600: '600ms',
  800: '800ms',
}

const transitionTimingFunctionLookup = {
  'in-back': 'cubic-bezier(0.3, -0.05, 0.7, -0.5)',
  'out-back': 'cubic-bezier(0.45, 1.45, 0.8, 1)',
  'in-out-back': 'cubic-bezier(0.42, 0, 0.58, 1)',
}

const DEFAULT_KEY = 'DEFAULT'

module.exports = {
  tailwindCategoryKeys,
  unassignedColors,
  transitionDurationLookup,
  transitionTimingFunctionLookup,
  DEFAULT_KEY,
}
