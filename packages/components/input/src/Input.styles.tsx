import { cva, VariantProps } from 'class-variance-authority'

export const inputStyles = cva(
  [
    'h-sz-44',
    'border-sm',
    'outline-none',
    'text-ellipsis',
    'text-body-1',
    'cursor-auto',
    'caret-neutral',
    'autofill:shadow-surface',
    'autofill:shadow-[inset_0_0_0px_1000px]',
  ],
  {
    variants: {
      intent: {
        neutral: ['focus:border-outline-high', 'ring-outline-high'],
        success: ['border-success', 'ring-success'],
        alert: ['border-alert', 'ring-alert'],
        error: ['border-error', 'ring-error'],
      },
      isDisabled: {
        true: ['bg-on-surface/dim-5', 'text-on-surface/dim-3', 'cursor-not-allowed'],
        false: ['bg-surface', 'text-on-surface'],
      },
      isHovered: {
        true: [],
        false: [],
      },
      isFocused: {
        true: [],
        false: [],
      },
      isLeftElementVisible: {
        true: [],
        false: [],
      },
      isRightElementVisible: {
        true: [],
        false: [],
      },
      isLeftAddonVisible: {
        true: ['border-l-none', 'rounded-l-none'],
        false: ['rounded-l-lg'],
      },
      isRightAddonVisible: {
        true: ['border-r-none', 'rounded-r-none'],
        false: ['rounded-r-lg'],
      },
    },
    compoundVariants: [
      {
        intent: 'neutral',
        isHovered: false,
        class: 'border-outline',
      },
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
        intent: 'neutral',
        isHovered: true,
        isDisabled: false,
        class: 'border-outline-high',
      },
      {
        isLeftElementVisible: false,
        isLeftAddonVisible: false,
        class: 'pl-lg',
      },
      {
        isLeftElementVisible: false,
        isLeftAddonVisible: true,
        class: 'pl-md',
      },
      {
        isLeftElementVisible: true,
        isLeftAddonVisible: false,
        class: 'pl-3xl',
      },
      {
        isRightElementVisible: false,
        isRightAddonVisible: false,
        class: 'pr-lg',
      },
      {
        isRightElementVisible: false,
        isRightAddonVisible: true,
        class: 'pr-md',
      },
      {
        isRightElementVisible: true,
        isRightAddonVisible: false,
        class: 'pr-3xl',
      },
      {
        isLeftAddonVisible: false,
        isRightAddonVisible: false,
        class: 'focus:ring-1',
      },
    ],
  }
)

export type InputStylesProps = VariantProps<typeof inputStyles>
