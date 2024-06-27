import * as RadixDialog from '@radix-ui/react-dialog'
import { cx } from 'class-variance-authority'
import { ElementRef, forwardRef } from 'react'

export type TitleElement = ElementRef<typeof RadixDialog.Title>
export type TitleProps = RadixDialog.DialogTitleProps

export const Title = forwardRef<TitleElement, TitleProps>(({ className, ...others }, ref) => {
  return (
    <RadixDialog.Title
      ref={ref}
      className={cx(
        'text-headline-1 text-on-surface',
        'group-has-[[data-part=close]]:pr-3xl',
        className
      )}
      {...others}
    />
  )
})

Title.displayName = 'Dialog.Title'
