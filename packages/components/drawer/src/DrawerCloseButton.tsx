import { Icon } from '@spark-ui/icon'
import { IconButton, type IconButtonProps } from '@spark-ui/icon-button'
import { Close as CloseSVG } from '@spark-ui/icons/dist/icons/Close'
import { cx } from 'class-variance-authority'
import { ElementRef, forwardRef } from 'react'

import { DrawerClose, type DrawerCloseProps } from './DrawerClose'

type CloseButtonElement = ElementRef<typeof DrawerClose>
export type DrawerCloseButtonProps = DrawerCloseProps &
  Pick<IconButtonProps, 'size' | 'intent' | 'design' | 'aria-label'>

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
    ref,
  ) => (
    <DrawerClose
      ref={ref}
      className={cx(['absolute', 'top-sm', 'right-sm'], className)}
      asChild
      {...rest}
    >
      <IconButton intent={intent} size={size} design={design} aria-label={ariaLabel}>
        <Icon>{children}</Icon>
      </IconButton>
    </DrawerClose>
  ),
)

DrawerCloseButton.displayName = 'Drawer.CloseButton'
