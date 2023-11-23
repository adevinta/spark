import { ReactElement } from 'react'

import { SelectProvider } from './SelectContext'
import { findElement } from './utils'

export interface SelectProps {
  children: ReactElement[]
  value?: string
}

export const Select = ({ children, value }: SelectProps) => {
  const finder = findElement(children)
  const trigger = finder('Trigger')
  const items = finder('Items')

  return (
    <SelectProvider data-spark-component="select" value={value} items={items}>
      {trigger}
    </SelectProvider>
  )
}
