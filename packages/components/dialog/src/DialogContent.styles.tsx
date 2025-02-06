import { cva, VariantProps } from 'class-variance-authority'

export const dialogContentStyles = cva(
  [
    'z-modal flex flex-col bg-surface group',
    'focus-visible:outline-hidden focus-visible:u-ring',
    '[&:not(:has(footer))]:pb-lg',
    '[&:not(:has(header))]:pt-lg',
  ],
  {
    variants: {
      size: {
        fullscreen: 'fixed size-full top-none  left-none',
        sm: 'max-w-sz-480',
        md: 'max-w-sz-672',
        lg: 'max-w-sz-864',
      },
      isNarrow: {
        true: [],
        false: [],
      },
    },
    compoundVariants: [
      {
        size: ['sm', 'md', 'lg'],
        class: [
          'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
          'max-h-[80%]',
          'shadow-md rounded-lg',
          'data-[state=open]:animate-fade-in',
          'data-[state=closed]:animate-fade-out',
        ],
      },
      {
        size: ['sm', 'md', 'lg'],
        isNarrow: false,
        class: ['w-full'],
      },
    ],
    defaultVariants: {
      size: 'md',
      isNarrow: false,
    },
  }
)

export type DialogContentStylesProps = VariantProps<typeof dialogContentStyles>
