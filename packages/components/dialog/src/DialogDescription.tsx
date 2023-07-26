import * as RadixDialog from '@radix-ui/react-dialog'
import { type ReactElement } from 'react'

export type DescriptionProps = RadixDialog.DialogDescriptionProps

export const Description = ({ children, ...rest }: DescriptionProps): ReactElement => (
  <RadixDialog.Description data-spark-component="dialog-description" {...rest}>
    {children}
  </RadixDialog.Description>
)

Description.displayName = 'Dialog.Description'
