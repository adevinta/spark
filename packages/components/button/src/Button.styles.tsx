import { cva, type VariantProps } from 'class-variance-authority'
// import { paramCase } from 'param-case'

// const BUTTON_INTENTS = [
//   'primary',
//   'primaryContainer',
//   'primaryVariant',
//   'onPrimary',
//   'onPrimaryContainer',
//   'onPrimaryVariant',
//   'secondary',
//   'secondaryContainer',
//   'secondaryVariant',
//   'onSecondary',
//   'onSecondaryContainer',
//   'onSecondaryVariant',
// ]

// function buildIntents() {
//   return BUTTON_INTENTS.reduce(
//     (intents, intent) => ({
//       ...intents,
//       [intent]: [
//         `bg-${paramCase(intent)}`,
//         `hover:bg-${paramCase(intent)}-hovered`,
//         `disabled:bg-${paramCase(intent)}-disabled`,
//         `focus:bg-${paramCase(intent)}-focused`,
//       ],
//     }),
//     {}
//   )
// }

// console.log({ intent: buildIntents() })

const defaultVariants = {
  design: 'filled',
  intent: 'primary',
  size: 'md',
  reversed: false,
} as const

export const buttonStyles = cva('flex items-center justify-center', {
  variants: {
    design: {
      filled: [],
      outlined: [],
      tinted: [],
      ghost: [],
    },

    intent: {
      primary: [
        'bg-primary',
        'hover:bg-primary-hovered',
        'disabled:bg-primary-disabled',
        'focus:bg-primary-focused',
      ],
      primaryContainer: [
        'bg-primary-container',
        'hover:bg-primary-container-hovered',
        'disabled:bg-primary-container-disabled',
        'focus:bg-primary-container-focused',
      ],
      primaryVariant: [
        'bg-primary-variant',
        'hover:bg-primary-variant-hovered',
        'disabled:bg-primary-variant-disabled',
        'focus:bg-primary-variant-focused',
      ],
      onPrimary: [
        'bg-on-primary',
        'hover:bg-primary-hovered',
        'disabled:bg-primary-disabled',
        'focus:bg-primary-focused',
      ],
      onPrimaryContainer: [
        'bg-primary-container',
        'hover:bg-primary-container-hovered',
        'disabled:bg-primary-container-disabled',
        'focus:bg-primary-container-focused',
      ],
      onPrimaryVariant: [
        'bg-primary-variant',
        'hover:bg-primary-variant-hovered',
        'disabled:bg-primary-variant-disabled',
        'focus:bg-primary-variant-focused',
      ],
      secondary: [
        'bg-secondary',
        'hover:bg-secondary-hovered',
        'disabled:bg-secondary-disabled',
        'focus:bg-secondary-focused',
      ],
      secondaryContainer: [
        'bg-secondary-container',
        'hover:bg-secondary-container-hovered',
        'disabled:bg-secondary-container-disabled',
        'focus:bg-secondary-container-focused',
      ],
      secondaryVariant: [
        'bg-secondary-variant',
        'hover:bg-secondary-variant-hovered',
        'disabled:bg-secondary-variant-disabled',
        'focus:bg-secondary-variant-focused',
      ],
      onSecondary: [
        'bg-on-secondary',
        'hover:bg-secondary-hovered',
        'disabled:bg-secondary-disabled',
        'focus:bg-secondary-focused',
      ],
      onSecondaryContainer: [
        'bg-secondary-container',
        'hover:bg-secondary-container-hovered',
        'disabled:bg-secondary-container-disabled',
        'focus:bg-secondary-container-focused',
      ],
      onSecondaryVariant: [
        'bg-secondary-variant',
        'hover:bg-secondary-variant-hovered',
        'disabled:bg-secondary-variant-disabled',
        'focus:bg-secondary-variant-focused',
      ],
    },
    size: {
      md: ['p-md'],
      lg: ['p-lg'],
    },
    reversed: {
      true: [],
    },
  },
  compoundVariants: [],
  defaultVariants,
})

export type ButtonStylesProps = VariantProps<typeof buttonStyles>
