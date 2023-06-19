import { makeVariants } from '@spark-ui/internal-utils'
import { cva, VariantProps } from 'class-variance-authority'

const defaultVariants = {
  intent: 'primary',
  size: 'sm',
} as const

export const radioInputVariants = cva(
  [
    'rounded-full',
    'border-md',
    'outline-none',
    'hover:ring-4',
    'focus-visible:ring-2 focus-visible:ring-on-surface',
    'disabled:cursor-not-allowed disabled:border-outline/dim-2 disabled:hover:ring-transparent',
    'u-shadow-border-transition',
  ],
  {
    variants: {
      size: makeVariants<'size', ['sm', 'md']>({
        sm: ['w-sz-20', 'h-sz-20'],
        md: ['w-sz-28', 'h-sz-28'],
      }),
      intent: makeVariants<
        'intent',
        ['primary', 'secondary', 'success', 'alert', 'error', 'info', 'neutral']
      >({
        primary: [
          'border-outline',
          'spark-state-checked:border-primary',
          'hover:ring-primary-container',
        ],
        secondary: [
          'border-outline',
          'spark-state-checked:border-secondary',
          'hover:ring-secondary-container',
        ],
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
    defaultVariants,
  }
)

export type RadioInputVariantsProps = VariantProps<typeof radioInputVariants>
