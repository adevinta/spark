import { Popover as SparkPopover } from '@spark-ui/popover'
import { PropsWithChildren } from 'react'

import { useDropdown } from './DropdownContext'

export const Popover = ({ children }: PropsWithChildren) => {
  const { getMenuProps } = useDropdown()

  return (
    <SparkPopover.Content
      asChild
      {...getMenuProps()}
      matchTriggerWidth
      onOpenAutoFocus={e => e.preventDefault()}
    >
      {children}
    </SparkPopover.Content>
  )
}

Popover.id = 'Popover'
Popover.displayName = 'Dropdown.Popover'
