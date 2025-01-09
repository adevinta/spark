import { Dialog, DialogTriggerProps } from '@spark-ui/dialog'
import { RefObject } from 'react'

export type AlertDialogTriggerProps = DialogTriggerProps & {
  ref?: RefObject<HTMLButtonElement>
}

export const AlertDialogTrigger = (props: AlertDialogTriggerProps) => {
  return <Dialog.Trigger data-spark-component="alert-dialog-title" {...props} />
}

AlertDialogTrigger.displayName = 'AlertDialog.Trigger'
