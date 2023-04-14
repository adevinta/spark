import * as RadixTabs from '@radix-ui/react-tabs'
import { forwardRef, type PropsWithChildren, useState } from 'react'

import { TabsContext, type TabsContextInterface } from './TabsContext'
import { rootStyles } from './TabsRoot.styles'

export type TabsRootProps = PropsWithChildren<Omit<RadixTabs.TabsProps, 'activationMode'>> &
  Omit<TabsContextInterface, 'selectedTab' | 'setSelectedTab'>

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
      defaultValue,
      value,
      onValueChange,
      ...rest
    },
    ref
  ) => {
    const [selectedTab, setSelectedTab] = useState<TabsContextInterface['selectedTab']>(
      value || defaultValue
    )

    const handleChange = (v: string) => {
      onValueChange?.(v)
      setSelectedTab(v)
    }

    return (
      <TabsContext.Provider value={{ intent, size, orientation, selectedTab, setSelectedTab }}>
        <RadixTabs.Root
          ref={ref}
          asChild={asChild}
          className={rootStyles()}
          orientation={orientation}
          activationMode="automatic"
          onValueChange={handleChange}
          value={selectedTab}
          data-spark-component="tabs"
          {...rest}
        >
          {children}
        </RadixTabs.Root>
      </TabsContext.Provider>
    )
  }
)
