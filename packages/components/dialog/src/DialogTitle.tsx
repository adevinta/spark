import * as RadixDialog from '@radix-ui/react-dialog'
import { cx } from 'class-variance-authority'
import { ElementRef, forwardRef } from 'react'

export type TitleElement = ElementRef<typeof RadixDialog.Title>
export type TitleProps = RadixDialog.DialogTitleProps

export const Title = forwardRef<TitleElement, TitleProps>(({ className, ...others }, ref) => (
  <RadixDialog.Title
    ref={ref}
    className={cx('text-on-surface text-headline-2', className)}
    {...others}
  />
))

Title.displayName = 'Dialog.Title'
