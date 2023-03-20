import { cva, VariantProps } from 'class-variance-authority'

const defaultVariants = {
  intent: 'primary',
} as const

export const styles = cva(
  [
    'peer h-sz-20 w-sz-20 rounded-sm border-md bg-transparent items-center justify-center',
    'radix-disabled:opacity-dim-3 radix-disabled:cursor-not-allowed radix-disabled:hover:ring-0',
    'focus-visible:outline-none focus-visible:ring-2 focus:ring-outline-high',
    'hover:outline-none hover:ring-2 hover:border-primary-container',
  ],
  {
    variants: {
      intent: {
        primary: [
          'radix-state-unchecked:border-outline',
          'radix-state-checked:border-primary radix-state-checked:bg-primary',
        ],
        success: [
          'radix-state-unchecked:border-success',
          'radix-state-checked:border-success radix-state-checked:bg-success',
        ],
        alert: [
          'radix-state-unchecked:border-alert',
          'radix-state-checked:border-alert radix-state-checked:bg-alert',
        ],
        error: [
          'radix-state-unchecked:border-error',
          'radix-state-checked:border-error radix-state-checked:bg-error',
        ],
      },
    },
    defaultVariants,
  }
)

export type StylesProps = VariantProps<typeof styles>
