import { makeVariants } from '@spark-ui/internal-utils'
import { cva, type VariantProps } from 'class-variance-authority'

import { dashedVariants, filledVariants, outlinedVariants, tintedVariants } from './variants'

export const chipStyles = cva(
  ['gap-md box-border', 'text-body-1 h-sz-32 inline-block rounded-md font-bold ring-inset'],
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

export const chipContentStyles = cva(
  ['gap-sm inline-flex h-full max-w-[240px] items-center justify-center whitespace-nowrap'],
  {
    variants: {
      mode: {
        default: 'px-lg',
        icon: 'px-md',
      },
    },
    defaultVariants: {
      mode: 'default',
    },
  }
)

export const chipContentTextStyles = cva(['overflow-hidden text-ellipsis'])

export const chipCloseStyles = cva(['w-xl h-xl flex items-center justify-center'], {
  variants: {
    cursor: {
      pointer: ['cursor-pointer'],
      disabled: ['cursor-not-allowed'],
    },
  },
  defaultVariants: {
    cursor: 'pointer',
  },
})

export type ChipStylesProps = VariantProps<typeof chipStyles>
