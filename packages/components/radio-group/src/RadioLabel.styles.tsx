import { cva, VariantProps } from 'class-variance-authority'

export const radioLabelStyles = cva('', {
  variants: {
    disabled: {
      true: ['text-neutral/dim-2', 'cursor-not-allowed'],
      false: ['cursor-pointer'],
    },
  },
  defaultVariants: {
    disabled: false,
  },
})

export type RadioLabelStylesProps = VariantProps<typeof radioLabelStyles>
