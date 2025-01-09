import { Dialog, DialogBodyProps } from '@spark-ui/dialog'
import { RefObject } from 'react'

export type AlertDialogBodyProps = DialogBodyProps & {
  ref?: RefObject<HTMLDivElement>
}

export const AlertDialogBody = (props: AlertDialogBodyProps) => {
  return <Dialog.Body data-spark-component="alert-dialog-body" {...props} />
}

AlertDialogBody.displayName = 'AlertDialog.Body'
