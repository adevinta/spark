import { Popover as SparkPopover } from '@spark-ui/popover'
import { PropsWithChildren, useEffect } from 'react'

import { useDropdown } from './DropdownContext'

export const Popover = ({ children }: PropsWithChildren) => {
  const { getMenuProps, setHasPopover } = useDropdown()

  useEffect(() => {
    setHasPopover(true)

    return () => setHasPopover(false)
  }, [setHasPopover])

  return (
    <SparkPopover.Content
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
