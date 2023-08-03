import { cva, type VariantProps } from 'class-variance-authority'

// eslint-disable-next-line tailwindcss/no-custom-classname
export const chipClearButtonWrapperStyles = cva(
  ['ml-md flex h-full items-center justify-center opacity-dim-3 focus-visible:outline-none'],
  {
    variants: {
      disabled: {
        false: ['cursor-pointer hover:opacity-none'],
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
