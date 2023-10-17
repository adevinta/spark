import { cva, VariantProps } from 'class-variance-authority'

export const inputAddonStyles = cva(
  [
    'overflow-hidden',
    'border-sm',
    'shrink-0',
    'h-full',
    'focus-visible:relative focus-visible:z-raised',
  ],
  {
    variants: {
      asChild: { false: ['flex', 'items-center', 'px-lg'] },
      intent: {
        neutral: 'border-outline',
        error: 'border-error',
        alert: 'border-alert',
        success: 'border-success',
      },
      disabled: {
        true: ['pointer-events-none !border-outline'],
      },
      readOnly: {
        true: [],
      },
      design: {
        text: '',
        solid: '',
        inline: '',
      },
    },
    compoundVariants: [
      {
        disabled: false,
        readOnly: false,
        design: 'text',
        class: ['bg-surface', 'text-on-surface'],
      },
      {
        disabled: true,
        design: 'text',
        class: ['text-on-surface/dim-3'],
      },
      {
        disabled: true,
        design: ['solid', 'inline'],
        class: ['opacity-dim-3'],
      },
    ],
    defaultVariants: {
      intent: 'neutral',
    },
  }
)

export type InputAddonStylesProps = VariantProps<typeof inputAddonStyles>
