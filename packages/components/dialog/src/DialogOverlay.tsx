import * as RadixDialog from '@radix-ui/react-dialog'
import { cx } from 'class-variance-authority'
import { forwardRef, type ReactElement, type Ref } from 'react'

export type OverlayProps = RadixDialog.DialogOverlayProps

export const Overlay = forwardRef(
  ({ children, className, ...rest }: OverlayProps, ref: Ref<HTMLDivElement>): ReactElement => (
    <RadixDialog.Overlay
      ref={ref}
      className={cx(
        ['absolute', 'top-none', 'left-none', 'w-screen', 'h-screen', 'z-overlay'],
        ['bg-overlay/dim-3'],
        className
      )}
      {...rest}
    >
      {children}
    </RadixDialog.Overlay>
  )
)

Overlay.displayName = 'Dialog.Overlay'
