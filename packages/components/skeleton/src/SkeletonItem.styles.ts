import { cva } from 'class-variance-authority'

export const skeletonCircleStyles = cva(
  ['inline-flex flex-none', 'rounded-full', 'overflow-hidden'],
  {
    variants: {
      isLoading: {
        true: ['bg-neutral/dim-4', 'min-h-lg min-w-lg'],
        false: [],
      },
    },
    defaultVariants: {
      isLoading: true,
    },
  }
)

export const skeletonRectangleStyles = cva(['flex'], {
  variants: {
    isLoading: {
      true: ['bg-neutral/dim-4', 'min-h-lg min-w-lg', 'rounded-sm'],
      false: [],
    },
  },
  defaultVariants: {
    isLoading: true,
  },
})

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
