import { Popover as SparkPopover } from '@spark-ui/popover'
import { ReactElement } from 'react'

export const Portal: typeof SparkPopover.Portal = ({ children, ...rest }): ReactElement => (
  <SparkPopover.Portal {...rest}>{children}</SparkPopover.Portal>
)

Portal.displayName = 'Dropdown.Portal'
