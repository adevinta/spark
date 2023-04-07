import * as RadixTabs from '@radix-ui/react-tabs'
import { cva } from 'class-variance-authority'
import { forwardRef, type PropsWithChildren } from 'react'

import { TabsContext, type TabsContextInterface } from './TabsContext'

export const styles = cva(['flex', 'flex-col', 'px-sm', 'py-sm'])

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
          className={styles()}
          asChild={asChild}
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
