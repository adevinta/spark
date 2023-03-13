import { cva, VariantProps } from 'class-variance-authority'

const defaultVariants = {
  intent: 'primary',
  size: 'small',
} as const

export const switchVariants = cva(
  [
    'group',
    'radix-state-checked:bg-primary',
    'radix-state-unchecked:bg-primary-container',
    'radix-disabled:opacity-50',
    'radix-disabled:cursor-not-allowed',
    'relative',
    'inline-flex',
    'flex-shrink-0',
    'cursor-pointer',
    'rounded-full',
    'border-md',
    'border-transparent',
    'transition-colors',
    'duration-200',
    'ease-in-out',
    'focus:outline-none',
    'focus-visible:ring',
    'focus-visible:ring-outline-high',
  ],
  {
    variants: {
      size: {
        small: ['h-[16px]', 'w-[36px]'],
        medium: ['h-[20px]', 'w-[34px]'],
        large: ['h-[28px]', 'w-[50px]'],
      },
    },
    defaultVariants,
  }
)

export type SwitchVariantsProps = VariantProps<typeof switchVariants>

export const switchThumbVariants = cva(
  [
    'absolute',
    'group-radix-state-checked:left-full',
    'group-radix-state-checked:-translate-x-full',
    'group-radix-state-unchecked:left-none',
    'group-radix-state-unchecked:translate-x-none',
    'pointer-events-none',
    'inline-block',
    'transform',
    'rounded-full',
    'bg-on-primary',
    'shadow-lg',
    'ring-0',
    'transition-all',
    'duration-200',
    'ease-in-out',
  ],
  {
    variants: {
      size: {
        small: ['h-[12px]', 'w-[12px]'],
        medium: ['h-[16px]', 'w-[16px]'],
        large: ['h-[24px]', 'w-[24px]'],
      },
    },
    defaultVariants,
  }
)
