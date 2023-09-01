import * as RadixDialog from '@radix-ui/react-dialog'
import { cx } from 'class-variance-authority'
import { forwardRef, type ReactElement, type Ref } from 'react'

export type OverlayProps = RadixDialog.DialogOverlayProps

export const Overlay = forwardRef(
  ({ className, ...rest }: OverlayProps, ref: Ref<HTMLDivElement>): ReactElement => (
    <RadixDialog.Overlay
      ref={ref}
      className={cx(
        ['fixed', 'top-none', 'left-none', 'w-screen', 'h-screen', 'z-overlay'],
        ['bg-overlay/dim-3'],
        ['data-[state=open]:animate-fade-in'],
        ['data-[state=closed]:animate-fade-out'],
        ['[body.modal-is-fullscreen_&]:[animation:none]'],
        className
      )}
      {...rest}
    />
  )
)

Overlay.displayName = 'Dialog.Overlay'
