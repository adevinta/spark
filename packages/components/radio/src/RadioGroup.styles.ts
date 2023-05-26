import { cva, VariantProps } from 'class-variance-authority'

export const radioGroupStyles = cva(['gap-xl flex'], {
  variants: {
    orientation: {
      horizontal: 'flex-row',
      vertical: 'flex-col',
    },
  },
})

export type RadioGroupVariantsProps = VariantProps<typeof radioGroupStyles>
