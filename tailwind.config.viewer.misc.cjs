const misc = {
  'animations fill mode': {
    'spark-anime-fill-forwards': 'animation-fill-mode: forwards;',
    'spark-anime-fill-forwards': 'animation-fill-mode: backwards;',
    'spark-anime-fill-both': 'animation-fill-mode: both;',
    'spark-anime-fill-none': 'animation-fill-mode: none;',
  },
  'animations duration': {
    'spark-anime-duration-{anyValueFromThemeTransitionDuration}':
      'animation-duration: anyValueFromThemeTransitionDuration ms;',
    'spark-anime-duration-[arbitraryValue]': 'animation-duration: arbitraryValue ms;',
  },
  'animations delay': {
    'spark-anime-delay-{anyValueFromThemeTransitionDuration}':
      'animation-delay: anyValueFromThemeTransitionDuration ms;',
    'spark-anime-delay-[arbitraryValue]': 'animation-delay: arbitraryValue ms;',
  },
  'animations timing function': {
    'spark-anime-easing-linear': 'animation-timing-function: linear;',
    'spark-anime-easing-in': 'animation-timing-function: cubic-bezier(0.4, 0, 1, 1);',
    'spark-anime-easing-out': 'animation-timing-function: cubic-bezier(0, 0, 0.2, 1);',
    'spark-anime-easing-in-out': 'animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);',
    'spark-anime-easing-in-back': 'animation-timing-function: cubic-bezier(0.3, -0.05, 0.7, -0.5);',
    'spark-anime-easing-out-back': 'animation-timing-function: cubic-bezier(0.45, 1.45, 0.8, 1);',
    'spark-anime-easing-in-out-back': 'animation-timing-function: cubic-bezier(0.42, 0, 0.58, 1);',
  },
  'animations direction': {
    'spark-anime-direction-normal': 'animation-direction: normal;',
    'spark-anime-direction-reverse': 'animation-direction: reverse;',
    'spark-anime-direction-alternate': 'animation-direction: alternate;',
    'spark-anime-direction-alternate-reverse': 'animation-direction: alternate-reverse;',
  },
  'animations iteration count': {
    'spark-anime-iteration-1': 'animation-iteration-count: 1;',
    'spark-anime-iteration-2': 'animation-iteration-count: 2;',
    'spark-anime-iteration-3': 'animation-iteration-count: 3;',
    'spark-anime-iteration-infinite': 'animation-iteration-count: infinite;',
    'spark-anime-iteration-[arbitraryValue]': 'animation-iteration-count: arbitraryValue;',
  },
  'animations play state': {
    'spark-anime-play-running': 'animation-play-state: running;',
    'spark-anime-play-paused': 'animation-play-state: paused;',
  },

  keyframes: {
    'animate-slide-top': 'slide top animation (element with be translated to the top)',
    'animate-slide-right': 'slide right animation (element with be translated to the right)',
    'animate-slide-bottom': 'slide bottom animation (element with be translated to the bottom)',
    'animate-slide-left': 'slide left animation (element with be translated to the left)',
  },
  utilities: {
    'u-current-font-size': `width: 1em; height: 1em;`,
    'u-shadow-border-transition': `transition: box-shadow 100ms ease-in, border-color 300ms ease-in;`,
  },
}

module.exports = {
  misc,
}
