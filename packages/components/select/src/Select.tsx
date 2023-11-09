import { ReactElement } from 'react'

import { SelectProvider } from './SelectContext'
import { findElement } from './utils'

export interface SelectProps {
  children: ReactElement[]
  value?: string
  placeholder?: string
}

export const Select = ({ children, placeholder }: SelectProps) => {
  const trigger = findElement('Trigger', children)

  const items = findElement('Items', children)

  return (
    <SelectProvider
      data-spark-component="select"
      // value={value}
      placeholder={placeholder}
      items={items}
    >
      {trigger}
    </SelectProvider>
  )
}
