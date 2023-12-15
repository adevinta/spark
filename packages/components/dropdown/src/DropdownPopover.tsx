import { Popover as SparkPopover } from '@spark-ui/popover'
import { cx } from 'class-variance-authority'
import { forwardRef, ComponentProps, Ref, useEffect } from 'react'

import { useDropdownContext } from './DropdownContext'

export const Popover = forwardRef(({
  children,
  matchTriggerWidth = true,
  sideOffset = 4,
  ...props
}: ComponentProps<typeof SparkPopover.Content>, forwardedRef: Ref<HTMLDivElement>) => {
  const { isOpen, hasPopover, setHasPopover } = useDropdownContext()

  useEffect(() => {
    setHasPopover(true)

    return () => setHasPopover(false)
  }, [setHasPopover])

  if (!hasPopover) return children

  return (
    <SparkPopover.Content
      ref={forwardedRef}
      inset
      matchTriggerWidth={matchTriggerWidth}
      onOpenAutoFocus={e => e.preventDefault()}
      className={cx(!isOpen && 'hidden', '!z-dropdown')}
      sideOffset={sideOffset}
      data-spark-component="dropdown-popover"
      {...props}
    >
      {children}
    </SparkPopover.Content>
  )
}

Popover.displayName = 'Dropdown.Popover'
