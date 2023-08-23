import { Dialog, DialogCloseProps } from '@spark-ui/dialog'
import { useMergeRefs } from '@spark-ui/use-merge-refs'
import { ElementRef, forwardRef } from 'react'

import { useAlertDialog } from './AlertDialogContext'

export type AlertDialogCancelElement = ElementRef<typeof Dialog.Close>
export type AlertDialogCancelProps = DialogCloseProps

export const AlertDialogCancel = forwardRef<AlertDialogCancelElement, AlertDialogCancelProps>(
  (props, forwardedRef) => {
    const { cancelRef } = useAlertDialog()
    const ref = useMergeRefs(forwardedRef, cancelRef)

    return <Dialog.Close ref={ref} data-spark-component="alert-dialog-cancel" {...props} />
  },
)

AlertDialogCancel.displayName = 'AlertDialog.Cancel'
