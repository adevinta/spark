import { Popover as SparkPopover } from '@spark-ui/popover'
import { PropsWithChildren } from 'react'

import { useDropdown } from './DropdownContext'

export const Items = ({ children }: PropsWithChildren) => {
  const { isOpen, getMenuProps } = useDropdown()

  return (
    <SparkPopover.Content
      asChild
      {...getMenuProps()}
      matchTriggerWidth
      onOpenAutoFocus={e => e.preventDefault()}
    >
      <ul
        className={`flex max-h-sz-320 flex-col overflow-auto ${
          isOpen ? 'block' : 'pointer-events-none opacity-0'
        }`}
      >
        {children}
      </ul>
    </SparkPopover.Content>
  )
}

Items.id = 'Items'
Items.displayName = 'Dropdown.Items'
