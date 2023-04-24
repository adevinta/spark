import * as RadixTabs from '@radix-ui/react-tabs'
import { Icon, type IconProps } from '@spark-ui/icon'
import { forwardRef, useEffect, useRef } from 'react'

import { useTabsContext } from './TabsContext'
import { triggerVariants } from './TabsTrigger.styles'

export interface TabsTriggerProps extends Omit<RadixTabs.TabsTriggerProps, 'children'> {
  label?: string
  icon?: IconProps['children']
  disabled?: boolean
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
        {icon && <Icon size="sm">{icon}</Icon>}
        {label && <span>{label}</span>}
      </RadixTabs.Trigger>
    )
  }
)
