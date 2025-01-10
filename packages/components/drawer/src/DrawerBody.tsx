import { type ReactNode, RefObject } from 'react'

import { drawerBodyStyles, type DrawerBodyStylesProps } from './DrawerBody.styles'

export interface DrawerBodyProps extends DrawerBodyStylesProps {
  children: ReactNode
  className?: string
  ref?: RefObject<HTMLDivElement>
}

export const DrawerBody = ({
  children,
  inset = false,
  className,
  ref,
  ...rest
}: DrawerBodyProps) => (
  <div ref={ref} className={drawerBodyStyles({ inset, className })} {...rest}>
    {children}
  </div>
)

DrawerBody.displayName = 'Drawer.Body'
