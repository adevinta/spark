import * as RadixTabs from '@radix-ui/react-tabs'
import { cva } from 'class-variance-authority'
import { forwardRef } from 'react'

export const styles = cva([
  'px-lg h-sz-44',
  'outline-none',
  'text-body-2 text-on-surface',
  'border-b-sm border-outline',
  // radix states
  'hover:text-outline',
  'focus-visible:ring-outline-high ring-inset focus-visible:border-none focus-visible:ring-2',
  'spark-state-active:text-primary spark-state-active:border-b-md spark-state-active:border-primary spark-state-active:mb-[1px]',
])

export interface TabsTriggerProps extends RadixTabs.TabsTriggerProps {
  disabled?: boolean
}

export const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  (
    {
      /**
       * Default Radix Primitive values
       * see https://www.radix-ui.com/docs/primitives/components/tabs#trigger
       */
      asChild = false,
      disabled = false,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <RadixTabs.Trigger
        ref={ref}
        className={styles()}
        asChild={asChild}
        disabled={disabled}
        {...rest}
      >
        {children}
      </RadixTabs.Trigger>
    )
  }
)
