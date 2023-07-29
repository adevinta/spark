import { makeVariants } from '@spark-ui/internal-utils'
import { cva, VariantProps } from 'class-variance-authority'

export const radioInputVariants = cva(
  [
    'flex shrink-0 items-center justify-center',
    'rounded-full',
    'border-md',
    'outline-none',
    'hover:ring-4',
    'focus-visible:ring-2 focus-visible:ring-on-surface',
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
        main: ['border-outline', 'spark-state-checked:border-main', 'hover:ring-main-container'],
        support: [
          'border-outline',
          'spark-state-checked:border-support',
          'hover:ring-support-container',
        ],
        accent: [
          'border-outline',
          'spark-state-checked:border-accent',
          'hover:ring-accent-container',
        ],
        basic: ['border-outline', 'spark-state-checked:border-basic', 'hover:ring-basic-container'],
        neutral: [
          'border-outline',
          'spark-state-checked:border-neutral',
          'hover:ring-neutral-container',
        ],
        info: ['border-outline', 'spark-state-checked:border-info', 'hover:ring-info-container'],
        success: ['border-success', 'hover:ring-success-container'],
        alert: ['border-alert', 'hover:ring-alert-container'],
        error: ['border-error', 'hover:ring-error-container'],
      }),
    },
    defaultVariants: {
      intent: 'basic',
    },
  }
)

export type RadioInputVariantsProps = VariantProps<typeof radioInputVariants>
