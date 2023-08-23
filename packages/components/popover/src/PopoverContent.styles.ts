import { cva, type VariantProps } from 'class-variance-authority'

export const styles = cva(
  [
    'z-popover',
    'rounded-md',
    'p-lg',
    'bg-surface text-on-surface',
    'shadow',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-outline-high',
  ],
  {
    variants: {
      matchTriggerWidth: {
        true: 'w-[--radix-popper-anchor-width]',
      },
      enforceBoundaries: {
        true: ['max-w-[--radix-popper-available-width]'],
        false: ['max-w-sz-384'],
      },
      /**
       * When there is a close button, padding to the right side must be adjusted to avoid content overlapping with it.
       */
      hasCloseButton: {
        true: 'pr-[40px]',
      },
    },
    defaultVariants: {
      matchTriggerWidth: false,
      enforceBoundaries: false,
      hasCloseButton: false,
    },
  },
)

export type StylesProps = VariantProps<typeof styles>
