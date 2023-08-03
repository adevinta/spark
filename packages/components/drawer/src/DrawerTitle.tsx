import * as RadixDrawer from '@radix-ui/react-dialog'
import { cx } from 'class-variance-authority'
import { ElementRef, forwardRef } from 'react'

export type TitleElement = ElementRef<typeof RadixDrawer.Title>
export type TitleProps = RadixDrawer.DialogTitleProps

export const Title = forwardRef<TitleElement, TitleProps>(({ className, ...others }, ref) => (
  <RadixDrawer.Title
    ref={ref}
    className={cx('text-on-surface text-headline-2', className)}
    {...others}
  />
))

Title.displayName = 'Drawer.Title'
