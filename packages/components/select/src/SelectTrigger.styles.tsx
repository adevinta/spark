import { cva } from 'class-variance-authority'

export const styles = cva(
  [
    'relative flex w-full items-center justify-between',
    'min-h-sz-44 rounded-lg bg-surface text-on-surface px-lg',
    // outline styles
    'ring-1 outline-none ring-inset',
  ],
  {
    variants: {
      state: {
        undefined: 'ring-outline',
        error: 'ring-error',
        alert: 'ring-alert',
        success: 'ring-success',
      },
      disabled: {
        true: 'disabled:bg-on-surface/dim-5 cursor-not-allowed text-on-surface/dim-3',
        false: 'focus-within:ring-2',
      },
      readOnly: {
        true: 'disabled:bg-on-surface/dim-5 cursor-not-allowed text-on-surface/dim-3',
      },
    },
    compoundVariants: [
      {
        disabled: false,
        state: undefined,
        class: 'hover:ring-outline-high focus-within:ring-outline-high',
      },
    ],
  }
)
