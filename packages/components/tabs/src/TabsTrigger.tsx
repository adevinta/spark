import * as RadixTabs from '@radix-ui/react-tabs'
import { cva } from 'class-variance-authority'

export const styles = cva([
  'flex-1 p-sm',
  // first item
  'first:rounded-tl-sm first:border-l-transparent',
  // last item
  'last:rounded-tr-sm last:border-l-transparent last:border-r-transparent',
  // borders
  'border-sm',
  'border-l-none',
  'border-t-transparent',
  'border-b-sm border-b first:border-r-sm last:border-l-sm',
  'border-b-primary-variant',
  // radix states
  'spark-state-active:border-b-sm',
  'spark-state-active:border-b-primary',
  'focus-visible:spark-state-active:border-b-transparent',
  'spark-state-active:bg-primary spark-state-active:text-on-primary',
  'focus:z-raised focus:outline-none focus-visible:ring-2 focus-visible:ring-outline-high',
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
