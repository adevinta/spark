import * as RadixTabs from '@radix-ui/react-tabs'
import { cva } from 'class-variance-authority'
import { PropsWithChildren } from 'react'

export const styles = cva(['flex', 'flex-col', 'px-sm', 'py-sm'])

export function TabsRoot({
  children,
  asChild = false,
  orientation = 'horizontal',
  activationMode = 'automatic',
  ...rest
}: PropsWithChildren<RadixTabs.TabsProps>) {
  const defaultRadixValues = {
    asChild,
    orientation,
    activationMode,
  }

  return (
    <RadixTabs.Root className={styles()} {...defaultRadixValues} {...rest}>
      {children}
    </RadixTabs.Root>
  )
}

TabsRoot.displayName = TabsRoot.name
