import { cva, VariantProps } from 'class-variance-authority'

export const textFieldStyles = cva([], {
  variants: {
    isGrouped: {
      true: [],
      false: ['relative'],
    },
    isExpanded: {
      true: [],
      false: [],
    },
    isLeftAddonVisible: {
      true: [],
      false: [],
    },
  },
})

export type textFieldStylesProps = VariantProps<typeof textFieldStyles>
