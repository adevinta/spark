import { makeVariants } from '@spark-ui/internal-utils'
import { cva, type VariantProps } from 'class-variance-authority'

import { outlinedVariants } from './variants'

export const chipStyles = cva(
  [
    'gap-md box-border inline-flex items-center justify-center whitespace-nowrap',
    'px-lg text-body-1 rounded-lg font-bold',
  ],
  {
    variants: {
      design: makeVariants<'design'>({
        filled: [],
        outlined: ['bg-transparent', 'ring-2', 'ring-current'],
        tinted: [],
        dashed: [],
      }),
      /**
       * Color scheme of the chip.
       */
      intent: makeVariants<
        'intent',
        ['primary', 'secondary', 'success', 'alert', 'danger', 'info', 'neutral', 'surface']
      >({
        primary: [],
        secondary: [],
        success: [],
        alert: [],
        danger: [],
        info: [],
        neutral: [],
        surface: [],
      }),

      /**
       * Disable the chip, preventing user interaction and adding opacity.
       */
      disabled: {
        true: ['cursor-not-allowed', 'opacity-dim-3'],
      },
    },
    compoundVariants: [
      // ...filledVariants,
      ...outlinedVariants,
      // ...tintedVariants,
      // ...dashedVariants
    ],
    defaultVariants: {
      design: 'outlined',
      intent: 'primary',
    },
  }
)

export type ChipStylesProps = VariantProps<typeof chipStyles>
