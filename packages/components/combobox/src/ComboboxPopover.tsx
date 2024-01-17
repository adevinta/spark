import { Popover as SparkPopover } from '@spark-ui/popover'
import { cx } from 'class-variance-authority'
import { ComponentProps, forwardRef, Ref, useEffect } from 'react'

import { useComboboxContext } from './ComboboxContext'

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
    const { isOpen, setHasPopover } = useComboboxContext()

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
        onOpenAutoFocus={e => {
          /**
           * With a combobox pattern, the focus should remain on the trigger at all times.
           * Passing the focus to the combobox popover would break keyboard navigation.
           */
          e.preventDefault()
        }}
        {...props}
        data-spark-component="combobox-popover"
      >
        {children}
      </SparkPopover.Content>
    )
  }
)

Popover.displayName = 'Combobox.Popover'
