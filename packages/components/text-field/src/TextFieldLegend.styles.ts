import { cva, VariantProps } from 'class-variance-authority'

export const textFieldLegendStyles = cva(
  [
    'block',
    'text-body-2',
    'h-none',
    'py-none',
    'mx-lg',
    'transition-all',
    'duration-200',
    'overflow-hidden',
    'text-transparent',
    'w-auto',
  ],
  {
    variants: {
      isExpanded: {
        true: ['px-sm', 'max-w-full'],
        false: ['px-none', 'invisible', 'max-w-[0.01px]'],
      },
    },
  }
)

export type TextFieldLegendStylesProps = VariantProps<typeof textFieldLegendStyles>
