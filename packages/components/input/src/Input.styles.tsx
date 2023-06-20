import { cva, VariantProps } from 'class-variance-authority'

export const inputStyles = cva(
  [
    'min-h-sz-44',
    'box-border',
    'border-sm',
    'outline-none',
    'text-ellipsis',
    'text-body-1',
    'cursor-auto',
    'grow',
    'caret-neutral',
    'appearance-none',
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
      isHovered: {
        true: [],
        false: [],
      },
      isDisabled: {
        true: ['bg-on-surface/dim-5', 'text-on-surface/dim-3', 'cursor-not-allowed'],
        false: ['bg-surface', 'text-on-surface'],
      },
      isLeftElementVisible: {
        true: [],
        false: [],
      },
      hasClear: {
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
        isDisabled: true,
        class: 'border-on-surface/dim-3',
      },
      {
        isLeftElementVisible: false,
        isLeftAddonVisible: false,
        class: ['px-lg'],
      },
      {
        isLeftElementVisible: false,
        isLeftAddonVisible: true,
        class: ['px-md'],
      },
      {
        isLeftElementVisible: true,
        isLeftAddonVisible: false,
        class: 'px-3xl',
      },
      {
        isRightElementVisible: false,
        isRightAddonVisible: false,
        hasClear: false,
        class: 'pr-lg',
      },
      {
        isRightElementVisible: false,
        isRightAddonVisible: false,
        hasClear: true,
        class: 'pr-3xl',
      },
      {
        isRightElementVisible: false,
        isRightAddonVisible: true,
        hasClear: false,
        class: 'pr-md',
      },
      {
        isRightElementVisible: false,
        isRightAddonVisible: true,
        hasClear: true,
        class: 'pr-2xl',
      },
      {
        isRightElementVisible: true,
        isRightAddonVisible: false,
        hasClear: false,
        class: 'pr-3xl',
      },
      {
        isRightElementVisible: true,
        isRightAddonVisible: false,
        hasClear: true,
        class: 'pr-6xl',
      },
      {
        isRightElementVisible: true,
        isRightAddonVisible: true,
        hasClear: false,
        class: 'pr-3xl',
      },
      {
        isRightElementVisible: true,
        isRightAddonVisible: true,
        hasClear: true,
        class: 'pr-6xl',
      },
      {
        intent: 'neutral',
        isHovered: false,
        class: 'border-outline',
      },
      {
        intent: 'neutral',
        isDisabled: false,
        isHovered: true,
        class: 'border-outline-high',
      },
      {
        intent: 'neutral',
        isDisabled: false,
        isLeftAddonVisible: false,
        isRightAddonVisible: false,
        class: 'hover:border-outline-high',
      },
      {
        isLeftAddonVisible: false,
        isRightAddonVisible: false,
        class: 'focus:ring-1',
      },
    ],
  }
)

export const clearInputStyles = cva(['ml-md absolute top-1/2 flex -translate-y-1/2'], {
  variants: {
    isRightAddonVisible: {
      true: [],
      false: [],
    },
    isRightElementVisible: {
      true: [],
      false: [],
    },
  },
  compoundVariants: [
    {
      isRightAddonVisible: false,
      isRightElementVisible: false,
      class: 'right-none pr-lg',
    },
    {
      isRightAddonVisible: false,
      isRightElementVisible: true,
      class: 'right-2xl pr-md',
    },
    {
      isRightAddonVisible: true,
      isRightElementVisible: false,
      class: 'right-none pr-md',
    },
    {
      isRightAddonVisible: true,
      isRightElementVisible: true,
      class: 'pr-md',
    },
  ],
})

export type InputStylesProps = VariantProps<typeof inputStyles>
