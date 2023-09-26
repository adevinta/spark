import { Button, type ButtonProps } from '@spark-ui/button'
import { Icon } from '@spark-ui/icon'
import { Close as CloseSVG } from '@spark-ui/icons/dist/icons/Close'
import { cx } from 'class-variance-authority'
import { ElementRef, forwardRef } from 'react'

import { Close, CloseProps } from './DialogClose'

type CloseButtonElement = ElementRef<typeof Close>
export type CloseButtonProps = CloseProps &
  Pick<ButtonProps, 'size' | 'intent' | 'design' | 'aria-label'>

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
    ref
  ) => (
    <Close
      ref={ref}
      className={cx(['absolute', 'top-md', 'right-xl'], className)}
      asChild
      {...rest}
    >
      <Button intent={intent} size={size} design={design} hasIconOnly aria-label={ariaLabel}>
        <Icon>{children}</Icon>
      </Button>
    </Close>
  )
)

CloseButton.displayName = 'Dialog.CloseButton'
