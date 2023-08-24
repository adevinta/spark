import { cva, VariantProps } from 'class-variance-authority'

export const progressIndicatorStyles = cva(
  ['h-full w-full', 'bg-basic', 'transition-transform duration-400'],
  {
    variants: {
      isIndeterminate: {
        true: ['absolute', 'origin-left', 'animate-standalone-indeterminate-bar'],
        false: [],
      },
    },
  }
)

export type ProgressIndicatorStylesProps = VariantProps<typeof progressIndicatorStyles>
