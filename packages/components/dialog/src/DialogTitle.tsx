import * as RadixDialog from '@radix-ui/react-dialog'
import { cx } from 'class-variance-authority'
import { type ReactElement } from 'react'

export type TitleProps = RadixDialog.DialogTitleProps

export const Title = ({ className, children, ...rest }: TitleProps): ReactElement => (
  <RadixDialog.Title {...rest} className={cx('text-on-surface text-headline-2', className)}>
    {children}
  </RadixDialog.Title>
)

Title.displayName = 'Dialog.Title'
