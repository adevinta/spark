import * as RadixTabs from '@radix-ui/react-tabs'
import { forwardRef, type PropsWithChildren } from 'react'

import { contentStyles } from './TabsContent.styles'
import { useTabsContext } from './TabsContext'

export interface TabsContentProps
  extends PropsWithChildren<Omit<RadixTabs.TabsContentProps, 'forceMount'>> {
  /**
   * A unique value that associates the content with a trigger.
   */
  value: string
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: boolean
  /**
   * Used to force mounting when more control is needed. Useful when controlling animation with React animation libraries.
   */
  forceMount?: true
}

export const TabsContent = forwardRef<HTMLDivElement, TabsContentProps>(
  (
    {
      /**
       * Default Radix Primitive values
       * see https://www.radix-ui.com/docs/primitives/components/tabs#content
       */
      children,
      asChild = false,
      className,
      ...rest
    },
    ref
  ) => {
    const { forceMount } = useTabsContext()

    return (
      <RadixTabs.Content
        ref={ref}
        forceMount={forceMount || rest.forceMount}
        className={contentStyles({ className, forceMount })}
        asChild={asChild}
        {...rest}
      >
        {children}
      </RadixTabs.Content>
    )
  }
)

TabsContent.displayName = 'Tabs.Content'
