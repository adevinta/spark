import { Popover as SparkPopover } from '@spark-ui/popover'
import { cx } from 'class-variance-authority'
import { ComponentProps, Ref, useEffect } from 'react'

import { useComboboxContext } from './ComboboxContext'

interface PopoverProps extends ComponentProps<typeof SparkPopover.Content> {
  ref?: Ref<HTMLDivElement>
}

export const Popover = ({
  children,
  matchTriggerWidth = true,
  sideOffset = 4,
  className,
  ref: forwardedRef,
  ...props
}: PopoverProps) => {
  const ctx = useComboboxContext()

  useEffect(() => {
    ctx.setHasPopover(true)

    return () => ctx.setHasPopover(false)
  }, [])

  return (
    <SparkPopover.Content
      ref={forwardedRef}
      inset
      asChild
      matchTriggerWidth={matchTriggerWidth}
      className={cx('relative !z-dropdown', className)}
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

Popover.displayName = 'Combobox.Popover'
