import { cva, VariantProps } from 'class-variance-authority'

export const inputContainerStyles = cva(
  [
    'border-sm',
    'absolute',
    'top-none',
    'left-none',
    'h-full',
    'w-full',
    'pointer-events-none',
    'rounded-lg',
    'peer-focus:border-md',
  ],
  {
    variants: {
      intent: {
        neutral: ['border-outline', 'peer-focus:border-outline-high'],
        success: ['border-success'],
        alert: ['border-alert'],
        error: ['border-error'],
      },
      isDisabled: {
        true: [],
        false: [],
      },
    },
    compoundVariants: [
      {
        intent: 'neutral',
        isDisabled: false,
        class: 'peer-hover:border-outline-high',
      },
    ],
  }
)

export type InputContainerStylesProps = VariantProps<typeof inputContainerStyles>
