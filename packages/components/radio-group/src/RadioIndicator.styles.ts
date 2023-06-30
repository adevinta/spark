import { makeVariants } from '@spark-ui/internal-utils'
import { cva, VariantProps } from 'class-variance-authority'

export const radioIndicatorStyles = cva(
  [
    'relative block',
    'h-4/6 w-4/6',
    'after:absolute',
    'after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2',
    'after:h-none',
    'after:w-none',
    'after:block',
    'after:rounded-[50%]',
    "after:content-['']",
    'after:transition-all',
    'after:spark-state-checked:h-full after:spark-state-checked:w-full',
  ],
  {
    variants: {
      intent: makeVariants<
        'intent',
        ['primary', 'secondary', 'success', 'alert', 'error', 'info', 'neutral']
      >({
        primary: ['after:bg-primary'],
        secondary: ['after:bg-secondary'],
        neutral: ['after:bg-neutral'],
        success: ['after:bg-success'],
        alert: ['after:bg-alert'],
        error: ['after:bg-error'],
        info: ['after:bg-info'],
      }),
    },
    defaultVariants: {
      intent: 'primary',
    },
  }
)

export type RadioIndicatorStylesProps = VariantProps<typeof radioIndicatorStyles>
