import { cva } from 'class-variance-authority'

export const closeButtonStyles = cva(
  ['flex h-full items-center justify-center focus-visible:outline-none'],
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

export const closeButtonIconStyles = cva(
  [
    'inline-flex rounded-full',
    'ring-inset focus-visible:opacity-dim-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-high',
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
