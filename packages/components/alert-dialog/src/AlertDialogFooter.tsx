import { Dialog, DialogFooterProps } from '@spark-ui/dialog'
import { ElementRef, forwardRef } from 'react'

export type AlertDialogFooterElement = ElementRef<typeof Dialog.Footer>
export type AlertDialogFooterProps = DialogFooterProps

export const AlertDialogFooter = forwardRef<AlertDialogFooterElement, AlertDialogFooterProps>(
  (props, ref) => {
    return <Dialog.Footer ref={ref} data-spark-component="alert-dialog-footer" {...props} />
  }
)

AlertDialogFooter.displayName = 'AlertDialog.Footer'
