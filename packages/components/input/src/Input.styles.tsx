import { cva, VariantProps } from 'class-variance-authority'

export const inputStyles = cva(
  [
    'border-sm',
    'peer',
    'box-border',
    'h-sz-44',
    'w-full',
    'outline-none',
    'appearance-none',
    'bg-surface',
    'text-on-surface',
    'text-body-1',
    'text-ellipsis',
    'caret-neutral',
    'focus:ring-1',
    'ring-inset',
    'autofill:shadow-surface',
    'autofill:shadow-[inset_0_0_0px_1000px]',
    'disabled:opacity-dim-3',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      intent: {
        neutral: [
          'border-outline',
          'ring-outline-high',
          'hover:border-outline-high',
          'focus:border-outline-high',
          'disabled:border-outline',
        ],
        success: ['border-success', 'ring-success'],
        alert: ['border-alert', 'ring-alert'],
        error: ['border-error', 'ring-error'],
      },
      hasLeadingAddon: {
        false: ['rounded-l-lg'],
      },
      hasTrailingAddon: {
        false: ['rounded-r-lg'],
      },
      hasLeadingIcon: {
        true: ['pl-3xl'],
        false: ['pl-lg'],
      },
      hasTrailingIcon: {
        true: ['pr-3xl'],
        false: ['pr-lg'],
      },
    },
    defaultVariants: {
      intent: 'neutral',
    },
  }
)

export type InputStylesProps = VariantProps<typeof inputStyles>
