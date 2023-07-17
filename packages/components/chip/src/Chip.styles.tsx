import { makeVariants } from '@spark-ui/internal-utils'
import { cva, type VariantProps } from 'class-variance-authority'

import { dashedVariants, filledVariants, outlinedVariants, tintedVariants } from './variants'

export const chipStyles = cva(
  [
    'box-border flex h-sz-32 flex-nowrap items-center justify-center gap-md truncate rounded-md text-body-1 font-regular',
    'max-w-sz-240 ring-inset focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-high',
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
        filled: [''],
        outlined: ['bg-transparent ring-1 ring-current'],
        tinted: [''],
        dashed: [
          'bg-transparent border-sm border-dashed shadow-none focus-visible:border-outline-high',
        ],
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
      hasClearButton: {
        true: ['pl-md'],
        false: ['px-md'],
      },
      // 'pl-[calc(theme(spacing.md)-theme(borderWidth.sm))]'
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
