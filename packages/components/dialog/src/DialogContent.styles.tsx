import { cva, VariantProps } from 'class-variance-authority'

export const dialogContentStyles = cva([['fixed', 'z-modal', 'flex', 'flex-col'], ['bg-surface']], {
  variants: {
    size: {
      fullscreen: ['inset-none'],
      sm: ['max-w-sz-480'],
      md: ['max-w-sz-640'],
      lg: ['max-w-sz-768'],
    },
  },
  compoundVariants: [
    {
      size: ['sm', 'md', 'lg'],
      class: [
        ['top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2'],
        ['w-full', 'max-h-[90%]', 'min-h-sz-240'],
        ['shadow-md', 'rounded-lg'],
      ],
    },
  ],
  defaultVariants: {
    size: 'md',
  },
})

export type DialogContentStylesProps = VariantProps<typeof dialogContentStyles>
