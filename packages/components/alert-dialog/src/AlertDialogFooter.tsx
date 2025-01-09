import { Dialog, DialogFooterProps } from '@spark-ui/dialog'
import { RefObject } from 'react'

export type AlertDialogFooterProps = DialogFooterProps & {
  ref?: RefObject<HTMLDivElement>
}

export const AlertDialogFooter = (props: AlertDialogFooterProps) => {
  return <Dialog.Footer data-spark-component="alert-dialog-footer" {...props} />
}

AlertDialogFooter.displayName = 'AlertDialog.Footer'
