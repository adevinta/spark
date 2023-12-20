import { Popover as SparkPopover } from '@spark-ui/popover'
import { cx } from 'class-variance-authority'
import { ComponentProps, useEffect } from 'react'

import { useDropdownContext } from './DropdownContext'

export const Popover = ({
  children,
  matchTriggerWidth = true,
  sideOffset = 4,
  ...props
}: ComponentProps<typeof SparkPopover.Content>) => {
  const { isOpen, hasPopover, setHasPopover } = useDropdownContext()

  useEffect(() => {
    setHasPopover(true)

    return () => setHasPopover(false)
  }, [setHasPopover])

  if (!hasPopover) return children

  return (
    <SparkPopover.Content
      inset
      asChild
      matchTriggerWidth={matchTriggerWidth}
      className={cx(!isOpen && 'hidden', '!z-dropdown')}
      sideOffset={sideOffset}
      {...props}
    >
      {children}
    </SparkPopover.Content>
  )
}

Popover.id = 'Popover'
Popover.displayName = 'Dropdown.Popover'
