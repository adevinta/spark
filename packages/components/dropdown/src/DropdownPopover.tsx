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

    return isOpen ? (
      <SparkPopover.Portal>
        <SparkPopover.Content
          ref={forwardedRef}
          inset
          asChild
          matchTriggerWidth={matchTriggerWidth}
          className={cx('!z-dropdown', className)}
          sideOffset={sideOffset}
          onOpenAutoFocus={e => {
            /**
             * With a combobox pattern, the focus should remain on the trigger at all times.
             * Passing the focus to the dropdown popover would break keyboard navigation.
             */
            e.preventDefault()
          }}
          {...props}
          data-spark-component="dropdown-popover"
        >
          {children}
        </SparkPopover.Content>
      </SparkPopover.Portal>
    ) : (
      children
    )
  }
)

Popover.displayName = 'Dropdown.Popover'
