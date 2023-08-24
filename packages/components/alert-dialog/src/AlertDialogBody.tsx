import { Dialog, DialogBodyProps } from '@spark-ui/dialog'
import { ElementRef, forwardRef } from 'react'

export type AlertDialogBodyElement = ElementRef<typeof Dialog.Body>
export type AlertDialogBodyProps = DialogBodyProps

export const AlertDialogBody = forwardRef<AlertDialogBodyElement, AlertDialogBodyProps>(
  (props, ref) => {
    return <Dialog.Body ref={ref} data-spark-component="alert-dialog-body" {...props} />
  },
)

AlertDialogBody.displayName = 'AlertDialog.Body'
