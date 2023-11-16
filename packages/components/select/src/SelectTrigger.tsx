import { Icon } from '@spark-ui/icon'
import { ArrowHorizontalDown } from '@spark-ui/icons/dist/icons/ArrowHorizontalDown'
import { cx } from 'class-variance-authority'
import { ReactNode } from 'react'

import { useSelect } from './SelectContext'
import { findElement } from './utils'

export const Trigger = ({ children }: { children?: ReactNode }) => {
  const { items } = useSelect()

  const finder = findElement(children)

  const leadingIcon = finder('LeadingIcon')
  const value = finder('Value')

  return (
    <div
      className={cx(
        'relative flex h-sz-44 items-center gap-md',
        'rounded-md border-sm border-outline bg-surface px-lg',
        'ring-inset focus-within:border-outline-high focus-within:ring-1 focus-within:ring-outline-high'
      )}
    >
      {leadingIcon}
      {value}
      <Icon>
        <ArrowHorizontalDown />
      </Icon>
      {items}
    </div>
  )
}

Trigger.id = 'Trigger'
Trigger.displayName = 'Select.Trigger'
