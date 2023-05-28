import { cva, VariantProps } from 'class-variance-authority'

export const inputGroupStyles = cva(['relative', 'inline-flex', 'rounded-lg', 'outline-primary'], {
  variants: {
    intent: {
      neutral: ['ring-outline-high'],
      success: ['ring-success'],
      alert: ['ring-alert'],
      error: ['ring-error'],
    },
    isFocused: {
      true: ['ring-1'],
      false: [],
    },
  },
})

export type InputGroupStylesProps = VariantProps<typeof inputGroupStyles>
