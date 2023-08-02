import { Dialog, DialogPortalProps } from '@spark-ui/dialog'

export type AlertDialogPortalProps = DialogPortalProps

export const AlertDialogPortal = (props: AlertDialogPortalProps) => {
  return <Dialog.Portal data-spark-component="alert-dialog-portal" {...props} />
}

AlertDialogPortal.displayName = 'AlertDialog.Portal'
