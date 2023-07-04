import { cva, VariantProps } from 'class-variance-authority'

export const inputStyles = cva(
  [
    'border-sm',

    'peer',
    'box-border',
    'h-sz-48',
    'w-full',
    'outline-none',
    'appearance-none',
    'bg-surface',
    'text-on-surface',
    'text-body-1',
    'text-ellipsis',
    'cursor-auto',
    'caret-neutral',
    'autofill:shadow-surface',
    'autofill:shadow-[inset_0_0_0px_1000px]',
    'disabled:bg-on-surface/dim-5',
    'disabled:text-on-surface/dim-3',
    'disabled:cursor-not-allowed',
    'disabled:border-on-surface/dim-3',
  ],
  {
    variants: {
      intent: {
        neutral: [
          'border-outline',
          'ring-outline-high',
          'hover:border-outline-high',
          'focus:border-outline-high',
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
      },
      hasTrailingIcon: {
        true: ['pr-3xl'],
      },
    },
    defaultVariants: {
      intent: 'neutral',
    },
  }
)

export type InputStylesProps = VariantProps<typeof inputStyles>
