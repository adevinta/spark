import { cva, VariantProps } from 'class-variance-authority'

const defaultVariants = {
  intent: 'primary',
} as const

export const styles = cva(
  [
    'peer h-[20px] w-[20px] rounded-sm border-md border-outline bg-transparent items-center justify-center',
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
        primary: ['border-primary', 'radix-state-checked:bg-primary'],
        secondary: ['border-secondary', 'radix-state-checked:bg-secondary'],
        success: ['border-success', 'radix-state-checked:bg-success'],
        alert: ['border-alert', 'radix-state-checked:bg-alert'],
        error: ['border-error', 'radix-state-checked:bg-error'],
        info: ['border-info', 'radix-state-checked:bg-info'],
        neutral: ['border-neutral', 'radix-state-checked:bg-neutral'],
      },
    },
    defaultVariants,
  }
)

export type StylesProps = VariantProps<typeof styles>
