import { cva, type VariantProps } from 'class-variance-authority'

export const formFieldStateMessageStyles = cva([], {
  variants: {
    state: {
      alert: ['text-alert'],
      error: ['text-error'],
      success: ['text-success'],
    },
  },
})

export type FormFieldStateMessageStylesProps = VariantProps<typeof formFieldStateMessageStyles>
