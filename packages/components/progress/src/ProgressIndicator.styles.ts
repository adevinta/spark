import { cva, VariantProps } from 'class-variance-authority'

export const progressIndicatorStyles = cva(
  ['h-full w-full', 'bg-basic', 'rounded-sm', 'transition-transform duration-400'],
  {
    variants: {
      isIndeterminate: {
        true: ['absolute', '-translate-x-1/2', 'animate-standalone-indeterminate-bar'],
        false: [],
      },
    },
  },
)

export type ProgressIndicatorStylesProps = VariantProps<typeof progressIndicatorStyles>
