import { Button, type ButtonProps } from '@spark-ui/button'
import { Icon } from '@spark-ui/icon'
import { Close as CloseSVG } from '@spark-ui/icons/dist/icons/Close'
import { cx } from 'class-variance-authority'
import { ElementRef, forwardRef } from 'react'

import { DrawerClose, type DrawerCloseProps } from './DrawerClose'

type CloseButtonElement = ElementRef<typeof DrawerClose>
export type DrawerCloseButtonProps = DrawerCloseProps &
  Pick<ButtonProps, 'size' | 'intent' | 'design' | 'aria-label'>

export const DrawerCloseButton = forwardRef<CloseButtonElement, DrawerCloseButtonProps>(
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
    <DrawerClose
      ref={ref}
      className={cx(['absolute', 'top-sm', 'right-sm'], className)}
      asChild
      {...rest}
    >
      <Button intent={intent} size={size} design={design} hasIconOnly aria-label={ariaLabel}>
        <Icon>{children}</Icon>
      </Button>
    </DrawerClose>
  )
)

DrawerCloseButton.displayName = 'Drawer.CloseButton'
