import { cva, type VariantProps } from 'class-variance-authority'

export const chipClearButtonWrapperStyles = cva(
  ['flex h-full items-center justify-center', 'focus-visible:outline-none'],
  {
    variants: {
      disabled: {
        false: ['cursor-pointer'],
        true: ['cursor-not-allowed'],
      },
      isBordered: {
        false: ['pr-md'],
        true: ['pr-[7px]'],
      },
    },
  }
)

export const chipClearButtonStyles = cva(
  [
    'rounded-full',
    'ring-inset focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-high',
  ],
  {
    variants: {
      disabled: {
        true: ['cursor-not-allowed'],
        false: ['cursor-pointer'],
      },
    },
  }
)

export type ChipClearButtonStylesProps = VariantProps<typeof chipClearButtonWrapperStyles>
