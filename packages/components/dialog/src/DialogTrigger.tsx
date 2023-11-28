import * as RadixDialog from '@radix-ui/react-dialog'
import { ElementRef, forwardRef, type ReactElement } from 'react'

type TriggerElement = ElementRef<typeof RadixDialog.Trigger>
export interface TriggerProps {
  /**
   * Change the component to the HTML tag or custom component of the only child.
   */
  asChild?: RadixDialog.DialogTriggerProps['asChild']
}

export const Trigger = forwardRef<TriggerElement, TriggerProps>(
  (props: TriggerProps, ref): ReactElement => <RadixDialog.Trigger ref={ref} {...props} />
)

Trigger.displayName = 'Dialog.Trigger'
