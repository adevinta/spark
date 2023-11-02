import { cva, VariantProps } from 'class-variance-authority'

export const dialogContentStyles = cva(
  ['z-modal flex flex-col bg-surface', 'focus-visible:outline-none focus-visible:u-ring'],
  {
    variants: {
      size: {
        fullscreen: 'fixed w-full h-full  top-none left-none',
        sm: 'max-w-sz-480',
        md: 'max-w-sz-672',
        lg: 'max-w-sz-864',
      },
    },
    compoundVariants: [
      {
        size: ['sm', 'md', 'lg'],
        class: [
          'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2',
          'w-full max-h-[80%]',
          'shadow-md rounded-lg',
          'data-[state=open]:animate-fade-in',
          'data-[state=closed]:animate-fade-out',
        ],
      },
    ],
    defaultVariants: {
      size: 'md',
    },
  }
)

export type DialogContentStylesProps = VariantProps<typeof dialogContentStyles>
