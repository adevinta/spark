import { cva, VariantProps } from 'class-variance-authority'

export const inputContainerStyles = cva(['rounded-lg', 'border-sm'], {
  variants: {
    intent: {
      neutral: ['border-outline', 'ring-outline-high'],
      success: ['border-success', 'ring-success'],
      alert: ['border-alert', 'ring-alert'],
      error: ['border-error', 'ring-error'],
    },
    isDisabled: {
      true: ['bg-on-surface/dim-5', 'text-on-surface/dim-3', 'cursor-not-allowed'],
      false: ['text-on-surface'],
    },
    isFocused: {
      true: ['ring-1'],
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
})

export type InputContainerStylesProps = VariantProps<typeof inputContainerStyles>
