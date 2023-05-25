import { makeVariants } from '@spark-ui/internal-utils'
import { cva, type VariantProps } from 'class-variance-authority'

import { dashedVariants, filledVariants, outlinedVariants, tintedVariants } from './variants'

export const chipStyles = cva(
  [
    'gap-md box-border inline-flex items-center justify-center whitespace-nowrap',
    'px-lg text-body-1 h-sz-32 rounded-lg font-bold ring-inset',
  ],
  {
    variants: {
      /**
       * Main style of the chip.
       *
       * - `filled`: Chip will be plain.
       *
       * - `outlined`: Chip will be transparent with an outline.
       *
       * - `tinted`: Chip will be filled but using a lighter color scheme.
       *
       * - `dashed`: Chip will be transparent with an outline dashed.
       */
      design: makeVariants<'design', ['filled', 'outlined', 'tinted', 'dashed']>({
        filled: [],
        outlined: ['bg-transparent', 'ring-2', 'ring-current'],
        tinted: [],
        dashed: ['bg-transparent', 'outline-2', 'outline-dashed', 'outline-offset-[-2px]'],
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
      ...filledVariants,
      ...outlinedVariants,
      ...tintedVariants,
      ...dashedVariants,
    ],
    defaultVariants: {
      design: 'outlined',
      intent: 'primary',
    },
  }
)

export type ChipStylesProps = VariantProps<typeof chipStyles>
