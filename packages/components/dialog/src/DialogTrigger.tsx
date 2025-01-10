import * as RadixDialog from '@radix-ui/react-dialog'
import { type ReactElement, Ref } from 'react'

export interface TriggerProps {
  /**
   * Children of the component.
   */
  children?: React.ReactNode
  /**
   * Change the component to the HTML tag or custom component of the only child.
   */
  asChild?: RadixDialog.DialogTriggerProps['asChild']
  ref?: Ref<HTMLButtonElement>
}

export const Trigger = (props: TriggerProps): ReactElement => <RadixDialog.Trigger {...props} />

Trigger.displayName = 'Dialog.Trigger'
