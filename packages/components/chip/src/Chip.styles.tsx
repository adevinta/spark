import { makeVariants, tw } from '@spark-ui/internal-utils'
import { cva, type VariantProps } from 'class-variance-authority'

import { dashedVariants, filledVariants, outlinedVariants, tintedVariants } from './variants'

export const chipStyles = cva(
  [
    'gap-md text-body-1 h-sz-32 box-border inline-block rounded-md font-bold',
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
        outlined: ['bg-transparent', 'ring-2', 'ring-current'],
        tinted: [],
        dashed: [
          'bg-transparent border-md border-dashed shadow-none focus-visible:border-outline-high',
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
        no: ['max-w-[240px]'],
        yes: ['max-w-[236px]'],
      },
      mode: {
        default: [],
        icon: [],
      },
      hasCloseIcon: {
        yes: [],
        no: [],
      },
    },
    defaultVariants: {
      isBordered: 'no',
      mode: 'default',
      hasCloseIcon: 'no',
    },
    compoundVariants: [
      {
        mode: 'default',
        hasCloseIcon: 'no',
        isBordered: 'no',
        class: tw(['px-lg']),
      },
      {
        mode: 'default',
        hasCloseIcon: 'no',
        isBordered: 'yes',
        class: tw(['px-[14px]']),
      },
      {
        mode: 'icon',
        hasCloseIcon: 'no',
        isBordered: 'no',
        class: tw(['px-md']),
      },
      {
        mode: 'icon',
        hasCloseIcon: 'no',
        isBordered: 'yes',
        class: tw(['px-md']),
      },
      {
        mode: 'default',
        hasCloseIcon: 'yes',
        isBordered: 'no',
        class: tw(['pl-lg']),
      },
      {
        mode: 'default',
        hasCloseIcon: 'yes',
        isBordered: 'yes',
        class: tw(['pl-[14px]']),
      },
      {
        mode: 'icon',
        hasCloseIcon: 'yes',
        isBordered: 'no',
        class: tw(['pl-lg']),
      },
      {
        mode: 'icon',
        hasCloseIcon: 'yes',
        isBordered: 'yes',
        class: tw(['pl-lg']),
      },
    ],
  }
)

export const chipContentTextStyles = cva(['overflow-hidden text-ellipsis'])

export const chipCloseStyles = cva(
  ['flex h-full items-center justify-center', 'focus-visible:outline-none'],
  {
    variants: {
      cursor: {
        pointer: ['cursor-pointer'],
        disabled: ['cursor-not-allowed'],
      },
      isBordered: {
        no: ['pr-lg'],
        yes: ['pr-[14px]'],
      },
    },
    defaultVariants: {
      isBordered: 'no',
      cursor: 'pointer',
    },
  }
)

export const chipIconStyles = cva([
  'rounded-full',
  'focus-visible:ring-outline-high ring-inset focus-visible:outline-none focus-visible:ring-2',
])

export type ChipStylesProps = VariantProps<typeof chipStyles>
