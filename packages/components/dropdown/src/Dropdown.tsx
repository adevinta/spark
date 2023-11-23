import { Popover } from '@spark-ui/popover'
import { ReactNode } from 'react'

import { DropdownProvider } from './DropdownContext'

export interface DropdownProps {
  children: ReactNode
}

export const Dropdown = ({ children }: DropdownProps) => {
  return (
    <DropdownProvider>
      <Popover open>{children}</Popover>
    </DropdownProvider>
  )
}

Dropdown.displayName = 'Dropdown'
