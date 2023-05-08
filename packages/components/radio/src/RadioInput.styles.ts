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
    'focus-visible:ring-on-surface focus-visible:ring-2',
    'disabled:cursor-not-allowed disabled:hover:ring-transparent',
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
          'disabled:border-outline/dim-2',
          'spark-state-checked:border-primary',
          'hover:ring-primary-container',
        ],
        secondary: [
          'border-outline',
          'disabled:border-outline/dim-2',
          'spark-state-checked:border-secondary',
          'hover:ring-secondary-container',
        ],
        success: [
          'border-success',
          'disabled:border-success/dim-2',
          'hover:ring-success-container',
        ],
        alert: ['border-alert', 'disabled:border-alert/dim-2', 'hover:ring-alert-container'],
        error: ['border-error', 'disabled:border-error/dim-2', 'hover:ring-error-container'],
        info: ['border-info', 'disabled:border-error/dim-2', 'hover:ring-info-container'],
        neutral: [
          'border-outline',
          'disabled:border-outline/dim-2',
          'spark-state-checked:border-neutral',
          'hover:ring-neutral-container',
        ],
      }),
    },
    defaultVariants,
  }
)

export type RadioInputVariantsProps = VariantProps<typeof radioInputVariants>
