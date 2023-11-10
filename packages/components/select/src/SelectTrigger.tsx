import { Icon } from '@spark-ui/icon'
import { ArrowHorizontalDown } from '@spark-ui/icons/dist/icons/ArrowHorizontalDown'
import { ReactNode } from 'react'

import { useSelect } from './SelectContext'
import { findElement } from './utils'

export const Trigger = ({ children }: { children?: ReactNode }) => {
  const { items } = useSelect()

  const finder = findElement(children)

  const leadingIcon = finder('LeadingIcon')
  const value = finder('Value')

  return (
    <div className="relative flex h-sz-44 items-center gap-md rounded-md border-sm border-outline bg-surface px-lg focus-within:u-ring">
      {leadingIcon}
      {value}
      <Icon>
        <ArrowHorizontalDown />
      </Icon>
      {items && items}
    </div>
  )
}

Trigger.id = 'Trigger'
Trigger.displayName = 'Select.Trigger'
