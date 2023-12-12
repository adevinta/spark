import { Popover as SparkPopover } from '@spark-ui/popover'
import { cx } from 'class-variance-authority'
import { forwardRef, PropsWithChildren, Ref, useEffect } from 'react'

import { useDropdownContext } from './DropdownContext'

export const Popover = forwardRef(
  ({ children }: PropsWithChildren, forwardedRef: Ref<HTMLDivElement>) => {
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
        matchTriggerWidth
        onOpenAutoFocus={(event: Event) => event.preventDefault()}
        className={cx(!isOpen && 'hidden', '!z-dropdown')}
        sideOffset={4}
        data-spark-component="dropdown-popover"
      >
        {children}
      </SparkPopover.Content>
    )
  }
)

Popover.displayName = 'Dropdown.Popover'
