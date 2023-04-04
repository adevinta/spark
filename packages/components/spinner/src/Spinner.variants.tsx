import { cva, VariantProps } from 'class-variance-authority'

const defaultVariants = {
  intent: 'current',
  size: 'sm',
  isBackgroundVisible: false,
} as const

export const spinnerVariants = cva(
  ['inline-block', 'border-solid', 'rounded-full', 'border-md', 'animate-spin'],
  {
    variants: {
      size: {
        sm: ['w-sz-20', 'h-sz-20'],
        md: ['w-sz-28', 'h-sz-28'],
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
      isBackgroundVisible: {
        true: ['border-b-neutral-container', 'border-l-neutral-container'],
        false: ['border-b-transparent', 'border-l-transparent'],
      },
    },
    defaultVariants,
  }
)

export type SpinnerVariantsProps = VariantProps<typeof spinnerVariants>
