/* eslint-disable-next-line @typescript-eslint/no-var-requires */
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
        },
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
        },
      )

      matchUtilities(
        {
          [`${variantPrefix}-iteration`]: value => ({
            animationIterationCount: value,
          }),
        },
        { values: { ...arrToObj(iterations), ...commonValuesObj } },
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
        },
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
          slideTop: {
            '0%': { transform: 'translateY(0)' },
            '100%': { transform: 'translateY(-100px)' },
          },
          slideRight: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(100px)' },
          },
          slideBottom: {
            '0%': { transform: 'translateY(0)' },
            '100%': { transform: 'translateY(100px)' },
          },
          slideLeft: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-100px)' },
          },
        },
        animation: {
          'slide-top': 'slideTop 0.5s ease-in-out',
          'slide-right': 'slideRight 0.5s ease-in-out',
          'slide-bottom': 'slideBottom 0.5s ease-in-out',
          'slide-left': 'slideLeft 0.5s ease-in-out',
        },
      },
    },
  }),
)
