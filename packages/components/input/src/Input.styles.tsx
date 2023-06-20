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
    'autofill:shadow-surface',
    'autofill:shadow-[inset_0_0_0px_1000px]',
    'bg-surface',
    'text-on-surface',
    'disabled:bg-on-surface/dim-5',
    'disabled:text-on-surface/dim-3',
    'disabled:cursor-not-allowed',
    'disabled:border-on-surface/dim-3',
  ],
  {
    variants: {
      intent: {
        none: [''],
        neutral: [
          'border-sm',
          'border-outline',
          'ring-outline-high',
          'hover:border-outline-high',
          'focus:ring-1',
          'focus:border-outline-high',
        ],
        success: ['border-sm', 'border-success', 'ring-success', 'focus:ring-1'],
        alert: ['border-sm', 'border-alert', 'ring-alert', 'focus:ring-1'],
        error: ['border-sm', 'border-error', 'ring-error', 'focus:ring-1'],
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
