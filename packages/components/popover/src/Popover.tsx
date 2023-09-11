import * as RadixPopover from '@radix-ui/react-popover'

import { PopoverProvider } from './PopoverContext'

export type PopoverProps = RadixPopover.PopoverProps

export const Popover = ({ children, modal = false, ...rest }: PopoverProps) => {
  return (
    <PopoverProvider>
      <RadixPopover.Root data-spark-component="popover" modal={modal} {...rest}>
        {children}
      </RadixPopover.Root>
    </PopoverProvider>
  )
}

Popover.displayName = 'Popover'
