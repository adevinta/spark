import { Dialog, DialogCloseProps } from '@spark-ui/dialog'
import { RefObject } from 'react'

export type AlertDialogActionProps = DialogCloseProps & {
  ref?: RefObject<HTMLButtonElement>
}

export const AlertDialogAction = (props: AlertDialogActionProps) => {
  return <Dialog.Close data-spark-component="alert-dialog-action" {...props} />
}

AlertDialogAction.displayName = 'AlertDialog.Action'
