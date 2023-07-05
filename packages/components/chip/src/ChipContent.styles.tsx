import { cva, type VariantProps } from 'class-variance-authority'

export const chipContentStyles = cva(['inline-block grow truncate'])

export type ChipContentStylesProps = VariantProps<typeof chipContentStyles>
