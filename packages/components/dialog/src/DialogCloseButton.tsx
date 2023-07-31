import * as RadixDialog from '@radix-ui/react-dialog'
import { Icon } from '@spark-ui/icon'
import { IconButton, type IconButtonProps } from '@spark-ui/icon-button'
import { Close as CloseSVG } from '@spark-ui/icons/dist/icons/Close'
import { cx } from 'class-variance-authority'
import { type ReactElement } from 'react'

export type CloseButtonProps = RadixDialog.DialogCloseProps &
  Pick<IconButtonProps, 'size' | 'intent' | 'design' | 'aria-label'>

export const CloseButton = ({
  'aria-label': ariaLabel,
  className,
  size = 'md',
  intent = 'neutral',
  design = 'ghost',
  children = <CloseSVG />,
  ...rest
}: CloseButtonProps): ReactElement => (
  <RadixDialog.Close
    asChild
    className={cx(['absolute', 'top-sm', 'right-sm'], className)}
    {...rest}
  >
    <IconButton intent={intent} size={size} design={design} aria-label={ariaLabel}>
      <Icon>{children}</Icon>
    </IconButton>
  </RadixDialog.Close>
)

CloseButton.displayName = 'Dialog.CloseButton'
