import * as RadixDialog from '@radix-ui/react-dialog'
import { type ReactElement } from 'react'

export type TriggerProps = RadixDialog.DialogTriggerProps

export const Trigger = ({ children, ...rest }: TriggerProps): ReactElement => (
  <RadixDialog.Trigger data-spark-component="dialog-trigger" {...rest}>
    {children}
  </RadixDialog.Trigger>
)

Trigger.displayName = 'Dialog.Trigger'
