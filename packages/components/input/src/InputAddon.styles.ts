import { cva, VariantProps } from 'class-variance-authority'

export const inputAddonStyles = cva(['flex items-center', 'border-sm border-outline'], {
  variants: {
    isDisabled: {
      true: ['opacity-dim-3', 'cursor-not-allowed'],
      false: ['bg-surface', 'text-on-surface'],
    },
  },
})

export type InputAddonStylesProps = VariantProps<typeof inputAddonStyles>
