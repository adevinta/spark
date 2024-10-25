import { cva, VariantProps } from 'class-variance-authority'

export const skeletonItemStyles = cva(['bg-neutral/dim-4', 'min-h-lg min-w-lg'], {
  variants: {
    shape: {
      line: ['flex', 'w-full [&:last-child:not(:first-child)]:w-5/6', 'rounded-lg'],
      rectangle: ['flex', 'rounded-sm'],
      circle: ['inline-flex flex-none', 'rounded-full'],
    },
  },
  defaultVariants: {
    shape: 'rectangle',
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

export type SkeletonItemStyleProps = ExcludeNull<VariantProps<typeof skeletonItemStyles>>
