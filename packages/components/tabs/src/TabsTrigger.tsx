import * as RadixTabs from '@radix-ui/react-tabs'
import { forwardRef } from 'react'

import { tabsTriggerVariants } from './Tabs.styles'
import { useTabsContext } from './TabsContext'

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
    const { intent, size } = useTabsContext()

    return (
      <RadixTabs.Trigger
        ref={ref}
        className={tabsTriggerVariants({ intent, size })}
        asChild={asChild}
        disabled={disabled}
        {...rest}
      >
        {children}
      </RadixTabs.Trigger>
    )
  }
)
