import { cva } from 'class-variance-authority'

export const skeletonLineStyles = cva(['flex flex-col', 'w-full'], {
  variants: {
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
    },
    gap: {
      sm: 'gap-sm',
      md: 'gap-md',
      lg: 'gap-lg',
      xl: 'gap-xl',
      '2xl': 'gap-2xl',
      '3xl': 'gap-3xl',
    },
  },
  defaultVariants: {
    align: 'start',
  },
})
