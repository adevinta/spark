import { cva, type VariantProps } from 'class-variance-authority'

import { filledVariants, tintedVariants } from './snackbarVariants'

export const snackbarItemVariant = cva(
  [
    'col-start-1 row-start-1',
    'inline-grid items-center',
    'px-md',
    'rounded-md shadow',
    'max-w-[600px]',
    'cursor-default pointer-events-auto touch-none select-none',
    'absolute',
    /**
     * Focus
     */
    'group-focus-visible:outline-none group-focus-visible:u-ring group-[&:not(:focus-visible)]:ring-inset',
    /**
     * Positionning
     */
    'group-data-[position=bottom]:bottom-none group-data-[position=bottom-left]:bottom-none group-data-[position=bottom-right]:bottom-none',
    'group-data-[position=top]:top-none group-data-[position=top-left]:top-none group-data-[position=top-right]:top-none',
    /**
     * Animation and opacity
     */
    '!spark-anime-fill-forwards !spark-anime-duration-400',
    'data-[animation=queued]:animate-fade-in',
    'data-[animation=entering]:spark-anime-easing-decelerate-back',
    'data-[animation=exiting]:spark-anime-easing-standard',
    // Parent position bottom|bottom-left|bottom-right
    '[&:not([data-swipe])]:group-data-[position=bottom]:data-[animation=entering]:animate-slide-in-bottom',
    '[&:not([data-swipe])]:group-data-[position=bottom]:data-[animation=exiting]:animate-[fadeOut,_slideOutBottom]',
    '[&:not([data-swipe])]:group-data-[position=bottom-left]:data-[animation=entering]:animate-slide-in-bottom',
    '[&:not([data-swipe])]:group-data-[position=bottom-left]:data-[animation=exiting]:animate-[fadeOut,_slideOutBottom]',
    '[&:not([data-swipe])]:group-data-[position=bottom-right]:data-[animation=entering]:animate-slide-in-bottom',
    '[&:not([data-swipe])]:group-data-[position=bottom-right]:data-[animation=exiting]:animate-[fadeOut,_slideOutBottom]',
    // Parent position top|top-left|top-right
    '[&:not([data-swipe])]:group-data-[position=top]:data-[animation=entering]:animate-slide-in-top',
    '[&:not([data-swipe])]:group-data-[position=top]:data-[animation=exiting]:animate-[fadeOut,_slideOutTop]',
    '[&:not([data-swipe])]:group-data-[position=top-left]:data-[animation=entering]:animate-slide-in-top',
    '[&:not([data-swipe])]:group-data-[position=top-left]:data-[animation=exiting]:animate-[fadeOut,_slideOutTop]',
    '[&:not([data-swipe])]:group-data-[position=top-right]:data-[animation=entering]:animate-slide-in-top',
    '[&:not([data-swipe])]:group-data-[position=top-right]:data-[animation=exiting]:animate-[fadeOut,_slideOutTop]',
    /**
     * Swipe
     */
    'data-[swipe=move]:data-[swipe-direction=right]:translate-x-[--swipe-position-x]',
    'data-[swipe=move]:data-[swipe-direction=left]:translate-x-[--swipe-position-x]',
    'data-[swipe=cancel]:translate-x-none',
    'data-[swipe=end]:data-[swipe-direction=right]:animate-swipe-out-right',
    'data-[swipe=end]:data-[swipe-direction=left]:animate-swipe-out-left',
  ],
  {
    variants: {
      /**
       * Set different look and feel
       * @default 'filled'
       */
      design: {
        filled: '',
        tinted: '',
      },
      /**
       * Set color intent
       * @default 'neutral'
       */
      intent: {
        success: '',
        alert: '',
        error: '',
        info: '',
        neutral: '',
        main: '',
        basic: '',
        support: '',
        accent: '',
        inverse: '',
      },
      /**
       * Force action button displaying on a new line
       * @default false
       */
      actionOnNewline: {
        true: [
          'grid-rows-[52px_1fr_52px]',
          'grid-cols-[min-content_1fr_min-content]',
          "[grid-template-areas:'icon_message_close'_'._message_.'_'action_action_action']",
        ],
        false: [
          'grid-rows-[52px_1fr]',
          'grid-cols-[min-content_1fr_min-content_min-content]',
          "[grid-template-areas:'icon_message_action_close'_'._message_._.']",
        ],
      },
    },
    compoundVariants: [...filledVariants, ...tintedVariants],
    defaultVariants: {
      design: 'filled',
      intent: 'neutral',
      actionOnNewline: false,
    },
  }
)

export type SnackbarItemVariantProps = VariantProps<typeof snackbarItemVariant>
