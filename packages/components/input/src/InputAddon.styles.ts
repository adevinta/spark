import { cva, VariantProps } from 'class-variance-authority'

export const inputAddonStyles = cva(['flex', 'items-center'], {
  variants: {
    isDisabled: {
      true: ['bg-on-surface/dim-5', 'text-on-surface/dim-3', 'cursor-not-allowed'],
      false: ['bg-surface', 'text-on-surface'],
    },
  },
})

export type InputAddonStylesProps = VariantProps<typeof inputAddonStyles>
