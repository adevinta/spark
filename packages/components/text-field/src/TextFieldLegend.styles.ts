import { cva, VariantProps } from 'class-variance-authority'

export const textFieldLegendStyles = cva(
  ['text-body-2', 'h-none', 'py-none', 'px-sm', 'mx-lg', 'overflow-hidden', 'text-transparent'],
  {
    variants: {
      isExpanded: {
        true: ['block'],
        false: ['hidden'],
      },
    },
  }
)

export type TextFieldLegendStylesProps = VariantProps<typeof textFieldLegendStyles>
