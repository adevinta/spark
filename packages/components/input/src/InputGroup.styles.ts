import { cva, VariantProps } from 'class-variance-authority'

export const inputGroupStyles = cva(['relative inline-flex w-full'], {
  variants: {
    disabled: {
      true: [
        'cursor-not-allowed',
        'relative',
        'after:absolute',
        'after:top-none',
        'after:h-full',
        'after:w-full',
        'after:ring-1',
        'after:ring-inset',
        'after:ring-outline',
        'after:content-[""]',
        'after:rounded-lg',
      ],
      false: 'after:hidden',
    },
  },
})

export type InputGroupStylesProps = VariantProps<typeof inputGroupStyles>
