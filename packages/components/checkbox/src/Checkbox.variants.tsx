import { cva, VariantProps } from 'class-variance-authority'

const defaultVariants = {
  intent: 'primary',
} as const

export const styles = cva(
  [
    'peer h-sz-20 w-sz-20 rounded-sm border-md bg-transparent items-center justify-center',
    'radix-state-unchecked:border-outline',
    'radix-disabled:opacity-dim-3 radix-disabled:cursor-not-allowed radix-disabled:hover:ring-0',
    'radix-state-checked:bg-primary radix-state-checked:border-primary',
    'radix-state-indeterminate:bg-primary radix-state-indeterminate:border-primary',
    'focus:outline-none focus:ring-2 focus:ring focus:ring-offset-0 focus:ring-[#000000]',
    'hover:outline-none hover:ring-2 hover:ring hover:ring-offset-0',
  ],
  {
    variants: {
      intent: {
        primary: ['radix-state-unchecked:border-primary', 'radix-state-checked:bg-primary'],
        secondary: ['radix-state-unchecked:border-secondary', 'radix-state-checked:bg-secondary'],
        success: ['radix-state-unchecked:border-success', 'radix-state-checked:bg-success'],
        alert: ['radix-state-unchecked:border-alert', 'radix-state-checked:bg-alert'],
        error: ['radix-state-unchecked:border-error', 'radix-state-checked:bg-error'],
        info: ['radix-state-unchecked:border-info', 'radix-state-checked:bg-info'],
        neutral: ['radix-state-unchecked:border-neutral', 'radix-state-checked:bg-neutral'],
      },
    },
    defaultVariants,
  }
)

export type StylesProps = VariantProps<typeof styles>
