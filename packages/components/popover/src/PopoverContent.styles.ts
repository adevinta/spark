import { cva, type VariantProps } from 'class-variance-authority'

export const styles = cva(
  [
    'rounded-md',
    'p-lg',
    'bg-surface text-on-surface',
    'shadow',
    'focus:shadow-lg',
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
    },
    defaultVariants: {
      matchTriggerWidth: false,
      enforceBoundaries: false,
    },
  }
)

export type StylesProps = VariantProps<typeof styles>
