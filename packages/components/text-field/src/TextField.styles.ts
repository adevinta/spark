import { cva, VariantProps } from 'class-variance-authority'

export const textFieldStyles = cva([], {
  variants: {
    isGrouped: {
      true: [],
      false: ['relative'],
    },
  },
})

export type textFieldStylesProps = VariantProps<typeof textFieldStyles>
