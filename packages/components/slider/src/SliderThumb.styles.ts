import { cva, type VariantProps } from 'class-variance-authority'

export const thumbVariants = cva(
  [
    'block h-xl w-xl rounded-full cursor-pointer',
    'hover:ring-8 u-shadow-border-transition',
    'outline-none',
    'focus-visible:ring-8 focus-visible:ring-offset-2 focus-visible:ring-offset-outline-high',
    'spark-disabled:hover:ring-0 spark-disabled:cursor-not-allowed',
  ],
  {
    variants: {
      intent: {
        main: ['bg-main hover:ring-main/dim-5 focus-visible:ring-main/dim-5'],
        support: ['bg-support hover:ring-support/dim-5 focus-visible:ring-support/dim-5'],
        accent: ['bg-accent hover:ring-accent/dim-5 focus-visible:ring-accent/dim-5'],
        basic: ['bg-basic hover:ring-basic/dim-5 focus-visible:ring-basic/dim-5'],
        info: ['bg-info hover:ring-info/dim-5 focus-visible:ring-info/dim-5'],
        neutral: ['bg-neutral hover:ring-neutral/dim-5 focus-visible:ring-neutral/dim-5'],
        success: ['bg-success hover:ring-success/dim-5 focus-visible:ring-success/dim-5'],
        alert: ['bg-alert hover:ring-alert/dim-5 focus-visible:ring-alert/dim-5'],
        error: ['bg-error hover:ring-error/dim-5 focus-visible:ring-error/dim-5'],
      },
    },
    defaultVariants: {
      intent: 'basic',
    },
  }
)

export type SliderThumbVariantsProps = VariantProps<typeof thumbVariants>
