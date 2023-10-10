import { tw } from '@spark-ui/internal-utils'
import { cva, VariantProps } from 'class-variance-authority'

export const dividerStyles = cva(['overflow-hidden'], {
  variants: {
    isEmpty: {
      true: ['bg-current'],
      false: ['inline-flex items-center'],
    },
    orientation: {
      vertical: ['w-fit inline-flex min-h-sz-40'],
      horizontal: ['w-full'],
    },
    alignment: {
      start: [],
      end: [],
      center: [],
    },
  },
  defaultVariants: {
    orientation: 'horizontal',
    alignment: 'center',
  },
  compoundVariants: [
    {
      isEmpty: true,
      orientation: 'horizontal',
      class: tw(['h-sz-1 my-lg']),
    },
    {
      isEmpty: true,
      orientation: 'vertical',
      class: tw(['w-sz-1 mx-lg']),
    },
    {
      isEmpty: false,
      orientation: 'horizontal',
      class: tw([
        'flex-row my-sm grow-0',
        'before:h-sz-1 before:bg-current',
        'after:h-sz-1 after:bg-current',
        '[&>*]:px-lg',
      ]),
    },
    {
      isEmpty: false,
      orientation: 'vertical',
      class: tw([
        'flex-col mx-sm',
        'before:w-sz-1 before:bg-current',
        'after:w-sz-1 after:bg-current',
        '[&>*]:py-lg',
      ]),
    },
    {
      isEmpty: false,
      orientation: 'horizontal',
      alignment: 'end',
      class: tw(['after:w-sz-40 before:grow after:grow-0']),
    },
    {
      isEmpty: false,
      orientation: 'horizontal',
      alignment: 'start',
      class: tw(['before:w-sz-40 before:grow-0 after:grow']),
    },
    {
      isEmpty: false,
      orientation: 'horizontal',
      alignment: 'center',
      class: tw(['justify-center before:grow after:grow']),
    },
    {
      isEmpty: false,
      orientation: 'vertical',
      alignment: 'end',
      class: tw(['after:h-sz-40 before:grow after:grow-0 before:min-h-sz-40']),
    },
    {
      isEmpty: false,
      orientation: 'vertical',
      alignment: 'start',
      class: tw(['before:h-sz-40 before:grow-0 after:grow after:min-h-sz-40']),
    },
    {
      isEmpty: false,
      orientation: 'vertical',
      alignment: 'center',
      class: tw(['justify-center before:grow after:grow before:min-h-sz-40 after:min-h-sz-40']),
    },
  ],
})

export type DividerStylesProps = VariantProps<typeof dividerStyles>
