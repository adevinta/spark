import * as RadixDrawer from '@radix-ui/react-dialog'
import { cx } from 'class-variance-authority'
import { ElementRef, forwardRef } from 'react'

export type TitleElement = ElementRef<typeof RadixDrawer.Title>
export type DrawerTitleProps = RadixDrawer.DialogTitleProps

export const DrawerTitle = forwardRef<TitleElement, DrawerTitleProps>(
  ({ className, ...others }, ref) => (
    <RadixDrawer.Title
      ref={ref}
      className={cx('text-on-surface text-headline-2', className)}
      {...others}
    />
  )
)

DrawerTitle.displayName = 'Drawer.Title'
