import { Icon } from '@spark-ui/icon'
import { IconButton, type IconButtonProps } from '@spark-ui/icon-button'
import { Close as CloseSVG } from '@spark-ui/icons/dist/icons/Close'
import { cx } from 'class-variance-authority'
import { ElementRef, forwardRef } from 'react'

import { Close, CloseProps } from './DialogClose'

type CloseButtonElement = ElementRef<typeof Close>
export type CloseButtonProps = CloseProps &
  Pick<IconButtonProps, 'size' | 'intent' | 'design' | 'aria-label'>

const Root = forwardRef<CloseButtonElement, CloseButtonProps>(
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
    ref
  ) => {
    return (
      <Close
        data-part="close"
        ref={ref}
        className={cx(['absolute', 'top-md', 'right-xl'], className)}
        asChild
        {...rest}
      >
        <IconButton intent={intent} size={size} design={design} aria-label={ariaLabel}>
          <Icon>{children}</Icon>
        </IconButton>
      </Close>
    )
  }
)

export const CloseButton = Object.assign(Root, {
  id: 'CloseButton',
})

CloseButton.displayName = 'Dialog.CloseButton'
