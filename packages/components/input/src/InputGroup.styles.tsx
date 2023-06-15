import { cva, VariantProps } from 'class-variance-authority'

export const inputGroupStyles = cva(['relative', 'inline-flex'])

export type InputGroupStylesProps = VariantProps<typeof inputGroupStyles>
