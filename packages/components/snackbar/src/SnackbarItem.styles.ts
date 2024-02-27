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
    'data-[animation=entering]:animate-slide-in-bottom data-[animation=entering]:spark-anime-fill-forwards data-[animation=entering]:spark-anime-easing-decelerate-back',
    'data-[animation=exiting]:animate-slide-out-bottom data-[animation=exiting]:spark-anime-fill-forwards data-[animation=exiting]:spark-anime-easing-standard',
    'data-[animation=queued]:opacity-none data-[animation=exiting]:opacity-0 transition-opacity duration-400',
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
