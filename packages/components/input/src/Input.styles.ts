import { cva, VariantProps } from 'class-variance-authority'

export const inputStyles = cva(
  [
    'relative',
    'border-sm',
    'peer',
    'w-full',
    'appearance-none outline-none',
    'bg-surface',
    'text-ellipsis text-body-1 text-on-surface',
    'caret-neutral',
    'autofill:shadow-surface',
    'autofill:shadow-[inset_0_0_0px_1000px]',
    'disabled:cursor-not-allowed',
    'disabled:bg-on-surface/dim-5 disabled:text-on-surface/dim-3',
    'read-only:cursor-default',
    'read-only:bg-on-surface/dim-5',
    'focus:ring-1 focus:ring-inset',
    'disabled:border-outline',
  ],
  {
    variants: {
      asChild: {
        true: ['min-h-sz-44'],
        false: ['h-sz-44'],
      },
      intent: {
        neutral: [
          'border-outline',
          'hover:border-outline-high',
          'focus:ring-outline-high focus:border-outline-high',
        ],
        success: ['border-success', 'focus:ring-success'],
        alert: ['border-alert', 'focus:ring-alert'],
        error: ['border-error', 'focus:ring-error'],
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
