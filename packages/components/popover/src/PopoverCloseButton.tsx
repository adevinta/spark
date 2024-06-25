import * as RadixPopover from '@radix-ui/react-popover'
import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { Close as CloseSVG } from '@spark-ui/icons/dist/icons/Close'
import { cx } from 'class-variance-authority'
import { forwardRef } from 'react'

export type CloseButtonProps = RadixPopover.PopoverCloseProps & {
  'aria-label': string
}

export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  ({ 'aria-label': ariaLabel, className, ...rest }, ref) => {
    return (
      <RadixPopover.Close
        data-spark-component="popover-close-button"
        ref={ref}
        className={cx('absolute right-md top-md', className)}
        asChild
        {...rest}
      >
        <IconButton size="sm" intent="neutral" design="ghost" aria-label={ariaLabel}>
          <Icon>
            <CloseSVG />
          </Icon>
        </IconButton>
      </RadixPopover.Close>
    )
  }
)

CloseButton.displayName = 'Popover.CloseButton'
