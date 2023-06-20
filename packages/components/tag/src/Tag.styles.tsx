import { makeVariants } from '@spark-ui/internal-utils'
import { cva, type VariantProps } from 'class-variance-authority'

import { filledVariants, outlinedVariants, tintedVariants } from './variants'

export const tagStyles = cva(
  [
    'gap-sm box-border inline-flex items-center justify-center whitespace-nowrap',
    'text-caption font-bold',
    'h-sz-20 px-md',
    'ring-inset',
  ],
  {
    variants: {
      /**
       * Main style of the tag.
       *
       * - `filled`: Tag will be plain.
       *
       * - `outlined`: Tag will have a surface background with an colored outline/text.
       *
       * - `tinted`: Tag will be filled but using a lighter color scheme.
       *
       */
      design: makeVariants<'design', ['filled', 'outlined', 'tinted']>({
        filled: [],
        outlined: ['bg-surface', 'ring-1', 'ring-current'],
        tinted: [],
      }),
      /**
       * Color scheme of the tag.
       */
      intent: makeVariants<
        'intent',
        ['primary', 'secondary', 'success', 'alert', 'info', 'neutral', 'danger']
      >({
        primary: [],
        secondary: [],
        success: [],
        alert: [],
        danger: [],
        info: [],
        neutral: [],
      }),
      shape: makeVariants<'shape'>({
        rounded: ['rounded-lg'],
        square: ['rounded-none'],
        pill: ['rounded-full'],
      }),
    },
    compoundVariants: [...filledVariants, ...outlinedVariants, ...tintedVariants],
    defaultVariants: {
      design: 'filled',
      intent: 'primary',
      shape: 'rounded',
    },
  }
)

export type TagStylesProps = VariantProps<typeof tagStyles>
