import { cva, VariantProps } from 'class-variance-authority'

export const inputStyles = cva([], {
  variants: {
    status: {
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
  compoundVariants: [
    {
      status: 'neutral',
      isGrouped: false,
      class: [
        'border-outline',
        'ring-outline-high',
        'hover:border-outline-high',
        'focus:border-outline-high',
      ],
    },
    {
      status: 'success',
      isGrouped: false,
      class: ['border-success', 'ring-success'],
    },
    {
      status: 'alert',
      isGrouped: false,
      class: ['border-alert', 'ring-alert'],
    },
    {
      status: 'error',
      isGrouped: false,
      class: ['border-error', 'ring-error'],
    },
  ],
})

export type InputStylesProps = VariantProps<typeof inputStyles>
