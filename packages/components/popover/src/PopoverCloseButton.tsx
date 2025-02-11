import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { Close as CloseSVG } from '@spark-ui/icons/dist/icons/Close'
import { cx } from 'class-variance-authority'
import { Popover as RadixPopover } from 'radix-ui'
import { Ref } from 'react'

export type CloseButtonProps = RadixPopover.PopoverCloseProps & {
  'aria-label': string
  ref?: Ref<HTMLButtonElement>
}

export const CloseButton = ({
  'aria-label': ariaLabel,
  className,
  ref,
  ...rest
}: CloseButtonProps) => {
  return (
    <RadixPopover.Close
      data-spark-component="popover-close-button"
      ref={ref}
      className={cx('right-md top-md absolute', className)}
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

CloseButton.displayName = 'Popover.CloseButton'
