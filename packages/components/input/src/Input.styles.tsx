import { cva, VariantProps } from 'class-variance-authority'

export const inputStyles = cva(
  [
    'h-sz-44',
    'box-border',
    'outline-none',
    'text-ellipsis',
    'peer',
    'text-body-1',
    'cursor-auto',
    'caret-neutral',
    'appearance-none',
    'w-full',
    'autofill:shadow-surface',
    'autofill:shadow-[inset_0_0_0px_1000px]',
  ],
  {
    variants: {
      intent: {
        none: [''],
        neutral: ['border-sm', 'focus:ring-1', 'focus:border-outline-high', 'ring-outline-high'],
        success: ['border-sm', 'focus:ring-1', 'border-success', 'ring-success'],
        alert: ['border-sm', 'focus:ring-1', 'border-alert', 'ring-alert'],
        error: ['border-sm', 'focus:ring-1', 'border-error', 'ring-error'],
      },
      isDisabled: {
        true: ['bg-on-surface/dim-5', 'text-on-surface/dim-3', 'cursor-not-allowed'],
        false: ['bg-surface', 'text-on-surface'],
      },
      isLeftElementVisible: {
        true: ['pl-3xl'],
        false: [],
      },
      isRightElementVisible: {
        true: ['pr-3xl'],
        false: [],
      },
      isLeftAddonVisible: {
        true: ['pl-md', 'border-l-none', 'rounded-l-none'],
        false: ['rounded-l-lg'],
      },
      isRightAddonVisible: {
        true: ['pr-md', 'border-r-none', 'rounded-r-none'],
        false: ['rounded-r-lg'],
      },
    },
    compoundVariants: [
      {
        intent: 'neutral',
        isDisabled: true,
        class: 'border-outline',
      },
      {
        intent: 'neutral',
        isDisabled: false,
        class: 'hover:border-outline-high',
      },
      {
        isLeftElementVisible: false,
        isLeftAddonVisible: false,
        class: 'pl-lg',
      },
      {
        isRightElementVisible: false,
        isRightAddonVisible: false,
        class: 'pr-lg',
      },
    ],
  }
)

export type InputStylesProps = VariantProps<typeof inputStyles>
