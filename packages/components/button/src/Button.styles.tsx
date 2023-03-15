import { cva, type VariantProps } from 'class-variance-authority'

const defaultVariants = {
  design: 'filled',
  intent: 'primary',
  size: 'md',
  reversed: false,
  shape: 'rounded',
} as const

export const buttonStyles = cva('flex items-center text-body-1 justify-center box-border', {
  variants: {
    design: {
      filled: [''],
      outlined: ['ring-2', 'ring-current', 'ring-inset'],
      tinted: [],
      ghost: [],
    },

    intent: {
      primary: [],
      primaryContainer: [],
      primaryVariant: [],
      secondary: [],
      secondaryContainer: [],
      secondaryVariant: [],
    },
    size: {
      md: ['py-md px-lg'],
      lg: ['p-lg'],
    },
    reversed: {
      true: [],
    },
    shape: {
      rounded: ['rounded-lg'],
      square: ['rounded-none'],
      pill: ['rounded-full'],
    },
  },
  compoundVariants: [
    {
      intent: 'primary',
      design: 'filled',
      class: [
        'bg-primary',
        'hover:bg-primary-hovered',
        'disabled:bg-primary-disabled',
        'focus:bg-primary-focused',
        'text-on-primary',
      ],
    } as const,
    {
      intent: 'primaryContainer',
      design: 'filled',
      class: [
        'bg-primary-container',
        'hover:bg-primary-container-hovered',
        'disabled:bg-primary-container-disabled',
        'focus:bg-primary-container-focused',
        'text-on-primary-container',
      ],
    } as const,
    {
      intent: 'primaryVariant',
      design: 'filled',
      class: [
        'bg-primary-variant',
        'hover:bg-primary-variant-hovered',
        'disabled:bg-primary-variant-disabled',
        'focus:bg-primary-variant-focused',
        'text-on-primary-variant',
      ],
    } as const,
    {
      intent: 'secondary',
      design: 'filled',
      class: [
        'bg-secondary',
        'hover:bg-secondary-hovered',
        'disabled:bg-secondary-disabled',
        'focus:bg-secondary-focused',
        'text-on-secondary',
      ],
    } as const,
    {
      intent: 'secondaryContainer',
      design: 'filled',
      class: [
        'bg-secondary-container',
        'hover:bg-secondary-container-hovered',
        'disabled:bg-secondary-container-disabled',
        'focus:bg-secondary-container-focused',
        'text-on-secondary-container',
      ],
    } as const,
    {
      intent: 'secondaryVariant',
      design: 'filled',
      class: [
        'bg-secondary-variant',
        'hover:bg-secondary-variant-hovered',
        'disabled:bg-secondary-variant-disabled',
        'focus:bg-secondary-variant-focused',
        'text-on-secondary-variant',
      ],
    } as const,
    {
      intent: 'primary',
      design: 'outlined',
      class: [
        // 'border-primary',
        'bg-on-primary',
        'hover:bg-primary-hovered',
        'disabled:bg-primary-disabled',
        'focus:bg-primary-focused',
        'text-primary',
      ],
    } as const,
    {
      intent: 'primaryContainer',
      design: 'outlined',
      class: [
        // 'border-primary-container',
        'bg-on-primary-container',
        'hover:bg-primary-container-hovered',
        'disabled:bg-primary-container-disabled',
        'focus:bg-primary-container-focused',
        'text-primary-container',
      ],
    } as const,
    {
      intent: 'primaryVariant',
      design: 'outlined',
      class: [
        // 'border-primary-variant',
        'bg-on-primary-variant',
        'hover:bg-primary-variant-hovered',
        'disabled:bg-primary-variant-disabled',
        'focus:bg-primary-variant-focused',
        'text-primary-variant',
      ],
    } as const,
    {
      intent: 'secondary',
      design: 'outlined',
      class: [
        // 'border-secondary',
        'bg-on-secondary',
        'hover:bg-secondary-hovered',
        'disabled:bg-secondary-disabled',
        'focus:bg-secondary-focused',
        'text-secondary',
      ],
    } as const,
    {
      intent: 'secondaryContainer',
      design: 'outlined',
      class: [
        // 'border-secondary-container',
        'bg-on-secondary-container',
        'hover:bg-secondary-container-hovered',
        'disabled:bg-secondary-container-disabled',
        'focus:bg-secondary-container-focused',
        'text-secondary-container',
      ],
    } as const,
    {
      intent: 'secondaryVariant',
      design: 'outlined',
      class: [
        // 'border-secondary-variant',
        'bg-on-secondary-variant',
        'hover:bg-secondary-variant-hovered',
        'disabled:bg-secondary-variant-disabled',
        'focus:bg-secondary-variant-focused',
        'text-secondary-variant',
      ],
    } as const,
  ],
  defaultVariants,
})

export type ButtonStylesProps = VariantProps<typeof buttonStyles>
