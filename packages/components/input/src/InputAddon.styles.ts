import { cva, VariantProps } from 'class-variance-authority'

export const inputAddonStyles = cva(['flex items-center', 'border-sm'], {
  variants: {
    intent: {
      neutral: 'border-outline',
      error: 'border-error',
      alert: 'border-alert',
      success: 'border-success',
    },
    isDisabled: {
      true: ['opacity-dim-3', 'cursor-not-allowed'],
      false: ['bg-surface', 'text-on-surface'],
    },
  },
  defaultVariants: {
    intent: 'neutral',
  },
})

export type InputAddonStylesProps = VariantProps<typeof inputAddonStyles>
