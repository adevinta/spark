import { FC } from 'react'

import { AlertDialog as Root, AlertDialogProps } from './AlertDialog'
import { AlertDialogAction } from './AlertDialogAction'
import { AlertDialogBody } from './AlertDialogBody'
import { AlertDialogCancel } from './AlertDialogCancel'
import { AlertDialogContent } from './AlertDialogContent'
import { AlertDialogDescription } from './AlertDialogDescription'
import { AlertDialogFooter } from './AlertDialogFooter'
import { AlertDialogHeader } from './AlertDialogHeader'
import { AlertDialogOverlay } from './AlertDialogOverlay'
import { AlertDialogPortal } from './AlertDialogPortal'
import { AlertDialogTitle } from './AlertDialogTitle'
import { AlertDialogTrigger } from './AlertDialogTrigger'

export * from './AlertDialog'
export { useAlertDialog } from './AlertDialogContext'
export { type AlertDialogActionProps } from './AlertDialogAction'
export { type AlertDialogBodyProps } from './AlertDialogBody'
export { type AlertDialogCancelProps } from './AlertDialogCancel'
export { type AlertDialogContentProps } from './AlertDialogContent'
export { type AlertDialogDescriptionProps } from './AlertDialogDescription'
export { type AlertDialogFooterProps } from './AlertDialogFooter'
export { type AlertDialogHeaderProps } from './AlertDialogHeader'
export { type AlertDialogOverlayProps } from './AlertDialogOverlay'
export { type AlertDialogPortalProps } from './AlertDialogPortal'
export { type AlertDialogTitleProps } from './AlertDialogTitle'
export { type AlertDialogTriggerProps } from './AlertDialogTrigger'

export const AlertDialog: FC<AlertDialogProps> & {
  Action: typeof AlertDialogAction
  Body: typeof AlertDialogBody
  Cancel: typeof AlertDialogCancel
  Content: typeof AlertDialogContent
  Description: typeof AlertDialogDescription
  Footer: typeof AlertDialogFooter
  Header: typeof AlertDialogHeader
  Overlay: typeof AlertDialogOverlay
  Portal: typeof AlertDialogPortal
  Title: typeof AlertDialogTitle
  Trigger: typeof AlertDialogTrigger
} = Object.assign(Root, {
  Action: AlertDialogAction,
  Body: AlertDialogBody,
  Cancel: AlertDialogCancel,
  Content: AlertDialogContent,
  Description: AlertDialogDescription,
  Footer: AlertDialogFooter,
  Header: AlertDialogHeader,
  Overlay: AlertDialogOverlay,
  Portal: AlertDialogPortal,
  Title: AlertDialogTitle,
  Trigger: AlertDialogTrigger,
})
