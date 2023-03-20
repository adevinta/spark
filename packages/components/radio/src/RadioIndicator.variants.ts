/* eslint-disable tailwindcss/no-custom-classname */

import { cva, VariantProps } from 'class-variance-authority'

const defaultVariants = {
  intent: 'primary',
  size: 'small',
} as const

export const radioIndicatorVariants = cva(
  [
    'block',
    'relative',
    'h-full',
    'w-full',
    'after:absolute',
    'after:top-1/2 after:left-1/2 after:transform after:-translate-x-1/2 after:-translate-y-1/2',
    'after:h-none',
    'after:w-none',
    'after:block',
    'after:rounded-[50%]',
    "after:content-['']",
    'after:spark-state-checked:h-[62.5%]',
    'after:spark-state-checked:w-[62.5%]',
    'after:transition-all',
  ],
  {
    variants: {
      intent: {
        primary: ['after:bg-primary'],
        secondary: ['after:bg-secondary'],
        success: ['after:bg-success'],
        alert: ['after:bg-alert'],
        error: ['after:bg-error'],
        info: ['after:bg-info'],
        neutral: ['after:bg-neutral'],
      },
    },
    defaultVariants,
  }
)

export type RadioIndicatorVariantsProps = VariantProps<typeof radioIndicatorVariants>
