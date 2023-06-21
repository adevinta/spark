import * as RadixPopover from '@radix-ui/react-popover'
import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { Close as CloseSVG } from '@spark-ui/icons/dist/icons/Close'
import { cx } from 'class-variance-authority'
import { forwardRef, useLayoutEffect } from 'react'

import { usePopover } from './PopoverContext'

export type CloseProps = RadixPopover.PopoverCloseProps & {
  label: string
}

export const Close = forwardRef<HTMLButtonElement, CloseProps>(
  ({ label, className, ...rest }, ref) => {
    const { setHasCloseButton } = usePopover()

    useLayoutEffect(() => {
      setHasCloseButton(true)

      return () => setHasCloseButton(false)
    }, [])

    return (
      <RadixPopover.Close
        data-spark-component="popover-close"
        ref={ref}
        className={cx('absolute top-md right-md', className)}
        asChild
        {...rest}
      >
        <IconButton size="sm" intent="neutral" design="ghost" aria-label={label}>
          <Icon>
            <CloseSVG />
          </Icon>
        </IconButton>
      </RadixPopover.Close>
    )
  }
)

Close.displayName = 'Popover.Close'
