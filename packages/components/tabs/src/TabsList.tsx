import * as RadixTabs from '@radix-ui/react-tabs'
import { cva } from 'class-variance-authority'
import { forwardRef, type PropsWithChildren } from 'react'

export const styles = cva(['mb-lg flex min-w-full'])

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
      <RadixTabs.List ref={ref} className={styles()} asChild={asChild} loop={loop} {...rest}>
        {children}
      </RadixTabs.List>
    )
  }
)
