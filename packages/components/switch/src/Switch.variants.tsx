import { tw } from '@spark-ui/internal-utils'
import { cva, VariantProps } from 'class-variance-authority'

const defaultVariants = {
  intent: 'primary',
  size: 'sm',
} as const

export const styles = cva(
  tw([
    'group relative inline-flex flex-shrink-0 items-center',
    'cursor-pointer',
    'rounded-full border-transparent',
    'transition-colors duration-200 ease-in-out',
    'spark-disabled:opacity-dim-3 spark-disabled:cursor-not-allowed',
    'focus-visible:outline-none focus-visible:ring focus-visible:ring-outline-high',
    'hover:ring-4',
    'spark-state-unchecked:bg-on-surface/dim-4',
  ]),
  {
    variants: {
      size: {
        sm: tw(['h-sz-24', 'w-sz-40', 'border-md']),
        md: tw(['h-sz-32', 'w-sz-56', 'border-[4px]']),
      },
      intent: {
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
      },
    },
    defaultVariants,
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
    'transform transition-all duration-200 ease-in-out',
  ],
  {
    variants: {
      size: {
        sm: ['h-sz-20', 'w-sz-20'],
        md: ['h-sz-24', 'w-sz-24'],
      },
    },
    defaultVariants,
  }
)

export const thumbCheckSVGStyles = cva(
  ['transition-opacity duration-200', 'group-spark-state-unchecked:opacity-0 '],
  {
    variants: {
      size: {
        sm: 'h-sz-10 w-sz-10',
        md: 'h-sz-12 w-sz-12',
      },
    },
    defaultVariants,
  }
)
