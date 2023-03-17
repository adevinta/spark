import { cva, VariantProps } from 'class-variance-authority'

const defaultVariants = {
  intent: 'primary',
  size: 'small',
} as const

export const radioVariants = cva(
  [
    'block',
    'rounded-full',
    'border-md border-outline',
    'outline-transparent',
    'hover:outline hover:outline-4',
    'focus-visible:outline focus-visible:outline-1 focus-visible:outline-on-surface',
    'disabled:border-outline/dim-2 disabled:hover:outline-none disabled:cursor-not-allowed',
    '[transition:outline-color_0.1s_ease-in,_border-color_0.3s_ease-in]',
  ],
  {
    variants: {
      size: {
        small: ['w-sz-20', 'h-sz-20'],
        medium: ['w-sz-28', 'h-sz-28'],
      },
      intent: {
        primary: ['spark-state-checked:border-primary', 'hover:outline-primary-container'],
        secondary: ['spark-state-checked:border-secondary', 'hover:outline-secondary-container'],
        success: ['spark-state-checked:border-success', 'hover:outline-success-container'],
        alert: ['spark-state-checked:border-alert', 'hover:outline-alert-container'],
        error: ['spark-state-checked:border-error', 'hover:outline-error-container'],
        info: ['spark-state-checked:border-info', 'hover:outline-info-container'],
        neutral: ['spark-state-checked:border-neutral', 'hover:outline-neutral-container'],
      },
    },
    defaultVariants,
  }
)

export type RadioVariantsProps = VariantProps<typeof radioVariants>
