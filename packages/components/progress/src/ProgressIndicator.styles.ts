import { cva, VariantProps } from 'class-variance-authority'

export const progressIndicatorStyles = cva(
  ['h-full w-full', 'rounded-sm', 'transition-transform duration-400'],
  {
    variants: {
      intent: {
        basic: ['bg-basic'],
        main: ['bg-main'],
        support: ['bg-support'],
        accent: ['bg-accent'],
        success: ['bg-success'],
        alert: ['bg-alert'],
        danger: ['bg-error'],
        info: ['bg-info'],
        neutral: ['bg-neutral'],
      },
      isIndeterminate: {
        true: ['absolute', '-translate-x-1/2', 'animate-standalone-indeterminate-bar'],
        false: [],
      },
    },
  }
)

export type ProgressIndicatorStylesProps = VariantProps<typeof progressIndicatorStyles>
