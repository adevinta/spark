import { cva, VariantProps } from 'class-variance-authority'

export const inputAddonStyles = cva(
  [
    'border-sm',
    'flex',
    'items-center',
    'rounded-lg',
    'bg-surface',
    'text-on-surface',
    'peer:disabled:bg-on-surface/dim-5',
    'peer:disabled:border-on-surface/dim-3',
    'peer:disabled:text-on-surface/dim-3',
    'peer:disabled:cursor-not-allowed',
    'peer:focus:ring-1',
  ],
  {
    variants: {
      intent: {
        neutral: [
          'border-outline',
          'ring-outline-high',
          'peer:hover:border-outline-high',
          'peer:focus:border-outline-high',
        ],
        success: ['border-success', 'ring-success'],
        alert: ['border-alert', 'ring-alert'],
        error: ['border-error', 'ring-error'],
      },
    },
  }
)

export type InputAddonStylesProps = VariantProps<typeof inputAddonStyles>
