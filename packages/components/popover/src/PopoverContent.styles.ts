import { cva, type VariantProps } from 'class-variance-authority'

export const styles = cva(
  [
    'rounded-md',
    'max-w-sz-384 p-lg',
    'bg-surface text-on-surface',
    'shadow',
    'focus:shadow-lg',
    'pr-[40px]',
    // directions styles
    'will-change-[transform,opacity]',
  ],
  {
    variants: {
      matchTriggerWidth: {
        true: 'w-[--radix-popper-anchor-width]',
      },
      enforceBoundaries: {
        true: ['max-w-[--radix-popper-available-width]'],
      },
      // hasCloseButton: {
      //   true: 'pr-[40px]',
      // },
    },
    defaultVariants: {
      matchTriggerWidth: false,
      enforceBoundaries: false,
    },
  }
)

export type StylesProps = VariantProps<typeof styles>
