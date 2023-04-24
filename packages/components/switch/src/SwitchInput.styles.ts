import { makeVariants, tw } from '@spark-ui/internal-utils'
import { cva, VariantProps } from 'class-variance-authority'

export const styles = cva(
  tw([
    'group relative inline-flex flex-shrink-0 items-center self-baseline',
    'cursor-pointer',
    'rounded-full border-transparent',
    'hover:ring-4',
    'transition-colors duration-200 ease-in-out',
    'spark-disabled:opacity-dim-3 disabled:hover:ring-transparent spark-disabled:cursor-not-allowed',
    'focus-visible:outline-none focus-visible:ring focus-visible:ring-outline-high',
    'spark-state-unchecked:bg-on-surface/dim-4',
  ]),
  {
    variants: {
      size: makeVariants<'size', ['sm', 'md']>({
        sm: tw(['h-sz-24', 'w-sz-40', 'border-md']),
        md: tw(['h-sz-32', 'w-sz-56', 'border-[4px]']),
      }),
      intent: makeVariants<
        'intent',
        ['primary', 'secondary', 'success', 'alert', 'error', 'info', 'neutral']
      >({
        primary: ['spark-state-checked:bg-primary', 'hover:ring-primary-container', 'text-primary'],
        secondary: [
          'spark-state-checked:bg-secondary',
          'hover:ring-secondary-container',
          'text-secondary',
        ],
        success: ['spark-state-checked:bg-success', 'hover:ring-success-container', 'text-success'],
        alert: ['spark-state-checked:bg-alert', 'hover:ring-alert-container', 'text-alert'],
        error: ['spark-state-checked:bg-error', 'hover:ring-error-container', 'text-error'],
        info: ['spark-state-checked:bg-info', 'hover:ring-info-container', 'text-info'],
        neutral: ['spark-state-checked:bg-neutral', 'hover:ring-neutral-container', 'text-neutral'],
      }),
    },
    defaultVariants: {
      intent: 'primary',
      size: 'sm',
    },
  }
)

export type StylesProps = VariantProps<typeof styles>

export const thumbStyles = cva(
  [
    'absolute flex items-center justify-center',
    'bg-surface',
    'group-spark-state-checked:left-full group-spark-state-checked:-translate-x-full',
    'group-spark-state-unchecked:left-none group-spark-state-unchecked:translate-x-none',
    'pointer-events-none',
    'rounded-full',
    'ring-0',
    'transition-all duration-200 ease-in-out',
  ],
  {
    variants: {
      size: makeVariants<'size', ['sm', 'md']>({
        sm: ['h-sz-20', 'w-sz-20'],
        md: ['h-sz-24', 'w-sz-24'],
      }),
      checked: {
        false: 'text-on-surface/dim-4',
      },
    },
    defaultVariants: {
      size: 'sm',
      checked: false,
    },
  }
)

export const thumbCheckSVGStyles = cva(['transition-opacity duration-200'], {
  variants: {
    size: makeVariants<'size', ['sm', 'md']>({
      sm: ['h-sz-10 w-sz-10'],
      md: ['h-sz-12 w-sz-12'],
    }),
  },
  defaultVariants: {
    size: 'sm',
  },
})
