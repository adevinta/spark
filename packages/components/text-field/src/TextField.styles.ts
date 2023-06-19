import { cva, VariantProps } from 'class-variance-authority'

export const textFieldStyles = cva(['inline-flex'], {
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
