import * as RadixDialog from '@radix-ui/react-dialog'
import { type ReactElement } from 'react'

export type TitleProps = RadixDialog.DialogTitleProps

export const Title = ({ children, ...rest }: TitleProps): ReactElement => (
  <RadixDialog.Title data-spark-component="dialog-title" {...rest}>
    {children}
  </RadixDialog.Title>
)

Title.displayName = 'Dialog.Title'
