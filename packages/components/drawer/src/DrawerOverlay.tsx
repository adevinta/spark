import * as RadixDrawer from '@radix-ui/react-dialog'
import { cx } from 'class-variance-authority'
import { forwardRef, type ReactElement, type Ref } from 'react'

export type OverlayProps = RadixDrawer.DialogOverlayProps

export const Overlay = forwardRef(
  ({ className, ...rest }: OverlayProps, ref: Ref<HTMLDivElement>): ReactElement => (
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

Overlay.displayName = 'Drawer.Overlay'
