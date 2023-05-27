import { cva, VariantProps } from 'class-variance-authority'

export const inputStyles = cva(
  [
    'h-sz-44',
    'rounded-lg',
    'border-sm',
    'outline-none',
    'text-ellipsis',
    'focus:ring-1',
    'cursor-auto',
    'caret-neutral',
    'bg-surface',
    'autofill:shadow-surface',
    'autofill:shadow-[inset_0_0_0px_1000px]',
  ],
  {
    variants: {
      intent: {
        neutral: ['hover:border-outline-high', 'focus:border-outline-high', 'ring-outline-high'],
        success: ['border-success', 'ring-success'],
        alert: ['border-alert', 'ring-alert'],
        error: ['border-error', 'ring-error'],
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
        true: ['border-l-none', '!rounded-l-none', '!ring-0'],
        false: [],
      },
      isRightAddonVisible: {
        true: ['border-r-none', 'pr-md', '!rounded-r-none', '!ring-0'],
        false: ['pr-lg'],
      },
      isHovered: {
        true: [],
        false: [],
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
        isHovered: true,
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
    ],
  }
)

export type InputStylesProps = VariantProps<typeof inputStyles>
