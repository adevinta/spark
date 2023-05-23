import { cva, type VariantProps } from 'class-variance-authority'

// eslint-disable-next-line tailwindcss/no-custom-classname
export const styles = cva(
  [
    'rounded-md',
    'p-lg',
    'bg-surface text-on-surface',
    'shadow',
    'focus:shadow-lg',
    // directions styles
    'will-change-[transform,opacity]',
    'data-[state=open]:data-[side=bottom]:animate-slideUpAndFade',
    'data-[state=open]:data-[side=left]:animate-slideRightAndFade',
    'data-[state=open]:data-[side=right]:animate-slideLeftAndFade',
    'data-[state=open]:data-[side=top]:animate-slideDownAndFade',
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
