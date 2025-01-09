import { Dialog, DialogOverlayProps } from '@spark-ui/dialog'
import { RefObject } from 'react'

export type AlertDialogOverlayProps = DialogOverlayProps & {
  ref?: RefObject<HTMLDivElement>
}

export const AlertDialogOverlay = (props: AlertDialogOverlayProps) => {
  return <Dialog.Overlay data-spark-component="alert-dialog-overlay" {...props} />
}

AlertDialogOverlay.displayName = 'AlertDialog.Overlay'
