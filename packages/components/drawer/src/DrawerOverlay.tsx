import * as RadixDrawer from '@radix-ui/react-dialog'
import { cx } from 'class-variance-authority'
import { forwardRef, type ReactElement, type Ref } from 'react'

export type DrawerOverlayProps = RadixDrawer.DialogOverlayProps

export const DrawerOverlay = forwardRef(
  ({ className, ...rest }: DrawerOverlayProps, ref: Ref<HTMLDivElement>): ReactElement => (
    <RadixDrawer.Overlay
      ref={ref}
      className={cx(
        ['fixed', 'top-none', 'left-none', 'w-screen', 'h-screen', 'z-overlay'],
        ['bg-overlay/dim-3'],
        className
      )}
      {...rest}
    />
  )
)

DrawerOverlay.displayName = 'Drawer.Overlay'
