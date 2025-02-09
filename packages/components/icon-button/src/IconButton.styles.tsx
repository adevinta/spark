import { makeVariants } from '@spark-ui/internal-utils'
import { cva, VariantProps } from 'class-variance-authority'

export const iconButtonStyles = cva(['px-0'], {
  variants: {
    /**
     * Sets the size of the icon.
     */
    size: makeVariants<'size', ['sm', 'md', 'lg']>({
      sm: ['text-body-1'],
      md: ['text-body-1'],
      lg: ['text-display-3'],
    }),
  },
})

export type IconButtonStylesProps = VariantProps<typeof iconButtonStyles>
