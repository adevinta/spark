import { cva, VariantProps } from 'class-variance-authority'

export const textFieldLegendStyles = cva(
  [
    'block',
    'invisible',
    'text-body-2',
    'h-none',
    'py-none',
    'mx-lg',
    'overflow-hidden',
    'text-transparent',
    'w-auto',
  ],
  {
    variants: {
      isExpanded: {
        true: ['px-sm', 'max-w-full'],
        false: ['px-none', 'max-w-0'],
      },
    },
  }
)

export type TextFieldLegendStylesProps = VariantProps<typeof textFieldLegendStyles>
