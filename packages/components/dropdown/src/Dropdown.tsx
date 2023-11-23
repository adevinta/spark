import { ReactNode } from 'react'

import { DropdownProvider } from './DropdownContext'

export interface DropdownProps {
  children: ReactNode
}

export const Dropdown = ({ children }: DropdownProps) => {
  return <DropdownProvider>{children}</DropdownProvider>
}

Dropdown.displayName = 'Dropdown'
