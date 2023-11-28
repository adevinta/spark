import { Popover as SparkPopover } from '@spark-ui/popover'
import { cx } from 'class-variance-authority'
import { PropsWithChildren, useEffect } from 'react'

import { useDropdown } from './DropdownContext'

export const Popover = ({ children }: PropsWithChildren) => {
  const { isOpen, hasPopover, setHasPopover } = useDropdown()

  useEffect(() => {
    setHasPopover(true)

    return () => setHasPopover(false)
  }, [setHasPopover])

  if (!hasPopover) return children

  return (
    <SparkPopover.Content
      matchTriggerWidth
      onOpenAutoFocus={e => e.preventDefault()}
      className={cx(!isOpen && 'hidden', '!z-dropdown')}
      sideOffset={4}
    >
      {children}
    </SparkPopover.Content>
  )
}

Popover.id = 'Popover'
Popover.displayName = 'Dropdown.Popover'
