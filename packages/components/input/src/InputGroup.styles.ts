import { cva, VariantProps } from 'class-variance-authority'

export const inputGroupStyles = cva(['relative inline-flex w-full'], {
  variants: {
    disabled: {
      true: 'cursor-not-allowed opacity-dim-3',
    },
  },
})

export type InputGroupStylesProps = VariantProps<typeof inputGroupStyles>
