import { cva, type VariantProps } from 'class-variance-authority'

export const textInputStyles = cva(['inline-block'])

export type TextInputStylesProps = VariantProps<typeof textInputStyles>
