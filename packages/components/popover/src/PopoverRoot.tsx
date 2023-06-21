import * as RadixPopover from '@radix-ui/react-popover'

import { PopoverProvider } from './PopoverContext'

export type RootProps = RadixPopover.PopoverProps

export const Root = ({ children, modal = false, ...rest }: RootProps) => {
  return (
    <PopoverProvider>
      <RadixPopover.Root data-spark-component="popover" modal={modal} {...rest}>
        {children}
      </RadixPopover.Root>
    </PopoverProvider>
  )
}

Root.displayName = 'Popover'
