import { cva, type VariantProps } from 'class-variance-authority'

export const styles = cva(
  [
    'z-popover',
    'rounded-md',
    'bg-surface text-on-surface',
    'shadow',
    'focus-visible:outline-none focus-visible:u-ring',
  ],
  {
    variants: {
      matchTriggerWidth: {
        true: 'w-[--radix-popper-anchor-width]',
      },
      enforceBoundaries: {
        true: ['max-w-[--radix-popper-available-width]'],
      },
      /**
       * When there is a close button, padding to the right side must be adjusted to avoid content overlapping with it.
       */
      hasCloseButton: {
        true: 'pr-[40px]',
      },
      inset: {
        true: 'overflow-hidden',
        false: 'p-lg',
      },
    },
    compoundVariants: [
      {
        hasCloseButton: true,
        inset: true,
        class: 'pr-none',
      },
      {
        enforceBoundaries: false,
        matchTriggerWidth: false,
        class: 'max-w-[min(var(--sz-384),100vw)]',
      },
    ],
    defaultVariants: {
      matchTriggerWidth: false,
      enforceBoundaries: false,
      hasCloseButton: false,
      inset: false,
    },
  }
)

export type StylesProps = VariantProps<typeof styles>
