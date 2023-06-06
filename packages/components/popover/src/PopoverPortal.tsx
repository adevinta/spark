import * as RadixPopover from '@radix-ui/react-popover'
import { ReactElement } from 'react'

export type PortalProps = RadixPopover.PopoverPortalProps

export const Portal = ({ children, ...rest }: PortalProps): ReactElement => (
  <RadixPopover.Portal {...rest}>{children}</RadixPopover.Portal>
)

Portal.displayName = 'Popover.Portal'
