import * as RadixDialog from '@radix-ui/react-dialog'
import { cva, VariantProps } from 'class-variance-authority'
import { forwardRef, type ReactElement, type Ref } from 'react'

const dialogContentStyles = cva(
  [
    ['fixed', 'top-1/2', 'left-1/2', '-translate-x-1/2', '-translate-y-1/2', 'z-modal'],
    ['bg-surface'],
    ['p-xl'],
  ],
  {
    variants: {
      size: {
        fullscreen: ['w-screen', 'h-screen'],
        sm: ['max-w-sz-480'],
        md: ['max-w-sz-640'],
        lg: ['max-w-sz-768'],
      },
    },
    compoundVariants: [
      {
        size: ['sm', 'md', 'lg'],
        class: ['shadow-md', 'rounded-lg', 'w-full'],
      },
    ],
    defaultVariants: {
      size: 'md',
    },
  }
)

export type DialogContentStylesProps = VariantProps<typeof dialogContentStyles>

export type ContentProps = RadixDialog.DialogContentProps & DialogContentStylesProps

export const Content = forwardRef(
  (
    { children, className, size = 'md', ...rest }: ContentProps,
    ref: Ref<HTMLDivElement>
  ): ReactElement => (
    <RadixDialog.Content
      data-spark-component="dialog-content"
      ref={ref}
      className={dialogContentStyles({
        size,
        className,
      })}
      {...rest}
    >
      {children}
    </RadixDialog.Content>
  )
)

Content.displayName = 'Dialog.Content'
