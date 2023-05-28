import { cva, VariantProps } from 'class-variance-authority'

export const inputAddonStyles = cva(
  ['border-sm', 'flex', 'items-center', 'rounded-lg', 'text-body-1'],
  {
    variants: {
      intent: {
        neutral: ['border-outline'],
        success: ['border-success'],
        alert: ['border-alert'],
        error: ['border-error'],
      },
      isDisabled: {
        true: ['bg-on-surface/dim-5', 'text-on-surface/dim-3', 'cursor-not-allowed'],
        false: ['bg-surface', 'text-on-surface'],
      },
      isFocused: {
        true: [],
        false: [],
      },
      isHovered: {
        true: [],
        false: [],
      },
    },
    compoundVariants: [
      {
        intent: 'neutral',
        isHovered: true,
        isDisabled: false,
        class: 'border-outline-high',
      },
      {
        intent: 'neutral',
        isFocused: true,
        isDisabled: false,
        class: 'border-outline-high',
      },
    ],
  }
)

export type InputAddonStylesProps = VariantProps<typeof inputAddonStyles>
