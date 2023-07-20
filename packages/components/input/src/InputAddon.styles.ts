import { cva, VariantProps } from 'class-variance-authority'

export const inputAddonContainerStyles = cva([''], {
  variants: {
    disabled: {
      true: [
        'relative',
        'after:absolute',
        'after:top-none',
        'after:h-full',
        // 'after:w-[calc(100%+1px)]',
        'after:content-[""]',
        'bg-on-surface/dim-5',
      ],
      false: 'after:hidden',
    },
    placement: {
      left: ['rounded-l-lg', 'after:!right-[-1px]', 'after:rounded-l-lg'],
      right: ['rounded-r-lg', 'after:!left-[-1px]', 'after:rounded-r-lg'],
    },
  },
})

export const inputAddonStyles = cva(
  [
    'overflow-hidden',
    'ring-1',
    'ring-inset',
    'shrink-0',
    'h-full',
    'focus-visible:relative',
    'focus-visible:z-raised',
  ],
  {
    variants: {
      asChild: { false: ['flex', 'items-center', 'px-lg'] },
      intent: {
        neutral: 'ring-outline',
        error: 'ring-error',
        alert: 'ring-alert',
        success: 'ring-success',
      },
      disabled: {
        true: ['pointer-events-none'],
      },
      design: {
        text: '',
        solid: '',
        inline: '',
      },
    },
    compoundVariants: [
      {
        disabled: false,
        design: 'text',
        class: ['bg-surface', 'text-on-surface'],
      },
      {
        disabled: true,
        design: 'text',
        class: ['text-on-surface/dim-3'],
      },
      {
        disabled: true,
        design: ['solid', 'inline'],
        class: ['opacity-dim-3'],
      },
    ],
    defaultVariants: {
      intent: 'neutral',
    },
  }
)

export type InputAddonStylesProps = VariantProps<typeof inputAddonStyles>
