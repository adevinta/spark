import { Dialog, DialogDescriptionProps } from '@spark-ui/dialog'
import { Ref } from 'react'

export type AlertDialogDescriptionProps = DialogDescriptionProps & {
  ref?: Ref<HTMLParagraphElement>
}

export const AlertDialogDescription = (props: AlertDialogDescriptionProps) => {
  return <Dialog.Description data-spark-component="alert-dialog-description" {...props} />
}

AlertDialogDescription.displayName = 'AlertDialog.Description'
