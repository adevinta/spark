import * as RadixTabs from '@radix-ui/react-tabs'
import { Icon, type IconProps } from '@spark-ui/icon'
import { forwardRef, useEffect, useRef } from 'react'

import { useTabsContext } from './TabsContext'
import { triggerVariants } from './TabsTrigger.styles'

export interface TabsTriggerProps extends Omit<RadixTabs.TabsTriggerProps, 'children'> {
  /**
   * A unique value that associates the trigger with a content.
   */
  value: string
  /**
   * Change the component to the HTML tag or custom component of the only child. This will merge the original component props with the props of the supplied element/component and change the underlying DOM node.
   * @default false
   */
  asChild?: boolean
  /**
   * When true, prevents the user from interacting with the tab.
   * @default false
   */
  disabled?: boolean
  /**
   * Tab label
   */
  label?: string
  /**
   * Tab SVG icon. Can be used alone or displayed on the left from label.
   */
  icon?: IconProps['children']
}

export const TabsTrigger = forwardRef<HTMLButtonElement, TabsTriggerProps>(
  (
    {
      /**
       * Default Radix Primitive values
       * see https://www.radix-ui.com/docs/primitives/components/tabs#trigger
       */
      asChild = false,
      value,
      disabled = false,
      label,
      icon,
      className,
    },
    ref
  ) => {
    const { intent, size, selectedTab } = useTabsContext()
    const innerRef = useRef(null)

    const triggerRef = ref || innerRef

    useEffect(() => {
      if (triggerRef && 'current' in triggerRef && triggerRef.current && selectedTab === value) {
        triggerRef.current.focus()
      }
    }, [selectedTab, value, triggerRef])

    return (
      <RadixTabs.Trigger
        ref={triggerRef}
        className={triggerVariants({ intent, size, className })}
        asChild={asChild}
        disabled={disabled}
        value={value}
      >
        {icon && (
          <Icon size="sm" className="ml-md flex-none last:mx-auto">
            {icon}
          </Icon>
        )}

        {label && <span className="mx-md block">{label}</span>}
      </RadixTabs.Trigger>
    )
  }
)

TabsTrigger.displayName = 'Tabs.Trigger'
