import { cva } from 'class-variance-authority'

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
