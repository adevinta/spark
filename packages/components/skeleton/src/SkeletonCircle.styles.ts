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
