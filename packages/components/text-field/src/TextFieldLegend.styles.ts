import { cva, VariantProps } from 'class-variance-authority'

export const textFieldLegendStyles = cva(
  [
    'text-body-2',
    'transition-all',
    'duration-100',
    'text-transparent',
    'h-none',
    'overflow-hidden',
    'py-none',
    'px-sm',
  ],
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
