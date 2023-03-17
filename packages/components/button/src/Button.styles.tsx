import { cva, type VariantProps } from 'class-variance-authority'

import {
  contrastVariants,
  defaultVariants,
  filledVariants,
  ghostVariants,
  outlinedVariants,
  tintedVariants,
} from './variants'

export const buttonStyles = cva(
  [
    'flex items-center gap-md justify-center box-border',
    'text-body-1 font-bold',
    'ring-inset focus-visible:ring-2 focus-visible:ring-outline-high focus-visible:outline-none',
  ],
  {
    variants: {
      /**
       * Main style of the button.
       *
       * - `filled`: Button will be plain.
       *
       * - `outlined`: Button will be transparent with a border.
       *
       * - `tinted`: Button will be filled but using lighter color scheme.
       *
       * - `ghost`: Button will look like a link. No borders, plain text.
       *
       */
      design: {
        filled: [],
        outlined: ['bg-transparent', 'ring-2', 'ring-current'],
        tinted: [],
        ghost: [],
        contrast: ['bg-surface'],
      },
      /**
       * Color scheme of the button.
       */
      intent: {
        primary: [],
        secondary: [],
        success: [],
        alert: [],
        danger: [],
        neutral: [],
        surface: [],
      },
      size: {
        sm: ['py-sm px-lg'],
        md: ['py-md px-lg'],
        lg: ['p-lg'],
      },
      /**
       * Disable the button, preventing user interaction and adding opacity.
       */
      disabled: {
        true: ['cursor-not-allowed', 'opacity-dim-3'],
      },
      shape: {
        rounded: ['rounded-lg'],
        square: ['rounded-none'],
        pill: ['rounded-full'],
      },
    },
    compoundVariants: [
      ...filledVariants,
      ...outlinedVariants,
      ...tintedVariants,
      ...ghostVariants,
      ...contrastVariants,
    ],
    defaultVariants,
  }
)

export type ButtonStylesProps = VariantProps<typeof buttonStyles>
