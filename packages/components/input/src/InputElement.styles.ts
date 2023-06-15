import { cva, VariantProps } from 'class-variance-authority'

export const inputElementStyles = cva([
  'text-neutral peer-focus:text-outline-high pointer-events-none absolute top-1/2 -translate-y-1/2',
])

export type InputElementStylesProps = VariantProps<typeof inputElementStyles>
