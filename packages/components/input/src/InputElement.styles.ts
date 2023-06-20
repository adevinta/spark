import { cva, VariantProps } from 'class-variance-authority'

export const inputElementStyles = cva([
  'text-neutral',
  'pointer-events-none',
  'absolute',
  'top-1/2',
  '-translate-y-1/2',
  'peer:focus:text-outline-high',
])

export type InputElementStylesProps = VariantProps<typeof inputElementStyles>
