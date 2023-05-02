import { makeVariants } from '@spark-ui/internal-utils'
import { cva, VariantProps } from 'class-variance-authority'

export const iconButtonVariants = cva(['px-none'], {
  variants: {
    size: makeVariants<'size', ['sm', 'md', 'lg']>({
      sm: ['text-caption'],
      md: ['text-body-1'],
      lg: ['text-display-3'],
    }),
  },
})

export type IconButtonVariantsProps = VariantProps<typeof iconButtonVariants>
