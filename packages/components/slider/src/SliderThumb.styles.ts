import { cva, type VariantProps } from 'class-variance-authority'

export const thumbVariants = cva(
  [
    'block h-sz-24 w-sz-24 rounded-full cursor-pointer',
    'hover:ring-4 u-shadow-border-transition',
    'outline-none',
    'focus-visible:u-ring',
    'spark-disabled:hover:ring-0 spark-disabled:cursor-not-allowed',
  ],
  {
    variants: {
      intent: {
        main: ['bg-main hover:ring-main-container'],
        support: ['bg-support hover:ring-support-container'],
        accent: ['bg-accent hover:ring-accent-container'],
        basic: ['bg-basic hover:ring-basic-container'],
        info: ['bg-info hover:ring-info-container'],
        neutral: ['bg-neutral hover:ring-neutral-container'],
        success: ['bg-success hover:ring-success-container'],
        alert: ['bg-alert hover:ring-alert-container'],
        error: ['bg-error hover:ring-error-container'],
      },
    },
    defaultVariants: {
      intent: 'basic',
    },
  }
)

export type SliderThumbVariantsProps = VariantProps<typeof thumbVariants>
