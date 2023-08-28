import * as RadixDialog from '@radix-ui/react-dialog'
import { ElementRef, forwardRef, type ReactElement } from 'react'

type TriggerElement = ElementRef<typeof RadixDialog.Trigger>
export type TriggerProps = RadixDialog.DialogTriggerProps

export const Trigger = forwardRef<TriggerElement, TriggerProps>(
  (props: TriggerProps, ref): ReactElement => <RadixDialog.Trigger ref={ref} {...props} />
)

Trigger.displayName = 'Dialog.Trigger'
