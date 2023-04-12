import * as RadixTabs from '@radix-ui/react-tabs'
import { forwardRef, type PropsWithChildren } from 'react'

import { tabsRootStyles } from './Tabs.styles'
import { TabsContext, type TabsContextInterface } from './TabsContext'

export type TabsRootProps = PropsWithChildren<Omit<RadixTabs.TabsProps, 'activationMode'>> &
  TabsContextInterface

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
      ...rest
    },
    ref
  ) => {
    return (
      <TabsContext.Provider value={{ intent, size }}>
        <RadixTabs.Root
          ref={ref}
          asChild={asChild}
          className={tabsRootStyles()}
          orientation={orientation}
          activationMode="automatic"
          {...rest}
        >
          {children}
        </RadixTabs.Root>
      </TabsContext.Provider>
    )
  }
)
