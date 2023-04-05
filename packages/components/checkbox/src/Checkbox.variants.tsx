import { cva, VariantProps } from 'class-variance-authority'

export const styles = cva(
  [
    'peer h-sz-20 w-sz-20 rounded-sm border-md bg-transparent items-center justify-center',
    'spark-disabled:opacity-dim-3 spark-disabled:cursor-not-allowed spark-disabled:hover:ring-0',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-high',
    'hover:outline-none hover:ring-2 hover:border-primary-container',
  ],
  {
    variants: {
      intent: {
        primary: [
          'spark-state-unchecked:border-outline',
          'spark-state-checked:border-primary spark-state-checked:bg-primary',
        ],
        success: [
          'spark-state-unchecked:border-success',
          'spark-state-checked:border-success spark-state-checked:bg-success',
        ],
        alert: [
          'spark-state-unchecked:border-alert',
          'spark-state-checked:border-alert spark-state-checked:bg-alert',
        ],
        error: [
          'spark-state-unchecked:border-error',
          'spark-state-checked:border-error spark-state-checked:bg-error',
        ],
      },
    },
    defaultVariants: {
      intent: 'primary',
    },
  }
)

export type StylesProps = VariantProps<typeof styles>
