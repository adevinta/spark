import { Dialog, DialogCloseProps } from '@spark-ui/dialog'
import { ElementRef, forwardRef } from 'react'

export type AlertDialogActionElement = ElementRef<typeof Dialog.Close>
export type AlertDialogActionProps = DialogCloseProps

export const AlertDialogAction = forwardRef<AlertDialogActionElement, AlertDialogActionProps>(
  (props, ref) => {
    return <Dialog.Close ref={ref} data-spark-component="alert-dialog-action" {...props} />
  }
)

AlertDialogAction.displayName = 'AlertDialog.Action'
