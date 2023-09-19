import { cva, type VariantProps } from 'class-variance-authority'

export const thumbVariants = cva(
  [
    'block h-xl w-xl rounded-full cursor-pointer',
    'hover:ring-8 u-shadow-border-transition',
    'outline-none',
    'focus-visible:u-ring',
    'spark-disabled:hover:ring-0 spark-disabled:cursor-not-allowed',
  ],
  {
    variants: {
      intent: {
        main: ['bg-main hover:ring-main/dim-4'],
        support: ['bg-support hover:ring-support/dim-4'],
        accent: ['bg-accent hover:ring-accent/dim-4'],
        basic: ['bg-basic hover:ring-basic/dim-4'],
        info: ['bg-info hover:ring-info/dim-4'],
        neutral: ['bg-neutral hover:ring-neutral/dim-4'],
        success: ['bg-success hover:ring-success/dim-4'],
        alert: ['bg-alert hover:ring-alert/dim-4'],
        error: ['bg-error hover:ring-error/dim-4'],
      },
    },
    defaultVariants: {
      intent: 'basic',
    },
  }
)

export type SliderThumbVariantsProps = VariantProps<typeof thumbVariants>
