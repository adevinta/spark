import { makeVariants } from '@spark-ui/internal-utils'
import { cva, VariantProps } from 'class-variance-authority'

const defaultVariants = {
  intent: 'primary',
  size: 'sm',
} as const

export const radioInputVariants = cva(
  [
    'rounded-full',
    'border-md border-outline',
    'outline-none',
    'hover:ring-4',
    'focus-visible:ring-on-surface focus-visible:ring-2',
    'disabled:border-outline/dim-2 disabled:cursor-not-allowed disabled:hover:ring-transparent',
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
        primary: ['spark-state-checked:border-primary', 'hover:ring-primary-container'],
        secondary: ['spark-state-checked:border-secondary', 'hover:ring-secondary-container'],
        success: ['spark-state-checked:border-success', 'hover:ring-success-container'],
        alert: ['spark-state-checked:border-alert', 'hover:ring-alert-container'],
        error: ['spark-state-checked:border-error', 'hover:ring-error-container'],
        info: ['spark-state-checked:border-info', 'hover:ring-info-container'],
        neutral: ['spark-state-checked:border-neutral', 'hover:ring-neutral-container'],
      }),
    },
    defaultVariants,
  }
)

export type RadioInputVariantsProps = VariantProps<typeof radioInputVariants>
