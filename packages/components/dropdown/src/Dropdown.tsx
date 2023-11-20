import { Popover } from '@spark-ui/popover'
import { ReactNode } from 'react'

import { type DropdownItem, DropdownProvider } from './DropdownContext'

export interface DropdownProps {
  items: DropdownItem[]
  children: ReactNode
}

export const Dropdown = ({ items, children }: DropdownProps) => {
  return (
    <DropdownProvider items={items}>
      <Popover open>{children}</Popover>
    </DropdownProvider>
  )
}

Dropdown.displayName = 'Dropdown'
