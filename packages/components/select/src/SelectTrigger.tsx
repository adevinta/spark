import { Icon } from '@spark-ui/icon'
import { ArrowHorizontalDown } from '@spark-ui/icons/dist/icons/ArrowHorizontalDown'
import { ReactNode } from 'react'

import { useSelect } from './SelectContext'

export const Trigger = ({ children }: { children?: ReactNode }) => {
  const { items, placeholder } = useSelect()

  return (
    <div className="relative flex h-sz-44 items-center gap-md rounded-md border-sm border-outline bg-surface px-lg focus-within:u-ring">
      {children}
      {placeholder && <p className="grow">{placeholder}</p>}
      <Icon>
        <ArrowHorizontalDown />
      </Icon>
      {items && items}
    </div>
  )
}

Trigger.id = 'Trigger'
Trigger.displayName = 'Select.Trigger'
