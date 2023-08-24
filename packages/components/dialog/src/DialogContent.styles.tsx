import { cva, VariantProps } from 'class-variance-authority'

export const dialogContentWrapperStyles = cva([
  'fixed inset-none z-modal flex items-center justify-center',
])

export const dialogContentStyles = cva([['relative', 'flex', 'flex-col'], ['bg-surface']], {
  variants: {
    size: {
      fullscreen: ['w-full', 'h-full'],
      sm: ['max-w-sz-480'],
      md: ['max-w-sz-640'],
      lg: ['max-w-sz-768'],
    },
  },
  compoundVariants: [
    {
      size: ['sm', 'md', 'lg'],
      class: [
        ['w-full', 'max-h-[90%]'],
        ['shadow-md', 'rounded-lg'],
        ['data-[state=open]:animate-fade-in'],
        ['data-[state=closed]:animate-fade-out'],
      ],
    },
  ],
  defaultVariants: {
    size: 'md',
  },
})

export type DialogContentStylesProps = VariantProps<typeof dialogContentStyles>
