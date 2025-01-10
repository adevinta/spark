import { Dialog, DialogHeaderProps } from '@spark-ui/dialog'
import { Ref } from 'react'

export type AlertDialogHeaderProps = DialogHeaderProps & {
  ref?: Ref<HTMLDivElement>
}

export const AlertDialogHeader = (props: AlertDialogHeaderProps) => {
  return <Dialog.Header data-spark-component="alert-dialog-header" {...props} />
}

AlertDialogHeader.displayName = 'AlertDialog.Header'
