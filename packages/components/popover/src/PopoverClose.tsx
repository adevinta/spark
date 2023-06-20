import * as RadixPopover from '@radix-ui/react-popover'
import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { Close as CloseSVG } from '@spark-ui/icons/dist/icons/Close'
import { cx } from 'class-variance-authority'
import { forwardRef } from 'react'

export type CloseProps = RadixPopover.PopoverCloseProps & {
  'aria-label': string
}

export const Close = forwardRef<HTMLButtonElement, CloseProps>(
  ({ 'aria-label': ariaLabel, className, ...rest }, ref) => {
    const styles = cx('absolute top-md right-md', className)

    return (
      <RadixPopover.Close
        data-spark-component="Popover.Close"
        ref={ref}
        className={styles}
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

Close.displayName = 'Popover.Close'
