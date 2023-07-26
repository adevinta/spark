import * as RadixDialog from '@radix-ui/react-dialog'
import { type ReactElement } from 'react'

export type CloseButtonProps = RadixDialog.DialogCloseProps

export const CloseButton = ({ children, ...rest }: CloseButtonProps): ReactElement => (
  <RadixDialog.Close data-spark-component="dialog-close-button" {...rest}>
    {children}
  </RadixDialog.Close>
)

CloseButton.displayName = 'Dialog.CloseButton'
