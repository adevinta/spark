import { cva, VariantProps } from 'class-variance-authority'

export const checkboxGroupStyles = cva(['flex'], {
  variants: {
    orientation: {
      vertical: ['flex-col', 'gap-lg'],
      horizontal: ['gap-xl'],
    },
  },
})

export type CheckboxGroupStylesProps = VariantProps<typeof checkboxGroupStyles>
