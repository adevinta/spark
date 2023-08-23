import { Dialog, DialogHeaderProps } from '@spark-ui/dialog'
import { ElementRef, forwardRef } from 'react'

export type AlertDialogHeaderElement = ElementRef<typeof Dialog.Header>
export type AlertDialogHeaderProps = DialogHeaderProps

export const AlertDialogHeader = forwardRef<AlertDialogHeaderElement, AlertDialogHeaderProps>(
  (props, ref) => {
    return <Dialog.Header ref={ref} data-spark-component="alert-dialog-header" {...props} />
  },
)

AlertDialogHeader.displayName = 'AlertDialog.Header'
