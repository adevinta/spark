import { cva, VariantProps } from 'class-variance-authority'

const defaultVariants = {
  intent: 'current',
  size: 'small',
} as const

export const spinnerVariants = cva(
  [
    'inline-block',
    'border-solid',
    'rounded-full',
    'border-md',
    'border-b-neutral-container',
    'border-l-neutral-container',
    'animate-spin',
  ],
  {
    variants: {
      size: {
        small: ['w-sz-20', 'h-sz-20'],
        medium: ['w-sz-28', 'h-sz-28'],
      },
      intent: {
        current: ['border-current'],
        primary: ['border-primary'],
        secondary: ['border-secondary'],
        success: ['border-success'],
        alert: ['border-alert'],
        error: ['border-error'],
        info: ['border-info'],
        neutral: ['border-neutral'],
      },
    },
    defaultVariants,
  }
)

export type SpinnerVariantsProps = VariantProps<typeof spinnerVariants>
