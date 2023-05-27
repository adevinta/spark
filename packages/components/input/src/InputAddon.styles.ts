import { cva, VariantProps } from 'class-variance-authority'

export const inputAddonStyles = cva(['border-sm', 'flex', 'items-center', 'rounded-lg'], {
  variants: {
    intent: {
      neutral: ['border-outline'],
      success: ['border-success'],
      alert: ['border-alert'],
      error: ['border-error'],
    },
    isFocused: {
      true: [],
      false: [],
    },
    isHovered: {
      true: [],
      false: [],
    },
  },
  compoundVariants: [
    {
      intent: 'neutral',
      isHovered: true,
      class: '!border-outline-high',
    },
    {
      intent: 'neutral',
      isFocused: true,
      class: '!border-outline-high',
    },
  ],
})

export type InputAddonStylesProps = VariantProps<typeof inputAddonStyles>
