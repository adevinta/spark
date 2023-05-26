import { cva, VariantProps } from 'class-variance-authority'

export const checkboxGroupStyles = cva(['flex', 'gap-lg'], {
  variants: {
    orientation: {
      vertical: ['flex-col'],
      horizontal: [],
    },
  },
})

export type CheckboxGroupStylesProps = VariantProps<typeof checkboxGroupStyles>
