import { forwardRef, type ReactNode, type Ref } from 'react'

import { drawerBodyStyles, type DrawerBodyStylesProps } from './DrawerBody.styles'

export interface DrawerBodyProps extends DrawerBodyStylesProps {
  children: ReactNode
  className?: string
}

export const DrawerBody = forwardRef(
  ({ children, inset = false, className, ...rest }: DrawerBodyProps, ref: Ref<HTMLDivElement>) => (
    <div ref={ref} className={drawerBodyStyles({ inset, className })} {...rest}>
      {children}
    </div>
  )
)

DrawerBody.displayName = 'Drawer.Body'
