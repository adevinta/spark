import { cva, VariantProps } from 'class-variance-authority'

export const inputContainerStyles = cva(['relative', 'w-full'], {
  variants: {
    intent: {
      neutral: ['border-outline'],
      success: ['border-success'],
      alert: ['border-alert'],
      error: ['border-error'],
    },
  },
  defaultVariants: {
    intent: 'neutral',
  },
})

export type InputContainerStylesProps = VariantProps<typeof inputContainerStyles>
