import { cva, VariantProps } from 'class-variance-authority'

export const iconVariants = cva(['fill-current'], {
  variants: {
    size: {
      small: ['w-sz-20', 'h-sz-20'],
      medium: ['w-sz-28', 'h-sz-28'],
    },
  },
})

export type IconVariantsProps = VariantProps<typeof iconVariants>
