import * as RadixTabs from '@radix-ui/react-tabs'
import { forwardRef, type PropsWithChildren } from 'react'

import { tabsListStyles } from './Tabs.styles'

export type TabsListProps = PropsWithChildren<RadixTabs.TabsListProps>

export const TabsList = forwardRef<HTMLDivElement, TabsListProps>(
  (
    {
      /**
       * Default Radix Primitive values
       * see https://www.radix-ui.com/docs/primitives/components/tabs#list
       */
      asChild = false,
      loop = true,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <RadixTabs.List
        ref={ref}
        className={tabsListStyles()}
        asChild={asChild}
        loop={loop}
        {...rest}
      >
        {children}
      </RadixTabs.List>
    )
  }
)
