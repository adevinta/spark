import { makeVariants } from '@spark-ui/internal-utils'
import { cva, VariantProps } from 'class-variance-authority'

export const checkboxInputStyles = cva(
  [
    'size-sz-24 shrink-0 items-center justify-center rounded-sm border-md bg-transparent outline-none',
    'spark-disabled:cursor-not-allowed spark-disabled:opacity-dim-3 spark-disabled:hover:ring-0',
    'focus-visible:u-ring',
    'hover:ring-4',
    'u-shadow-border-transition',
  ],
  {
    variants: {
      /**
       * Color scheme of the checkbox.
       */
      intent: makeVariants<
        'intent',
        ['main', 'support', 'accent', 'basic', 'success', 'alert', 'error', 'info', 'neutral']
      >({
        main: [
          'text-on-main',
          'hover:ring-main-container',
          'spark-state-unchecked:border-outline',
          'spark-state-indeterminate:border-main spark-state-indeterminate:bg-main',
          'spark-state-checked:border-main spark-state-checked:bg-main',
        ],
        support: [
          'text-on-support',
          'hover:ring-support-container',
          'spark-state-unchecked:border-outline',
          'spark-state-indeterminate:border-support spark-state-indeterminate:bg-support',
          'spark-state-checked:border-support spark-state-checked:bg-support',
        ],
        accent: [
          'text-on-accent',
          'hover:ring-accent-container',
          'spark-state-unchecked:border-outline',
          'spark-state-indeterminate:border-accent spark-state-indeterminate:bg-accent',
          'spark-state-checked:border-accent spark-state-checked:bg-accent',
        ],
        basic: [
          'text-on-basic',
          'hover:ring-basic-container',
          'spark-state-unchecked:border-outline',
          'spark-state-indeterminate:border-basic spark-state-indeterminate:bg-basic',
          'spark-state-checked:border-basic spark-state-checked:bg-basic',
        ],
        success: [
          'text-on-success',
          'hover:ring-success-container',
          'spark-state-unchecked:border-outline',
          'spark-state-indeterminate:border-success spark-state-indeterminate:bg-success',
          'spark-state-checked:border-success spark-state-checked:bg-success',
        ],
        alert: [
          'text-on-alert',
          'hover:ring-alert-container',
          'spark-state-unchecked:border-outline',
          'spark-state-indeterminate:border-alert spark-state-indeterminate:bg-alert',
          'spark-state-checked:border-alert spark-state-checked:bg-alert',
        ],
        error: [
          'text-on-error',
          'hover:ring-error-container',
          'spark-state-unchecked:border-outline',
          'spark-state-indeterminate:border-error spark-state-indeterminate:bg-error',
          'spark-state-checked:border-error spark-state-checked:bg-error',
        ],
        info: [
          'text-on-info',
          'hover:ring-info-container',
          'spark-state-unchecked:border-outline',
          'spark-state-indeterminate:border-info spark-state-indeterminate:bg-info',
          'spark-state-checked:border-info spark-state-checked:bg-info',
        ],
        neutral: [
          'text-on-neutral',
          'hover:ring-neutral-container',
          'spark-state-unchecked:border-outline',
          'spark-state-indeterminate:border-neutral spark-state-indeterminate:bg-neutral',
          'spark-state-checked:border-neutral spark-state-checked:bg-neutral',
        ],
      }),
    },
    defaultVariants: {
      intent: 'basic',
    },
  }
)

export type CheckboxInputStylesProps = VariantProps<typeof checkboxInputStyles>
