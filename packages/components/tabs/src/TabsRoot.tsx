import * as RadixTabs from '@radix-ui/react-tabs'
import { cva } from 'class-variance-authority'
import { forwardRef, type PropsWithChildren } from 'react'

export const styles = cva(['flex', 'flex-col', 'px-sm', 'py-sm'])

export type TabsRootProps = PropsWithChildren<RadixTabs.TabsProps>

export const TabsRoot = forwardRef<HTMLDivElement, TabsRootProps>(
  (
    {
      /**
       * Default Radix Primitive values
       * see https://www.radix-ui.com/docs/primitives/components/tabs#root
       */
      asChild = false,
      orientation = 'horizontal',
      activationMode = 'automatic',
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <RadixTabs.Root
        ref={ref}
        className={styles()}
        asChild={asChild}
        orientation={orientation}
        activationMode={activationMode}
        {...rest}
      >
        {children}
      </RadixTabs.Root>
    )
  }
)

TabsRoot.displayName = 'Tabs.Root'
