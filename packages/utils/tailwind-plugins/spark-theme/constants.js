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

const transitionDelayDurationLookup = {
  0: '0ms',
  50: '50ms',
  100: '100ms',
  150: '150ms',
  200: '200ms',
  250: '250ms',
  300: '300ms',
  350: '350ms',
  400: '400ms',
  450: '450ms',
  500: '500ms',
  600: '600ms',
  700: '700ms',
  800: '800ms',
  900: '900ms',
  1000: '1000ms',
  1500: '1500ms',
  2000: '2000ms',
  2500: '2500ms',
}

const transitionDurationLookup = {
  DEFAULT: '250ms',
  0: '0s',
  50: '50ms',
  100: '100ms',
  150: '150ms',
  200: '200ms',
  250: '250ms',
  300: '300ms',
  350: '350ms',
  400: '400ms',
  450: '450ms',
  500: '500ms',
  550: '550ms',
  600: '500ms',
  700: '700ms',
  800: '800ms',
  900: '900ms',
  1000: '1000ms',
}

const transitionTimingFunctionLookup = {
  DEFAULT: 'cubic-bezier(0.2, 0, 0, 1)',
  linear: 'cubic-bezier(0, 0, 1, 1)',
  standard: 'cubic-bezier(0.2, 0, 0, 1)',
  accelerate: 'cubic-bezier(0.3, 0, 0.8, 1.15)',
  decelerate: 'cubic-bezier(0.05, 0.7, 0.1, 1)',
  'standard-back': 'cubic-bezier(0.3, -0.05, 0.7, -0.5)',
  'accelerate-back': 'cubic-bezier(0.45,1.45, 0.8, 1)',
  'decelerate-back': 'cubic-bezier(0.42, 0, 0.58, 1)',
}

const DEFAULT_KEY = 'DEFAULT'

module.exports = {
  tailwindCategoryKeys,
  unassignedColors,
  transitionDurationLookup,
  transitionDelayDurationLookup,
  transitionTimingFunctionLookup,
  DEFAULT_KEY,
}
