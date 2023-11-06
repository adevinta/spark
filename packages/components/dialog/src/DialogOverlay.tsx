import * as RadixDialog from '@radix-ui/react-dialog'
import { cx } from 'class-variance-authority'
import { forwardRef, type ReactElement, type Ref } from 'react'

import { useDialog } from './DialogContext'

export type OverlayProps = RadixDialog.DialogOverlayProps

export const Overlay = forwardRef(
  ({ className, ...rest }: OverlayProps, ref: Ref<HTMLDivElement>): ReactElement | null => {
    const { isFullScreen } = useDialog()

    return (
      <RadixDialog.Overlay
        ref={ref}
        className={cx(
          isFullScreen ? 'hidden' : 'fixed',
          ['top-none', 'left-none', 'w-screen', 'h-screen', 'z-overlay'],
          ['bg-overlay/dim-3'],
          ['data-[state=open]:animate-fade-in'],
          ['data-[state=closed]:animate-fade-out'],
          className
        )}
        {...rest}
      />
    )
  }
)

Overlay.displayName = 'Dialog.Overlay'
