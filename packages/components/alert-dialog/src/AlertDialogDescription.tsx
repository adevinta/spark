import { Dialog, DialogDescriptionProps } from '@spark-ui/dialog'
import { ElementRef, forwardRef } from 'react'

export type AlertDialogDescriptionElement = ElementRef<typeof Dialog.Description>
export type AlertDialogDescriptionProps = DialogDescriptionProps

export const AlertDialogDescription = forwardRef<
  AlertDialogDescriptionElement,
  AlertDialogDescriptionProps
>((props, ref) => {
  return <Dialog.Description ref={ref} data-spark-component="alert-dialog-description" {...props} />
})

AlertDialogDescription.displayName = 'AlertDialog.Description'
