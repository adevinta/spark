import { cva, VariantProps } from 'class-variance-authority'

export const inputStyles = cva(
  [
    'h-sz-44',
    'peer',
    'box-content',
    'border-sm',
    'outline-none',
    'text-ellipsis',
    'text-body-1',
    'cursor-auto',
    'caret-neutral',
    'appearance-none',
    'bg-surface',
    'text-on-surface',
    'autofill:shadow-surface',
    'autofill:shadow-[inset_0_0_0px_1000px]',
    'disabled:bg-on-surface/dim-5',
    'disabled:border-on-surface/dim-3',
    'disabled:text-on-surface/dim-3',
    'disabled:cursor-not-allowed',
    'focus:ring-1',
  ],
  {
    variants: {
      intent: {
        neutral: [
          'border-outline',
          'hover:border-outline-high',
          'focus:border-outline-high',
          'ring-outline-high',
        ],
        success: ['border-success', 'ring-success'],
        alert: ['border-alert', 'ring-alert'],
        error: ['border-error', 'ring-error'],
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
