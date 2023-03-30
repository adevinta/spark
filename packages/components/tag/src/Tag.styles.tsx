import { cva, type VariantProps } from 'class-variance-authority'

import { defaultVariants, filledVariants, outlinedVariants, tintedVariants } from './variants'

export const tagStyles = cva(
  [
    'inline-flex items-center gap-md justify-center box-border whitespace-nowrap',
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
       * - `outlined`: Tag will be transparent with an outline.
       *
       * - `tinted`: Tag will be filled but using a lighter color scheme.
       *
       */
      design: {
        filled: [],
        outlined: ['bg-transparent', 'ring-2', 'ring-current'],
        tinted: [],
      },
      /**
       * Color scheme of the tag.
       */
      intent: {
        primary: [],
        secondary: [],
        success: [],
        alert: [],
        danger: [],
        info: [],
        neutral: [],
      },
      shape: {
        rounded: ['rounded-lg'],
        square: ['rounded-none'],
        pill: ['rounded-full'],
      },
    },
    compoundVariants: [...filledVariants, ...outlinedVariants, ...tintedVariants],
    defaultVariants,
  }
)

export type TagStylesProps = VariantProps<typeof tagStyles>
