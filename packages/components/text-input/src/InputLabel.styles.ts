import { cva, VariantProps } from 'class-variance-authority'

const defaultInputVariants = {
  disabled: false,
}

export const labelStyles = cva(['flex', 'items-center', 'gap-md', 'text-body-1'], {
  variants: {
    disabled: {
      true: ['text-neutral/dim-2', 'cursor-not-allowed'],
      false: ['cursor-pointer'],
    },
  },
  defaultVariants: defaultInputVariants,
})

export type LabelStylesProps = VariantProps<typeof labelStyles>
