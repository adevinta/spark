import { cva, VariantProps } from 'class-variance-authority'

export const inputStyles = cva(
  [
    'relative',
    'ring-1 ring-inset',
    'peer',
    'box-border',
    'h-sz-44 min-h-sz-44 w-full',
    'appearance-none outline-none',
    'bg-surface',
    'text-ellipsis text-body-1 text-on-surface',
    'caret-neutral',
    'focus:ring-2',
    'autofill:shadow-surface',
    'autofill:shadow-[inset_0_0_0px_1000px]',
    'disabled:cursor-not-allowed',
  ],
  {
    variants: {
      intent: {
        neutral: [
          'ring-outline',
          'hover:ring-outline-high',
          'focus:ring-outline-high',
          'disabled:ring-outline',
        ],
        success: ['ring-success', 'ring-success'],
        alert: ['ring-alert', 'ring-alert'],
        error: ['ring-error', 'ring-error'],
      },
      isStandalone: {
        true: 'disabled:opacity-dim-3',
      },
      hasLeadingAddon: {
        true: ['rounded-l-none'],
        false: ['rounded-l-lg'],
      },
      hasTrailingAddon: {
        true: ['rounded-r-none'],
        false: ['rounded-r-lg'],
      },
      hasLeadingIcon: {
        true: ['pl-3xl'],
        false: ['pl-lg'],
      },
      hasTrailingIcon: { true: '' },
      hasClearButton: { true: '' },
    },
    compoundVariants: [
      {
        hasTrailingIcon: false,
        hasClearButton: false,
        class: 'pr-lg',
      },
      {
        hasTrailingIcon: true,
        hasClearButton: false,
        class: 'pr-3xl',
      },
      {
        hasTrailingIcon: false,
        hasClearButton: true,
        class: 'pr-3xl',
      },
      {
        hasTrailingIcon: true,
        hasClearButton: true,
        class: "pr-[calc(theme('spacing.3xl')*2)]",
      },
    ],
    defaultVariants: {
      intent: 'neutral',
    },
  }
)

export type InputStylesProps = VariantProps<typeof inputStyles>
