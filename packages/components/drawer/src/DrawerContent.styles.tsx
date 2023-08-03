import { cva, VariantProps } from 'class-variance-authority'

export const drawerContentStyles = cva(
  [
    ['fixed', 'z-modal', 'flex', 'flex-col'],
    ['bg-surface', 'shadow-md'],
  ],
  {
    variants: {
      size: {
        sm: '',
        md: '',
        lg: '',
      },
      side: {
        right: ['top-none', 'right-none', 'h-screen'],
        left: ['top-none', 'left-none', 'h-screen'],
        top: ['top-none', 'left-none', 'w-screen'],
        bottom: ['bottom-none', 'left-none', 'w-screen'],
      },
    },
    compoundVariants: [
      {
        side: ['right', 'left'],
        size: 'sm',
        class: ['w-sz-480', 'max-w-full'],
      },
      {
        side: ['right', 'left'],
        size: 'md',
        class: ['w-sz-640', 'max-w-full'],
      },
      {
        side: ['right', 'left'],
        size: 'lg',
        class: ['w-sz-768', 'max-w-full'],
      },
      {
        side: ['top', 'bottom'],
        size: 'sm',
        class: ['h-sz-480', 'max-h-full'],
      },
      {
        side: ['top', 'bottom'],
        size: 'md',
        class: ['h-sz-640', 'max-h-full'],
      },
      {
        side: ['top', 'bottom'],
        size: 'lg',
        class: ['h-sz-768', 'max-h-full'],
      },
    ],
    defaultVariants: {
      side: 'right',
      size: 'md',
    },
  }
)

export type DrawerContentStylesProps = VariantProps<typeof drawerContentStyles>
