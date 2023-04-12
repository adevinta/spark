import * as RadixTabs from '@radix-ui/react-tabs'
import { forwardRef, type PropsWithChildren } from 'react'

import { tabsContentStyles } from './Tabs.styles'

export type TabsContentProps = PropsWithChildren<RadixTabs.TabsContentProps>

export const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  (
    {
      /**
       * Default Radix Primitive values
       * see https://www.radix-ui.com/docs/primitives/components/tabs#content
       */
      asChild = false,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <RadixTabs.Content ref={ref} className={tabsContentStyles()} asChild={asChild} {...rest}>
        {children}
      </RadixTabs.Content>
    )
  }
)
