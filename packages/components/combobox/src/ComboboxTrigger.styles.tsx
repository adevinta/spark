import { cva } from 'class-variance-authority'

export const styles = cva(
  [
    'flex w-full items-start gap-md',
    'min-h-sz-44 p-md rounded-lg px-lg',
    // outline styles
    'ring-1 outline-none ring-inset focus-within:ring-2',
  ],
  {
    variants: {
      state: {
        undefined: 'ring-outline focus-within:ring-outline-high',
        error: 'ring-error',
        alert: 'ring-alert',
        success: 'ring-success',
      },
      disabled: {
        true: 'cursor-not-allowed border-outline bg-on-surface/dim-5 text-on-surface/dim-3',
      },
      readOnly: {
        true: 'cursor-default bg-on-surface/dim-5 text-on-surface',
      },
    },
    compoundVariants: [
      {
        disabled: false,
        state: undefined,
        class: 'hover:ring-outline-high',
      },
      {
        disabled: false,
        readOnly: false,
        class: 'bg-surface text-on-surface cursor-text',
      },
    ],
    defaultVariants: {
      state: undefined,
      disabled: false,
      readOnly: false,
    },
  }
)
