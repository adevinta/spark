import { Dialog, DialogOverlayProps } from '@spark-ui/dialog'
import { ElementRef, forwardRef } from 'react'

export type AlertDialogOverlayElement = ElementRef<typeof Dialog.Overlay>
export type AlertDialogOverlayProps = DialogOverlayProps

export const AlertDialogOverlay = forwardRef<AlertDialogOverlayElement, AlertDialogOverlayProps>(
  (props, ref) => {
    return <Dialog.Overlay ref={ref} data-spark-component="alert-dialog-overlay" {...props} />
  }
)

AlertDialogOverlay.displayName = 'AlertDialog.Overlay'
