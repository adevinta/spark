import { cva, VariantProps } from 'class-variance-authority'

export const inputGroupStyles = cva(['inline-flex', 'outline-2', 'rounded-lg', 'outline-primary'], {
  variants: {
    isFocused: {
      true: ['ring-1'],
      false: [],
    },
    intent: {
      neutral: ['ring-outline-high'],
      success: ['ring-success'],
      alert: ['ring-alert'],
      error: ['ring-error'],
    },
  },
})

export type InputGroupStylesProps = VariantProps<typeof inputGroupStyles>
