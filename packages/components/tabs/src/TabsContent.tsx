import * as RadixTabs from '@radix-ui/react-tabs'
import { cva } from 'class-variance-authority'

export const styles = cva('')

export function TabsContent({ children, asChild = false, ...rest }: RadixTabs.TabsContentProps) {
  const defaultRadixValues = {
    asChild,
  }

  return (
    <RadixTabs.Content className={styles()} {...defaultRadixValues} {...rest}>
      {children}
    </RadixTabs.Content>
  )
}

TabsContent.displayName = TabsContent.name
