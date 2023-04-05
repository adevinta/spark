import * as RadixTabs from '@radix-ui/react-tabs'
import { cva } from 'class-variance-authority'

export const styles = cva(['flex min-w-full mb-lg'])

export function TabsList({
  children,
  asChild = false,
  loop = true,
  ...rest
}: RadixTabs.TabsListProps) {
  const defaultRadixValues = {
    asChild,
    loop,
  }

  return (
    <RadixTabs.List className={styles()} {...defaultRadixValues} {...rest}>
      {children}
    </RadixTabs.List>
  )
}

TabsList.displayName = TabsList.name
