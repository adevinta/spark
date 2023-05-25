import * as RadixPopover from '@radix-ui/react-popover'

export type RootProps = RadixPopover.PopoverProps

export const Root = ({ children, modal = false, ...rest }: RootProps) => {
  return (
    <RadixPopover.Root data-spark-component="popover" modal={modal} {...rest}>
      {children}
    </RadixPopover.Root>
  )
}

Root.displayName = 'Popover'
