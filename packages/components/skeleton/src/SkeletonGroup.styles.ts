import { cva, VariantProps } from 'class-variance-authority'

export const skeletonGroupStyles = cva(['flex flex-nowrap flex-auto'], {
  variants: {
    gap: {
      sm: 'gap-sm',
      md: 'gap-md',
      lg: 'gap-lg',
      xl: 'gap-xl',
      '2xl': 'gap-2xl',
      '3xl': 'gap-3xl',
    },
    direction: {
      row: 'flex-row',
      column: 'flex-col',
    },
    alignment: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
    },
  },
  defaultVariants: {
    direction: 'row',
    alignment: 'start',
  },
})

export type SkeletonGroupStyleProps = ExcludeNull<VariantProps<typeof skeletonGroupStyles>>
