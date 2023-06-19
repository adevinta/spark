import { cva, VariantProps } from 'class-variance-authority'

export const textFieldStyles = cva(['inline-flex'], {
  variants: {
    isGrouped: {
      true: [],
      false: ['relative'],
    },
  },
})

export type textFieldStylesProps = VariantProps<typeof textFieldStyles>
