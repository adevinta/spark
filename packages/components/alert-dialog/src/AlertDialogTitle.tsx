import { Dialog, DialogTitleProps } from '@spark-ui/dialog'
import { ElementRef, forwardRef } from 'react'

export type AlertDialogTitleElement = ElementRef<typeof Dialog.Description>
export type AlertDialogTitleProps = DialogTitleProps

export const AlertDialogTitle = forwardRef<AlertDialogTitleElement, AlertDialogTitleProps>(
  (props, ref) => {
    return <Dialog.Title ref={ref} data-spark-component="alert-dialog-title" {...props} />
  }
)

AlertDialogTitle.displayName = 'AlertDialog.Title'
