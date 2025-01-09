import { Dialog, DialogTitleProps } from '@spark-ui/dialog'
import { RefObject } from 'react'

export type AlertDialogTitleProps = DialogTitleProps & {
  ref?: RefObject<HTMLParagraphElement>
}

export const AlertDialogTitle = (props: AlertDialogTitleProps) => {
  return <Dialog.Title data-spark-component="alert-dialog-title" {...props} />
}

AlertDialogTitle.displayName = 'AlertDialog.Title'
