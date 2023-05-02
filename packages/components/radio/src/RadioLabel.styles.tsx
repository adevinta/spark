import { cva, VariantProps } from 'class-variance-authority'

const defaultVariants = {
  disabled: false,
}

export const radioLabelVariants = cva(['flex', 'items-center', 'gap-md', 'text-body-1'], {
  variants: {
    disabled: {
      true: ['text-neutral/dim-2', 'cursor-not-allowed'],
      false: ['cursor-pointer'],
    },
  },
  defaultVariants,
})

export type RadioLabelVariantsProps = VariantProps<typeof radioLabelVariants>
