import { cx } from 'class-variance-authority'
import { ReactNode } from 'react'

import { useDropdownContext } from './DropdownContext'

interface ItemsProps {
  children: ReactNode
}

export const Items = ({ children }: ItemsProps) => {
  const { isOpen, getMenuProps, hasPopover } = useDropdownContext()

  return (
    <ul
      {...getMenuProps()}
      className={cx(
        'flex  flex-col',
        isOpen ? 'block' : 'pointer-events-none opacity-0',
        hasPopover ? 'max-h-sz-320 overflow-y-auto p-lg' : ''
      )}
    >
      {children}
    </ul>
  )
}

Items.id = 'Items'
Items.displayName = 'Dropdown.Items'
