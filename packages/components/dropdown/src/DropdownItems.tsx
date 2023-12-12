import { cx } from 'class-variance-authority'
import { forwardRef, ReactNode, type Ref } from 'react'

import { useDropdownContext } from './DropdownContext'

interface ItemsProps {
  children: ReactNode
}

export const Items = forwardRef(({ children }: ItemsProps, forwardedRef: Ref<HTMLUListElement>) => {
  const { isOpen, getMenuProps, hasPopover } = useDropdownContext()

  return (
    <ul
      ref={forwardedRef}
      {...getMenuProps()}
      className={cx(
        'flex  flex-col',
        isOpen ? 'block' : 'pointer-events-none opacity-0',
        hasPopover ? 'max-h-sz-320 overflow-y-auto p-lg' : ''
      )}
      data-spark-component="dropdown-items"
    >
      {children}
    </ul>
  )
})

Items.displayName = 'Dropdown.Items'
