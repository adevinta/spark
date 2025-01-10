import * as RadixDrawer from '@radix-ui/react-dialog'
import { cx } from 'class-variance-authority'
import { type ReactElement, RefObject } from 'react'

export type DrawerOverlayProps = RadixDrawer.DialogOverlayProps & {
  ref?: RefObject<HTMLDivElement>
}

export const DrawerOverlay = ({ className, ref, ...rest }: DrawerOverlayProps): ReactElement => (
  <RadixDrawer.Overlay
    ref={ref}
    className={cx(
      ['fixed', 'top-none', 'left-none', 'w-screen', 'h-screen', 'z-overlay'],
      ['bg-overlay/dim-3'],
      ['data-[state=open]:animate-fade-in'],
      ['data-[state=closed]:animate-fade-out'],
      className
    )}
    {...rest}
  />
)

DrawerOverlay.displayName = 'Drawer.Overlay'
