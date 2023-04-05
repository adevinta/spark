import * as RadixTabs from '@radix-ui/react-tabs'
import { cva } from 'class-variance-authority'

export const styles = cva([
  'px-lg h-sz-44',
  'outline-none',
  'text-body-2 text-on-surface',
  'border-b-sm border-outline',
  // radix states
  'hover:text-outline',
  'ring-inset focus-visible:ring-2 focus-visible:ring-outline-high focus-visible:border-none',
  'spark-state-active:text-primary spark-state-active:border-b-md spark-state-active:border-primary spark-state-active:mb-[1px]',
])

interface Props extends RadixTabs.TabsTriggerProps {
  disabled?: boolean
}

export function TabsTrigger({ children, asChild = false, disabled = false, ...rest }: Props) {
  const defaultRadixValues = {
    asChild,
    disabled,
  }

  return (
    <RadixTabs.Trigger className={styles()} {...defaultRadixValues} {...rest}>
      {children}
    </RadixTabs.Trigger>
  )
}

TabsTrigger.displayName = TabsTrigger.name
