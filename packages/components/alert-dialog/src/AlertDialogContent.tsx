import { composeEventHandlers } from '@radix-ui/primitive'
import { Dialog, DialogContentProps } from '@spark-ui/dialog'
import { cx } from 'class-variance-authority'
import { RefObject, useMemo, useRef } from 'react'

import { AlertDialogContext } from './AlertDialogContext'

export type AlertDialogContentProps = Omit<
  DialogContentProps,
  'size' | 'isNarrow' | 'onPointerDownOutside' | 'onInteractOutside'
> & {
  ref?: RefObject<HTMLDivElement>
}

export const AlertDialogContent = ({
  className,
  onOpenAutoFocus,
  ref,
  ...others
}: AlertDialogContentProps) => {
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
        className={cx(className, 'min-w-sz-288')}
        role="alertdialog"
        size="md"
        onOpenAutoFocus={composeEventHandlers(onOpenAutoFocus, handleOpenAutoFocus)}
        onPointerDownOutside={handlePointerDownOutside}
        onInteractOutside={handleInteractOutside}
        isNarrow
      />
    </AlertDialogContext.Provider>
  )
}

AlertDialogContent.displayName = 'AlertDialog.Content'
