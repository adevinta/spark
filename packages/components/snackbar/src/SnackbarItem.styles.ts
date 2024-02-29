import { cva, type VariantProps } from 'class-variance-authority'

import { filledVariants, tintedVariants } from './snackbarVariants'

export const snackbarItemVariant = cva(
  [
    'inline-flex items-center gap-md',
    'px-md',
    'rounded-md shadow',
    'max-w-[600px]',
    'pointer-events-auto',
    // Animation and opacity
    'data-[animation=queued]:opacity-none data-[animation=exiting]:opacity-0 transition-opacity duration-400',
    'data-[animation=entering]:spark-anime-fill-forwards data-[animation=entering]:spark-anime-easing-decelerate-back',
    'data-[animation=exiting]:spark-anime-fill-forwards data-[animation=exiting]:spark-anime-easing-standard',
    // Parent position bottom|bottom-left|bottom-right
    'group-data-[position=bottom]:data-[animation=entering]:animate-slide-in-bottom',
    'group-data-[position=bottom]:data-[animation=exiting]:animate-slide-out-bottom',
    'group-data-[position=bottom-left]:data-[animation=entering]:animate-slide-in-bottom',
    'group-data-[position=bottom-left]:data-[animation=exiting]:animate-slide-out-bottom',
    'group-data-[position=bottom-right]:data-[animation=entering]:animate-slide-in-bottom',
    'group-data-[position=bottom-right]:data-[animation=exiting]:animate-slide-out-bottom',
    // Parent position top|top-left|top-right
    'group-data-[position=top]:data-[animation=entering]:animate-slide-in-top',
    'group-data-[position=top]:data-[animation=exiting]:animate-slide-out-top',
    'group-data-[position=top-left]:data-[animation=entering]:animate-slide-in-top',
    'group-data-[position=top-left]:data-[animation=exiting]:animate-slide-out-top',
    'group-data-[position=top-right]:data-[animation=entering]:animate-slide-in-top',
    'group-data-[position=top-right]:data-[animation=exiting]:animate-slide-out-top',
  ],
  {
    variants: {
      design: {
        filled: '',
        tinted: '',
      },
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
    },
    compoundVariants: [...filledVariants, ...tintedVariants],
    defaultVariants: {
      design: 'filled',
      intent: 'neutral',
    },
  }
)

export type SnackbarItemVariantProps = VariantProps<typeof snackbarItemVariant>
