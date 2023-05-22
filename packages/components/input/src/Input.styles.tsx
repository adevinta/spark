import { cva, VariantProps } from 'class-variance-authority'

export const inputStyles = cva(
  [
    'relative',
    'inline-flex',
    'items-center',
    'justify-between',
    'h-sz-44',
    'text-body-1',
    'px-lg',
    'text-ellipsis',
  ],
  {
    variants: {
      isFocused: {
        true: [],
        false: [],
      },
    },
  }
)
export const labelTextStyles = cva(
  ['absolute', 'flex', 'items-center', 'h-full', 'transition-all', 'duration-100'],
  {
    variants: {
      isExpanded: {
        true: ['text-body-2', 'top-[-50%]', 'p-md'],
        false: ['text-body-1', 'top-[0%]', 'opacity-dim-1'],
      },
    },
  }
)

export type InputStylesProps = VariantProps<typeof inputStyles>
