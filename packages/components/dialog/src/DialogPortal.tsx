import * as RadixDialog from '@radix-ui/react-dialog'
import { type ReactElement } from 'react'

export type PortalProps = RadixDialog.DialogPortalProps

export const Portal = ({ children, ...rest }: PortalProps): ReactElement => (
  <RadixDialog.Portal {...rest}>{children}</RadixDialog.Portal>
)

Portal.displayName = 'Dialog.Portal'
