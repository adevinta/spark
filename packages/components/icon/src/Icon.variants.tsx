import { makeVariants } from '@spark-ui/internal-utils'
import { cva, VariantProps } from 'class-variance-authority'

export const iconVariants = cva(['fill-current'], {
  variants: {
    intent: makeVariants<
      'intent',
      ['current', 'primary', 'secondary', 'success', 'alert', 'error', 'info', 'neutral']
    >({
      current: ['text-current'],
      primary: ['text-primary'],
      secondary: ['text-secondary'],
      success: ['text-success'],
      alert: ['text-alert'],
      error: ['text-error'],
      info: ['text-info'],
      neutral: ['text-neutral'],
    }),
    size: makeVariants<'size', ['current', 'sm', 'md', 'lg']>({
      current: ['w-[1em]', 'h-[1em]'],
      sm: ['w-sz-16', 'h-sz-16'],
      md: ['w-sz-24', 'h-sz-24'],
      lg: ['w-sz-32', 'h-sz-32'],
    }),
  },
})

export type IconVariantsProps = VariantProps<typeof iconVariants>
