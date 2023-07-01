import { cva, VariantProps } from 'class-variance-authority'

export const inputPrimitiveStyles = cva(
  [
    'peer',
    'box-border',
    'h-sz-44',
    'w-full',
    'outline-none',
    'appearance-none',
    'bg-surface',
    'text-on-surface',
    'text-body-1',
    'text-ellipsis',
    'cursor-auto',
    'caret-neutral',
    'autofill:shadow-surface',
    'autofill:shadow-[inset_0_0_0px_1000px]',
    'disabled:bg-on-surface/dim-5',
    'disabled:border-on-surface/dim-3',
    'disabled:text-on-surface/dim-3',
    'disabled:cursor-not-allowed',
    'read-only:bg-on-surface/dim-5',
    'read-only:border-on-surface/dim-3',
    'read-only:cursor-text',
  ],
  {
    variants: {
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

export type InputPrimitiveStylesProps = VariantProps<typeof inputPrimitiveStyles>
