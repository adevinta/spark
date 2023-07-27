import * as RadixDialog from '@radix-ui/react-dialog'
import { Icon } from '@spark-ui/icon'
import { IconButton } from '@spark-ui/icon-button'
import { Close as CloseSVG } from '@spark-ui/icons/dist/icons/Close'
import { cx } from 'class-variance-authority'
import { type ReactElement } from 'react'

export type CloseButtonProps = RadixDialog.DialogCloseProps & {
  'aria-label': string
}

export const CloseButton = ({
  'aria-label': ariaLabel,
  className,
  children,
  ...rest
}: CloseButtonProps): ReactElement => (
  <RadixDialog.Close
    {...rest}
    asChild
    className={cx(['absolute', 'top-sm', 'right-sm'], className)}
  >
    <IconButton size="md" intent="neutral" design="ghost" aria-label={ariaLabel}>
      <Icon>
        <CloseSVG />
      </Icon>
    </IconButton>
  </RadixDialog.Close>
)

CloseButton.displayName = 'Dialog.CloseButton'
