import { makeVariants } from '@spark-ui/internal-utils'
import { cva, VariantProps } from 'class-variance-authority'

export const radioInputVariants = cva(
  [
    'flex shrink-0 items-center justify-center',
    'rounded-full',
    'border-md',
    'outline-none',
    'hover:ring-4',
    'focus-visible:u-ring',
    'disabled:cursor-not-allowed disabled:border-outline/dim-2 disabled:hover:ring-transparent',
    'u-shadow-border-transition',
    'h-sz-24 w-sz-24',
  ],
  {
    variants: {
      intent: makeVariants<
        'intent',
        ['main', 'support', 'accent', 'basic', 'success', 'alert', 'error', 'info', 'neutral']
      >({
        main: ['border-outline', 'spark-state-checked:border-main', 'hover:ring-main/dim-4'],
        support: [
          'border-outline',
          'spark-state-checked:border-support',
          'hover:ring-support/dim-4',
        ],
        accent: ['border-outline', 'spark-state-checked:border-accent', 'hover:ring-accent/dim-4'],
        basic: ['border-outline', 'spark-state-checked:border-basic', 'hover:ring-basic/dim-4'],
        neutral: [
          'border-outline',
          'spark-state-checked:border-neutral',
          'hover:ring-neutral/dim-4',
        ],
        info: ['border-outline', 'spark-state-checked:border-info', 'hover:ring-info/dim-4'],
        success: ['border-success', 'hover:ring-success/dim-4'],
        alert: ['border-alert', 'hover:ring-alert/dim-4'],
        error: ['border-error', 'hover:ring-error/dim-4'],
      }),
    },
    defaultVariants: {
      intent: 'basic',
    },
  }
)

export type RadioInputVariantsProps = VariantProps<typeof radioInputVariants>
