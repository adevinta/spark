import { cva, type VariantProps } from 'class-variance-authority'

import { filledVariants, tintedVariants } from './snackbarVariants'

export const snackbarItemVariant = cva(
  ['flex items-center gap-md', 'px-md m-lg', 'rounded-md', 'shadow', 'max-w-[600px]'],
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
