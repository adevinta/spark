import * as RadixDrawer from '@radix-ui/react-dialog'
import { forwardRef, type ReactElement, type Ref } from 'react'

import { drawerContentStyles, type DrawerContentStylesProps } from './DrawerContent.styles'

export type ContentProps = RadixDrawer.DialogContentProps & DrawerContentStylesProps

export const Content = forwardRef(
  (
    { children, className, size = 'md', placement = 'right', ...rest }: ContentProps,
    ref: Ref<HTMLDivElement>
  ): ReactElement => (
    <RadixDrawer.Content
      data-spark-component="drawer-content"
      ref={ref}
      className={drawerContentStyles({
        size,
        placement,
        className,
      })}
      {...rest}
    >
      {children}
    </RadixDrawer.Content>
  )
)

Content.displayName = 'Drawer.Content'
