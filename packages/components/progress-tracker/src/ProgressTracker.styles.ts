import { cva } from 'class-variance-authority'

export const progressListVariant = cva(['flex flex-nowrap'], {
  variants: {
    orientation: {
      horizontal: 'flex-row w-full',
      vertical: 'flex-col',
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
  },
})
