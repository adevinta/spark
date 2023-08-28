import { Dialog, DialogTriggerProps } from '@spark-ui/dialog'
import { ElementRef, forwardRef } from 'react'

export type AlertDialogTriggetElement = ElementRef<typeof Dialog.Trigger>
export type AlertDialogTriggerProps = DialogTriggerProps

export const AlertDialogTrigger = forwardRef<AlertDialogTriggetElement, AlertDialogTriggerProps>(
  (props, ref) => {
    return <Dialog.Trigger ref={ref} data-spark-component="alert-dialog-title" {...props} />
  }
)

AlertDialogTrigger.displayName = 'AlertDialog.Trigger'
