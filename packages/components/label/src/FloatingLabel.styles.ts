import { cva, VariantProps } from 'class-variance-authority'

export const floatingLabelStyles = cva(['absolute', 'z-base', 'transition-all', 'duration-100'], {
  variants: {
    /**
     * Boolean indicating whenever the floating label is expanded, enabling this way the animation.
     */
    isExpanded: {
      true: ['left-lg', '-top-md', 'text-body-2', 'bg-surface', 'px-sm', '-ml-sm'],
      false: ['left-none', 'top-1/2', 'transform', '-translate-y-1/2'],
    },
    /**
     * Boolean indicating there is an addon placed on the left side.
     */
    isLeftAddonVisible: {
      true: ['px-md'],
      false: [],
    },
    /**
     * Boolean indicating there is an element placed on the left side.
     */
    isLeftElementVisible: {
      true: [],
      false: [],
    },
    /**
     * Boolean indicating the wrapping element is disabled.
     */
    isDisabled: {
      true: [],
      false: ['text-on-surface/dim-1', 'cursor-text'],
    },
  },
  compoundVariants: [
    {
      isExpanded: false,
      isLeftElementVisible: false,
      isLeftAddonVisible: false,
      class: ['px-lg'],
    },
    {
      isExpanded: false,
      isLeftElementVisible: true,
      class: ['px-3xl'],
    },
    {
      isExpanded: true,
      isDisabled: true,
      class: [
        'bg-transparent',
        'text-on-surface/dim-3',
        'cursor-not-allowed',
        'before:w-full',
        'before:h-full',
        'before:top-1/2',
        'before:left-none',
        'before:absolute',
        'before:z-hide',
        'before:block',
        'before:border-t-on-primary', // TODO: Spaeak to Design team if it's possible to switch this to a solid color.
        'before:border-t-sm',
        'before:-translate-y-1/2',
        'before:mt-md',
        'after:w-full',
        'after:h-full',
        'after:top-1/2',
        'after:left-none',
        'after:absolute',
        'after:z-hide',
        'after:block',
        'after:border-t-on-surface/dim-5',
        'after:border-t-sm',
        'after:-translate-y-1/2',
        'after:mt-md',
      ],
    },
  ],
  defaultVariants: { isExpanded: false, isLeftElementVisible: false, isDisabled: true },
})

export type FloatingLabelStylesProps = VariantProps<typeof floatingLabelStyles>
