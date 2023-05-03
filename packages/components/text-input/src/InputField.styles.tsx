import { makeVariants } from '@spark-ui/internal-utils'
import { cva, type VariantProps } from 'class-variance-authority'

export const inputFieldStyles = cva(
  [
    'inline-flex',
    'flex-row',
    'rounded-lg',
    'bg-transparent',
    'border-md',
    'border-current',
    'items-center',
    // 'overflow-hidden'
  ],
  {
    variants: {
      /**
       * Color scheme of the inputField.
       */
      intent: makeVariants<
        'intent',
        ['primary', 'secondary', 'success', 'alert', 'danger', 'info', 'neutral', 'surface']
      >({
        primary: ['text-primary'],
        secondary: ['text-secondary'],
        success: ['text-success'],
        alert: ['text-alert'],
        danger: ['text-error'],
        info: ['text-info'],
        neutral: ['text-neutral'],
        surface: ['text-surface'],
      }),
      disabled: {
        true: ['cursor-not-allowed'],
      },
    },
  }
)

export type InputFieldStylesProps = VariantProps<typeof inputFieldStyles>
