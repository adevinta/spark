import { cva, type VariantProps } from 'class-variance-authority'

export const thumbVariants = cva(
  [
    'block h-sz-24 w-sz-24 rounded-full cursor-pointer',
    'outline-none',
    'focus-visible:u-ring',
    'data-[interaction=pointerdown]:focus-visible:!ring-0',
    'spark-disabled:hover:ring-0 spark-disabled:hover:after:w-none spark-disabled:hover:after:h-none spark-disabled:cursor-not-allowed',
    'after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:z-hide',
    'after:w-none after:h-none after:rounded-full after:border-solid after:border-sm after:transition-all duration-300',
    'hover:after:w-sz-32 hover:after:h-sz-32',
  ],
  {
    variants: {
      intent: {
        main: ['bg-main', 'after:bg-main-container after:border-main'],
        support: ['bg-support', 'after:bg-support-container after:border-support'],
        accent: ['bg-accent', 'after:bg-accent-container after:border-accent'],
        basic: ['bg-basic', 'after:bg-basic-container after:border-basic'],
        info: ['bg-info', 'after:bg-info-container after:border-info'],
        neutral: ['bg-neutral', 'after:bg-neutral-container after:border-neutral'],
        success: ['bg-success', 'after:bg-success-container after:border-success'],
        alert: ['bg-alert', 'after:bg-alert-container after:border-alert'],
        error: ['bg-error', 'after:bg-error-container after:border-error'],
      },
    },
    defaultVariants: {
      intent: 'basic',
    },
  }
)

export type SliderThumbVariantsProps = VariantProps<typeof thumbVariants>
