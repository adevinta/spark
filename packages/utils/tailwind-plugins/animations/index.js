/* eslint-disable max-lines-per-function */
const plugin = require('tailwindcss/plugin')

function arrToObj(arr) {
  return arr.reduce((acc, cur) => {
    acc[cur] = cur

    return acc
  }, {})
}

const commonValues = ['inherit', 'initial', 'revert', 'revert-layer', 'unset']

const iterations = ['1', '2', '3', 'infinite']
const fillModes = ['none', 'forwards', 'backwards', 'both']
const directions = ['normal', 'reverse', 'alternate', 'alternate-reverse']
const playStates = ['running', 'paused']

const commonValuesObj = arrToObj(commonValues)

function removeKeyFromObj(obj, key) {
  const copyObj = obj
  delete copyObj[key]

  return copyObj
}

module.exports = plugin.withOptions(
  /**
   * @typedef {Object} Options
   * @property {string} variantPrefix The prefix to use for the animation variants.
   */

  /**
   * @param {Object} options The options for the plugin.
   * @param {string} [options.variantPrefix="spark-anime"] The prefix to use for the animation variants.
   * @returns {Function} The PostCSS plugin function.
   */
  options =>
    ({ addUtilities, matchUtilities, theme }) => {
      const opts = options || {}

      const { variantPrefix = 'spark-anime' } = opts

      matchUtilities(
        {
          [`${variantPrefix}-duration`]: value => ({
            animationDuration: value,
          }),
        },
        {
          values: {
            ...removeKeyFromObj(theme('transitionDuration'), 'DEFAULT'),
            ...commonValuesObj,
          },
        }
      )

      matchUtilities(
        {
          [`${variantPrefix}-delay`]: value => ({
            animationDelay: value,
          }),
        },
        {
          values: {
            ...removeKeyFromObj(theme('transitionDuration'), 'DEFAULT'),
            ...commonValuesObj,
          },
        }
      )

      matchUtilities(
        {
          [`${variantPrefix}-iteration`]: value => ({
            animationIterationCount: value,
          }),
        },
        { values: { ...arrToObj(iterations), ...commonValuesObj } }
      )

      matchUtilities(
        {
          [`${variantPrefix}-easing`]: value => ({
            animationTimingFunction: value,
          }),
        },
        {
          values: {
            ...removeKeyFromObj(theme('transitionTimingFunction'), 'DEFAULT'),
            ...commonValuesObj,
          },
        }
      )

      fillModes.forEach(mode => {
        addUtilities({
          [`.${variantPrefix}-fill-${mode}`]: {
            'animation-fill-mode': mode,
          },
        })
      })

      directions.forEach(direction => {
        addUtilities({
          [`.${variantPrefix}-direction-${direction}`]: {
            'animation-direction': direction,
          },
        })
      })

      playStates.forEach(state => {
        addUtilities({
          [`.${variantPrefix}-play-${state}`]: {
            'animation-play-state': state,
          },
        })
      })
    },
  () => ({
    theme: {
      extend: {
        keyframes: {
          standaloneCollapseIn: {
            '0%': { opacity: 0, height: 0 },
            '100%': { opacity: 1, height: 'var(--height)' },
          },
          standaloneCollapseOut: {
            '0%': { opacity: 1, height: 'var(--height)' },
            '100%': { opacity: 0, height: 0 },
          },
          fadeIn: {
            '0%': { opacity: 0 },
            '100%': { opacity: 1 },
          },
          fadeOut: {
            '0%': { opacity: 1 },
            '100%': { opacity: 0 },
          },
          // slideIn
          slideInTop: {
            '0%': { transform: 'translateY(-100%)' },
            '100%': { transform: 'translateY(0)' },
          },
          slideInRight: {
            '0%': { transform: 'translateX(100%)' },
            '100%': { transform: 'translateX(0)' },
          },
          slideInBottom: {
            '0%': { transform: 'translateY(100%)' },
            '100%': { transform: 'translateY(0)' },
          },
          slideInLeft: {
            '0%': { transform: 'translateX(-100%)' },
            '100%': { transform: 'translateX(0)' },
          },
          // slideOut
          slideOutTop: {
            '0%': { transform: 'translateY(0)' },
            '100%': { transform: 'translateY(-100%)' },
          },
          slideOutRight: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(100%)' },
          },
          slideOutBottom: {
            '0%': { transform: 'translateY(0)' },
            '100%': { transform: 'translateY(100%)' },
          },
          slideOutLeft: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-100%)' },
          },
          swipeOutRight: {
            '0%': { transform: 'translateX(var(--swipe-position-x))' },
            '100%': { transform: 'translateX(100vw)' },
          },
          swipeOutLeft: {
            '0%': { transform: 'translateX(var(--swipe-position-x))' },
            '100%': { transform: 'translateX(-100vw)' },
          },
          standaloneIndeterminateBar: {
            '0%': {
              left: '0',
              width: '0',
            },
            '50%': {
              left: '50%',
              width: '50%',
            },
            '75%': {
              left: '100%',
              width: '0',
            },
            '100%': {
              left: '0',
              width: '0',
            },
          },
          shimmer: {
            '100%': { maskPosition: '-200% 0%' },
          },
        },
        animation: {
          'fade-in': 'fadeIn 0.25s cubic-bezier(0.2, 0, 0, 1)',
          'fade-out': 'fadeOut 0.25s cubic-bezier(0.2, 0, 0, 1)',
          'standalone-collapse-in': 'standaloneCollapseIn 0.25s cubic-bezier(0.2, 0, 0, 1)',
          'standalone-collapse-out': 'standaloneCollapseOut 0.25s cubic-bezier(0.2, 0, 0, 1)',
          // slideIn
          'slide-in-top': 'slideInTop 0.4s cubic-bezier(0.05, 0.7, 0.1, 1)',
          'slide-in-right': 'slideInRight 0.4s cubic-bezier(0.05, 0.7, 0.1, 1)',
          'slide-in-bottom': 'slideInBottom 0.4s cubic-bezier(0.05, 0.7, 0.1, 1)',
          'slide-in-left': 'slideInLeft 0.4s cubic-bezier(0.05, 0.7, 0.1, 1)',
          // slideOut
          'slide-out-top': 'slideOutTop 0.4s cubic-bezier(0.05, 0.7, 0.1, 1)',
          'slide-out-right': 'slideOutRight 0.4s cubic-bezier(0.05, 0.7, 0.1, 1)',
          'slide-out-bottom': 'slideOutBottom 0.4s cubic-bezier(0.05, 0.7, 0.1, 1)',
          'slide-out-left': 'slideOutLeft 0.4s cubic-bezier(0.05, 0.7, 0.1, 1)',
          'standalone-indeterminate-bar':
            'standaloneIndeterminateBar 1s ease-out infinite normal none running',
          // swipeOut
          'swipe-out-right': 'swipeOutRight 0.1s ease-out',
          'swipe-out-left': 'swipeOutLeft 0.1s ease-out',
          // shimmer
          shimmer: 'shimmer 2s ease-in infinite',
        },
      },
    },
  })
)
