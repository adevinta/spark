import { cva, type VariantProps } from 'class-variance-authority'

export const inputFieldsetStyles = cva(['gap-sm', 'flex flex-row'], {
  variants: {},
})

export type InputFieldsetStylesProps = VariantProps<typeof inputFieldsetStyles>
