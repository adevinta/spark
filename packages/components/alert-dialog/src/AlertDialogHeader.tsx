import { Dialog, DialogHeaderProps } from '@spark-ui/dialog'
import { RefObject } from 'react'

export type AlertDialogHeaderProps = DialogHeaderProps & {
  ref?: RefObject<HTMLDivElement>
}

export const AlertDialogHeader = (props: AlertDialogHeaderProps) => {
  return <Dialog.Header data-spark-component="alert-dialog-header" {...props} />
}

AlertDialogHeader.displayName = 'AlertDialog.Header'
