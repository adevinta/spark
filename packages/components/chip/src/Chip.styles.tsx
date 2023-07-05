import { makeVariants, tw } from '@spark-ui/internal-utils'
import { cva, type VariantProps } from 'class-variance-authority'

import { dashedVariants, filledVariants, outlinedVariants, tintedVariants } from './variants'

export const chipStyles = cva(
  [
    'box-border inline-block h-sz-32 gap-md rounded-md text-body-1 font-regular',
    'ring-inset focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-high',
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
        outlined: ['bg-transparent', 'ring-1', 'ring-current'],
        tinted: [],
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

export const chipContentStyles = cva(
  [
    'block h-full items-center justify-center gap-sm overflow-hidden text-ellipsis whitespace-nowrap',
  ],
  {
    variants: {
      isBordered: {
        false: ['max-w-sz-240'],
        true: ['max-w-[calc(var(--sz-240)-var(--border-width-sm))]'],
      },
      hasClearButton: {
        true: [],
        false: [],
      },
    },
    defaultVariants: {
      isBordered: false,
      hasClearButton: false,
    },
    compoundVariants: [
      {
        hasClearButton: false,
        isBordered: false,
        class: tw(['px-md']),
      },
      {
        hasClearButton: false,
        isBordered: true,
        class: tw(['px-[7px]']),
      },
      {
        hasClearButton: true,
        isBordered: false,
        class: tw(['pl-md']),
      },
      {
        hasClearButton: true,
        isBordered: true,
        class: tw(['pl-[7px]']),
      },
    ],
  }
)

// export const chipContentTextStyles = cva([
//   'flex flex-nowrap items-center gap-sm overflow-hidden text-ellipsis',
// ])

export type ChipStylesProps = VariantProps<typeof chipStyles>
