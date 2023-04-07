/* eslint-disable tailwindcss/no-custom-classname */
import { cva, type VariantProps } from 'class-variance-authority'

export const tabsTriggerVariants = cva(
  [
    'px-lg',
    'border-b-sm border-outline',
    'relative',
    'after:content after:left-none after:right-none after:h-sz-2 after:absolute after:bottom-[-1px]',
    'outline-none',
    'focus-visible:ring-outline-high ring-inset focus-visible:border-none focus-visible:ring-2',
  ],
  {
    variants: {
      intent: {
        primary: ['spark-state-active:text-primary spark-state-active:after:bg-primary'],
        secondary: ['spark-state-active:text-secondary spark-state-active:after:bg-secondary'],
      },
      size: {
        xs: ['h-sz-32 text-caption'],
        sm: ['h-sz-36 text-body-2'],
        md: ['h-sz-40 text-body-1'],
      },
    },
    defaultVariants: {
      intent: 'primary',
      size: 'md',
    },
  }
)

export type TabsTriggerVariantsProps = VariantProps<typeof tabsTriggerVariants>
// {
//   intent?: 'primary'|'secondary'
//   size?: 'xs'|'sm'|'md'
// }
