import { composeEventHandlers } from '@radix-ui/primitive'
import { Dialog, DialogContentProps } from '@spark-ui/dialog'
import { ElementRef, forwardRef, useMemo, useRef } from 'react'

import { AlertDialogContext } from './AlertDialogContext'

export type AlertDialogContentElement = ElementRef<typeof Dialog.Content>
export type AlertDialogContentProps = Omit<
  DialogContentProps,
  'onPointerDownOutside' | 'onInteractOutside'
>

export const AlertDialogContent = forwardRef<AlertDialogContentElement, AlertDialogContentProps>(
  ({ onOpenAutoFocus, ...others }, ref) => {
    const cancelRef = useRef<HTMLButtonElement | null>(null)

    const value = useMemo(() => {
      return { cancelRef }
    }, [])

    const handleOpenAutoFocus = (event: Event) => {
      event.preventDefault()
      cancelRef.current?.focus({ preventScroll: true })
    }

    const handlePointerDownOutside = (event: Event) => {
      event.preventDefault()
    }

    const handleInteractOutside = (event: Event) => {
      event.preventDefault()
    }

    return (
      <AlertDialogContext.Provider value={value}>
        <Dialog.Content
          ref={ref}
          data-spark-component="alert-dialog-content"
          {...others}
          role="alertdialog"
          onOpenAutoFocus={composeEventHandlers(onOpenAutoFocus, handleOpenAutoFocus)}
          onPointerDownOutside={handlePointerDownOutside}
          onInteractOutside={handleInteractOutside}
        />
      </AlertDialogContext.Provider>
    )
  }
)

AlertDialogContent.displayName = 'AlertDialog.Content'
