import * as RadixDrawer from '@radix-ui/react-dialog'
import { forwardRef, type Ref } from 'react'

import { drawerContentStyles, type DrawerContentStylesProps } from './DrawerContent.styles'

export type DrawerContentProps = RadixDrawer.DialogContentProps & DrawerContentStylesProps

export const DrawerContent = forwardRef(
  (
    { className, size = 'md', side = 'right', ...rest }: DrawerContentProps,
    ref: Ref<HTMLDivElement>
  ) => (
    <RadixDrawer.Content
      data-spark-component="drawer-content"
      ref={ref}
      className={drawerContentStyles({
        size,
        side,
        className,
      })}
      {...rest}
    />
  )
)

DrawerContent.displayName = 'Drawer.Content'
