import { cva, VariantProps } from 'class-variance-authority'

export const inputStyles = cva([], {
  variants: {
    intent: {
      neutral: [],
      success: [],
      alert: [],
      error: [],
    },
    isGrouped: {
      true: [],
      false: ['border-sm', 'focus:ring-1'],
    },
  },
  defaultVariants: {
    intent: 'neutral',
  },
  compoundVariants: [
    {
      intent: 'neutral',
      isGrouped: false,
      class: [
        'border-outline',
        'ring-outline-high',
        'hover:border-outline-high',
        'focus:border-outline-high',
      ],
    },
    {
      intent: 'success',
      isGrouped: false,
      class: ['border-success', 'ring-success'],
    },
    {
      intent: 'alert',
      isGrouped: false,
      class: ['border-alert', 'ring-alert'],
    },
    {
      intent: 'error',
      isGrouped: false,
      class: ['border-error', 'ring-error'],
    },
  ],
})

export type InputStylesProps = VariantProps<typeof inputStyles>
