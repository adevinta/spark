import { Dialog, DialogTriggerProps } from '@spark-ui/dialog'
import { Ref } from 'react'

export type AlertDialogTriggerProps = DialogTriggerProps & {
  ref?: Ref<HTMLButtonElement>
}

export const AlertDialogTrigger = (props: AlertDialogTriggerProps) => {
  return <Dialog.Trigger data-spark-component="alert-dialog-title" {...props} />
}

AlertDialogTrigger.displayName = 'AlertDialog.Trigger'
