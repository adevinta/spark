import * as RadixPopover from '@radix-ui/react-popover'
import { Button } from '@spark-ui/button'
import { Icon } from '@spark-ui/icon'
import { Close as CloseSVG } from '@spark-ui/icons/dist/icons/Close'
import { cx } from 'class-variance-authority'
import { forwardRef, useLayoutEffect } from 'react'

import { usePopover } from './PopoverContext'

export type CloseButtonProps = RadixPopover.PopoverCloseProps & {
  'aria-label': string
}

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  ({ 'aria-label': ariaLabel, className, ...rest }, ref) => {
    const { setHasCloseButton } = usePopover()

    useLayoutEffect(() => {
      setHasCloseButton(true)

      return () => setHasCloseButton(false)
    }, [setHasCloseButton])

    return (
      <RadixPopover.Close
        data-spark-component="popover-close-button"
        ref={ref}
        className={cx('absolute right-md top-md', className)}
        asChild
        {...rest}
      >
        <Button size="sm" intent="neutral" design="ghost" hasIconOnly aria-label={ariaLabel}>
          <Icon>
            <CloseSVG />
          </Icon>
        </Button>
      </RadixPopover.Close>
    )
  }
)

CloseButton.displayName = 'Popover.CloseButton'
