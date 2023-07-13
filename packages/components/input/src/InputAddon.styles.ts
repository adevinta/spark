import { cva, VariantProps } from 'class-variance-authority'

export const inputAddonStyles = cva(
  ['ring-1 ring-inset', 'shrink-0', 'focus-visible:relative', 'focus-visible:z-raised'],
  {
    variants: {
      asChild: { false: ['flex', 'items-center', 'px-lg'] },
      intent: {
        neutral: 'ring-outline',
        error: 'ring-error',
        alert: 'ring-alert',
        success: 'ring-success',
      },
      disabled: {
        true: ['pointer-events-none'],
      },
    },
    compoundVariants: [
      {
        disabled: false,
        asChild: false,
        class: ['bg-surface', 'text-on-surface'],
      },
    ],
    defaultVariants: {
      intent: 'neutral',
    },
  }
)

export type InputAddonStylesProps = VariantProps<typeof inputAddonStyles>
