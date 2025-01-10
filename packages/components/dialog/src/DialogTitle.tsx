import * as RadixDialog from '@radix-ui/react-dialog'
import { cx } from 'class-variance-authority'
import { RefObject } from 'react'

export type TitleProps = RadixDialog.DialogTitleProps & {
  ref?: RefObject<HTMLHeadingElement>
}

export const Title = ({ className, ref, ...others }: TitleProps) => {
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
}

Title.displayName = 'Dialog.Title'
