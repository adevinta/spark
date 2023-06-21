import { cva, VariantProps } from 'class-variance-authority'

export const inputGroupStyles = cva(['relative', 'inline-flex', 'w-full'])

export type InputGroupStylesProps = VariantProps<typeof inputGroupStyles>
