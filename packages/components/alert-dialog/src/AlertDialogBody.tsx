import { Dialog, DialogBodyProps } from '@spark-ui/dialog'
import { Ref } from 'react'

export type AlertDialogBodyProps = DialogBodyProps & {
  ref?: Ref<HTMLDivElement>
}

export const AlertDialogBody = (props: AlertDialogBodyProps) => {
  return <Dialog.Body data-spark-component="alert-dialog-body" {...props} />
}

AlertDialogBody.displayName = 'AlertDialog.Body'
