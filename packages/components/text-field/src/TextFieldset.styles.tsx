import { cva, VariantProps } from 'class-variance-authority'

export const textFieldsetStyles = cva(
  [
    'absolute',
    'w-full',
    'h-full',
    'pointer-events-none',
    'rounded-lg',
    'border-sm',
    'border-outline',
    'hover:border-outline-high',
    'left-none',
    'top-none',
    'px-lg',
    'block',
  ],
  {
    variants: {
      isExpanded: {
        true: [],
        false: [],
      },
    },
  }
)

export type TextFieldsetStylesProps = VariantProps<typeof textFieldsetStyles>
