import { cva, VariantProps } from 'class-variance-authority'

export const radioVariants = cva(
  [
    'rounded-full',
    'border-md border-outline',
    'outline-none',
    'hover:ring-4',
    'focus-visible:ring-on-surface focus-visible:ring-2',
    'disabled:border-outline/dim-2 disabled:cursor-not-allowed disabled:hover:ring-transparent',
    '[transition:box-shadow_0.1s_ease-in,_border-color_0.3s_ease-in]',
  ],
  {
    variants: {
      size: {
        sm: ['w-sz-20', 'h-sz-20'],
        md: ['w-sz-28', 'h-sz-28'],
      },
      intent: {
        primary: ['spark-state-checked:border-primary', 'hover:ring-primary-container'],
        secondary: ['spark-state-checked:border-secondary', 'hover:ring-secondary-container'],
        success: ['spark-state-checked:border-success', 'hover:ring-success-container'],
        alert: ['spark-state-checked:border-alert', 'hover:ring-alert-container'],
        error: ['spark-state-checked:border-error', 'hover:ring-error-container'],
        info: ['spark-state-checked:border-info', 'hover:ring-info-container'],
        neutral: ['spark-state-checked:border-neutral', 'hover:ring-neutral-container'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'sm',
    },
  }
)

export type RadioVariantsProps = VariantProps<typeof radioVariants>
