import { cva, VariantProps } from 'class-variance-authority'

export const radioGroupStyles = cva(['flex', 'gap-lg'], {
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
  },
})

export type RadioGroupVariantsProps = VariantProps<typeof radioGroupStyles>
