import * as RadixDrawer from '@radix-ui/react-dialog'
import { cx } from 'class-variance-authority'
import { RefObject } from 'react'

export type DrawerTitleProps = RadixDrawer.DialogTitleProps & {
  ref?: RefObject<HTMLHeadingElement>
}

export const DrawerTitle = ({ className, ref, ...others }: DrawerTitleProps) => (
  <RadixDrawer.Title
    ref={ref}
    className={cx('text-headline-2 text-on-surface', className)}
    {...others}
  />
)

DrawerTitle.displayName = 'Drawer.Title'
