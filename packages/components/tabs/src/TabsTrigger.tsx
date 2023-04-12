import * as RadixTabs from '@radix-ui/react-tabs'
import { Icon, type IconProps } from '@spark-ui/icon'
import { forwardRef } from 'react'

import { tabsTriggerVariants } from './Tabs.styles'
import { useTabsContext } from './TabsContext'

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
      disabled = false,
      label,
      icon,
      ...rest
    },
    ref
  ) => {
    const { intent, size } = useTabsContext()

    return (
      <RadixTabs.Trigger
        ref={ref}
        className={tabsTriggerVariants({ intent, size })}
        asChild={asChild}
        disabled={disabled}
        {...rest}
      >
        {icon && <Icon size="sm">{icon}</Icon>}
        {label && <span>{label}</span>}
      </RadixTabs.Trigger>
    )
  }
)
