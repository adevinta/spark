import * as RadixDrawer from '@radix-ui/react-dialog'
import { cx } from 'class-variance-authority'
import { Ref } from 'react'

export type DrawerTitleProps = RadixDrawer.DialogTitleProps & {
  ref?: Ref<HTMLHeadingElement>
}

export const DrawerTitle = ({ className, ref, ...others }: DrawerTitleProps) => (
  <RadixDrawer.Title
    ref={ref}
    className={cx('text-headline-2 text-on-surface', className)}
    {...others}
  />
)

DrawerTitle.displayName = 'Drawer.Title'
