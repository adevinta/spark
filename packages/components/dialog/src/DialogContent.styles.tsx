import { cva, VariantProps } from 'class-variance-authority'

export const dialogContentWrapperStyles = cva([
  'fixed inset-none z-modal flex items-center justify-center',
  'focus-visible:ring-2 focus-visible:ring-outline-high focus-visible:outline-none',
])

export const dialogContentStyles = cva(
  [
    ['relative', 'flex', 'flex-col'],
    ['bg-surface'],
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-high',
  ],
  {
    variants: {
      size: {
        fullscreen: ['w-full', 'h-full'],
        sm: ['max-w-sz-480'],
        md: ['max-w-sz-672'],
        lg: ['max-w-sz-864'],
      },
    },
    compoundVariants: [
      {
        size: ['sm', 'md', 'lg'],
        class: [
          ['w-full', 'max-h-[80%]'],
          ['shadow-md', 'rounded-lg'],
          ['data-[state=open]:animate-fade-in'],
          ['data-[state=closed]:animate-fade-out'],
        ],
      },
    ],
    defaultVariants: {
      size: 'md',
    },
  }
)

export type DialogContentStylesProps = VariantProps<typeof dialogContentStyles>
