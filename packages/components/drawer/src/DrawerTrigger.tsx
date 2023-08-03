import * as RadixDrawer from '@radix-ui/react-dialog'
import { ElementRef, forwardRef, type ReactElement } from 'react'

type TriggerElement = ElementRef<typeof RadixDrawer.Trigger>
export type TriggerProps = RadixDrawer.DialogTriggerProps

export const Trigger = forwardRef<TriggerElement, TriggerProps>(
  (props: TriggerProps, ref): ReactElement => <RadixDrawer.Trigger ref={ref} {...props} />
)

Trigger.displayName = 'Drawer.Trigger'
