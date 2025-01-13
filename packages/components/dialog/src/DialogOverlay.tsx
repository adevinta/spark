import * as RadixDialog from '@radix-ui/react-dialog'
import { cx } from 'class-variance-authority'
import { type ReactElement, Ref } from 'react'

import { useDialog } from './DialogContext'

export type OverlayProps = RadixDialog.DialogOverlayProps & {
  ref?: Ref<HTMLDivElement>
}

export const Overlay = ({ className, ref, ...rest }: OverlayProps): ReactElement | null => {
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

Overlay.displayName = 'Dialog.Overlay'
