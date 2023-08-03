import * as RadixDrawer from '@radix-ui/react-dialog'
import { forwardRef, type ReactElement, type Ref } from 'react'

import { drawerContentStyles, type DrawerContentStylesProps } from './DrawerContent.styles'

export type DrawerContentProps = RadixDrawer.DialogContentProps & DrawerContentStylesProps

export const DrawerContent = forwardRef(
  (
    { children, className, size = 'md', side = 'right', ...rest }: DrawerContentProps,
    ref: Ref<HTMLDivElement>
  ): ReactElement => (
    <RadixDrawer.Content
      data-spark-component="drawer-content"
      ref={ref}
      className={drawerContentStyles({
        size,
        side,
        className,
      })}
      {...rest}
    >
      {children}
    </RadixDrawer.Content>
  )
)

DrawerContent.displayName = 'Drawer.Content'
