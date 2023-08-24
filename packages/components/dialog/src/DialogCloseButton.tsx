import { Icon } from '@spark-ui/icon'
import { IconButton, type IconButtonProps } from '@spark-ui/icon-button'
import { Close as CloseSVG } from '@spark-ui/icons/dist/icons/Close'
import { cx } from 'class-variance-authority'
import { ElementRef, forwardRef } from 'react'

import { Close, CloseProps } from './DialogClose'

type CloseButtonElement = ElementRef<typeof Close>
export type CloseButtonProps = CloseProps &
  Pick<IconButtonProps, 'size' | 'intent' | 'design' | 'aria-label'>

export const CloseButton = forwardRef<CloseButtonElement, CloseButtonProps>(
  (
    {
      'aria-label': ariaLabel,
      className,
      size = 'md',
      intent = 'neutral',
      design = 'ghost',
      children = <CloseSVG />,
      ...rest
    },
    ref,
  ) => (
    <Close
      ref={ref}
      className={cx(['absolute', 'top-sm', 'right-sm'], className)}
      asChild
      {...rest}
    >
      <IconButton intent={intent} size={size} design={design} aria-label={ariaLabel}>
        <Icon>{children}</Icon>
      </IconButton>
    </Close>
  ),
)

CloseButton.displayName = 'Dialog.CloseButton'
