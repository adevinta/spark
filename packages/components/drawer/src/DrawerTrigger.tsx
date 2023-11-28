import * as RadixDrawer from '@radix-ui/react-dialog'
import { ElementRef, forwardRef, type ReactElement } from 'react'

type TriggerElement = ElementRef<typeof RadixDrawer.Trigger>
// export type DrawerTriggerProps = RadixDrawer.DialogTriggerProps
export interface DrawerTriggerProps {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   */
  asChild?: boolean
}

export const DrawerTrigger = forwardRef<TriggerElement, DrawerTriggerProps>(
  (props: DrawerTriggerProps, ref): ReactElement => <RadixDrawer.Trigger ref={ref} {...props} />
)

DrawerTrigger.displayName = 'Drawer.Trigger'
