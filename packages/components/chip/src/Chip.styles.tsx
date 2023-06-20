import { makeVariants, tw } from '@spark-ui/internal-utils'
import { cva, type VariantProps } from 'class-variance-authority'

import { dashedVariants, filledVariants, outlinedVariants, tintedVariants } from './variants'

export const chipStyles = cva(
  [
    'gap-md text-body-1 h-sz-32 font-regular box-border inline-block rounded-md',
    'focus-visible:ring-outline-high ring-inset focus-visible:outline-none focus-visible:ring-2',
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
  ['gap-sm inline-flex h-full items-center justify-center whitespace-nowrap'],
  {
    variants: {
      isBordered: {
        no: ['max-w-sz-240'],
        yes: ['max-w-[238px]'],
      },
      hasCloseIcon: {
        yes: [],
        no: [],
      },
    },
    defaultVariants: {
      isBordered: 'no',
      hasCloseIcon: 'no',
    },
    compoundVariants: [
      {
        hasCloseIcon: 'no',
        isBordered: 'no',
        class: tw(['px-md']),
      },
      {
        hasCloseIcon: 'no',
        isBordered: 'yes',
        class: tw(['px-[7px]']),
      },
      {
        hasCloseIcon: 'yes',
        isBordered: 'no',
        class: tw(['pl-md']),
      },
      {
        hasCloseIcon: 'yes',
        isBordered: 'yes',
        class: tw(['pl-[7px]']),
      },
    ],
  }
)

export const chipContentTextStyles = cva([
  'gap-sm flex flex-nowrap items-center overflow-hidden text-ellipsis',
])

export const chipCloseStyles = cva(
  ['flex h-full items-center justify-center', 'focus-visible:outline-none'],
  {
    variants: {
      cursor: {
        pointer: ['cursor-pointer'],
        disabled: ['cursor-not-allowed'],
      },
      isBordered: {
        no: ['pr-md'],
        yes: ['pr-[7px]'],
      },
    },
    defaultVariants: {
      isBordered: 'no',
      cursor: 'pointer',
    },
  }
)

export const chipIconStyles = cva(
  [
    'rounded-full',
    'focus-visible:ring-outline-high ring-inset focus-visible:outline-none focus-visible:ring-2',
  ],
  {
    variants: {
      cursor: {
        pointer: ['cursor-pointer'],
        disabled: ['cursor-not-allowed'],
      },
    },
    defaultVariants: {
      cursor: 'pointer',
    },
  }
)

export type ChipStylesProps = VariantProps<typeof chipStyles>
