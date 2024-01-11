import { Popover as SparkPopover } from '@spark-ui/popover'
import { cx } from 'class-variance-authority'
import { ComponentProps, forwardRef, Ref, useEffect } from 'react'

import { useDropdownContext } from './DropdownContext'

export const Popover = forwardRef(
  (
    {
      children,
      matchTriggerWidth = true,
      sideOffset = 4,
      className,
      ...props
    }: ComponentProps<typeof SparkPopover.Content>,
    forwardedRef: Ref<HTMLDivElement>
  ) => {
    const { isOpen, setHasPopover } = useDropdownContext()

    useEffect(() => {
      setHasPopover(true)

      return () => setHasPopover(false)
    }, [])

    return (
      <SparkPopover.Content
        ref={forwardedRef}
        inset
        asChild
        matchTriggerWidth={matchTriggerWidth}
        className={cx('!z-dropdown', !isOpen && 'hidden', className)}
        sideOffset={sideOffset}
        {...props}
        data-spark-component="dropdown-popover"
      >
        {children}
      </SparkPopover.Content>
    )
  }
)

Popover.displayName = 'Dropdown.Popover'
