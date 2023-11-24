import { useId } from '@radix-ui/react-id'
import React, { createContext, type PropsWithChildren, useContext } from 'react'

export interface DropdownContextState {
  labelId: string
}

type DropdownContextProps = PropsWithChildren

const DropdownGroupContext = createContext<DropdownContextState | null>(null)

export const DropdownGroupProvider = ({ children }: DropdownContextProps) => {
  const labelId = useId()

  return (
    <DropdownGroupContext.Provider value={{ labelId }}>{children}</DropdownGroupContext.Provider>
  )
}

export const useDropdownGroup = () => {
  const context = useContext(DropdownGroupContext)

  if (!context) {
    throw Error('useDropdownGroup must be used within a DropdownGroup provider')
  }

  return context
}
