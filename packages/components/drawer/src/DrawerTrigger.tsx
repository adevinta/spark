import * as RadixDrawer from '@radix-ui/react-dialog'
import { ElementRef, forwardRef, type ReactElement } from 'react'

type TriggerElement = ElementRef<typeof RadixDrawer.Trigger>
export type DrawerTriggerProps = RadixDrawer.DialogTriggerProps

export const DrawerTrigger = forwardRef<TriggerElement, DrawerTriggerProps>(
  (props: DrawerTriggerProps, ref): ReactElement => <RadixDrawer.Trigger ref={ref} {...props} />,
)

DrawerTrigger.displayName = 'Drawer.Trigger'
