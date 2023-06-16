import { cva, VariantProps } from 'class-variance-authority'

export const labelStyles = cva(['text-body-1'], {
  variants: {
    intent: {
      neutral: [],
      success: ['text-success'],
      error: ['text-error'],
      alert: ['text-alert'],
    },
  },
})

export type LabelStylesProps = VariantProps<typeof labelStyles>
