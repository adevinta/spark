import { makeVariants } from '@spark-ui/internal-utils'
import { cva, VariantProps } from 'class-variance-authority'

export const iconVariants = cva(['fill-current'], {
  variants: {
    size: makeVariants<'size'>({
      sm: ['w-sz-16', 'h-sz-16'],
      md: ['w-sz-24', 'h-sz-24'],
      lg: ['w-sz-32', 'h-sz-32'],
    }),
  },
})

export type IconVariantsProps = VariantProps<typeof iconVariants>
