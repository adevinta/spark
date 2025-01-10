import { Dialog, DialogCloseProps } from '@spark-ui/dialog'
import { Ref } from 'react'

export type AlertDialogActionProps = DialogCloseProps & {
  ref?: Ref<HTMLButtonElement>
}

export const AlertDialogAction = (props: AlertDialogActionProps) => {
  return <Dialog.Close data-spark-component="alert-dialog-action" {...props} />
}

AlertDialogAction.displayName = 'AlertDialog.Action'
