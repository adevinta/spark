import * as RadixTabs from '@radix-ui/react-tabs'
import { forwardRef, type PropsWithChildren, useState } from 'react'

import { TabsContext, type TabsContextInterface } from './TabsContext'
import { rootStyles } from './TabsRoot.styles'
import type { TabsTriggerVariantsProps } from './TabsTrigger.styles'

export interface TabsRootProps
  extends Omit<RadixTabs.TabsProps, 'activationMode'>,
    PropsWithChildren<TabsTriggerVariantsProps> {
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: boolean
}

export const TabsRoot = forwardRef<HTMLDivElement, TabsRootProps>(
  (
    {
      intent = 'primary',
      size = 'md',
      /**
       * Default Radix Primitive values
       * see https://www.radix-ui.com/docs/primitives/components/tabs#root
       */
      asChild = false,
      orientation = 'horizontal',
      children,
      className,
      defaultValue,
      value,
      onValueChange,
    },
    ref
  ) => {
    const [selectedTab, setSelectedTab] = useState<TabsContextInterface['selectedTab']>(
      value || defaultValue
    )

    const handleChange = (newValue: string) => {
      onValueChange?.(newValue)
      setSelectedTab(newValue)
    }

    return (
      <TabsContext.Provider value={{ intent, size, orientation, selectedTab, setSelectedTab }}>
        <RadixTabs.Root
          ref={ref}
          asChild={asChild}
          className={rootStyles({ className })}
          orientation={orientation}
          activationMode="automatic"
          onValueChange={handleChange}
          value={selectedTab}
          data-spark-component="tabs"
        >
          {children}
        </RadixTabs.Root>
      </TabsContext.Provider>
    )
  }
)

TabsRoot.displayName = 'Tabs'
