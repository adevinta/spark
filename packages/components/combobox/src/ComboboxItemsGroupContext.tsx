import { useId } from '@radix-ui/react-id'
import React, { createContext, type PropsWithChildren, useContext } from 'react'

export interface ComboboxContextState {
  labelId: string
}

type ComboboxContextProps = PropsWithChildren

const ComboboxGroupContext = createContext<ComboboxContextState | null>(null)

export const ComboboxGroupProvider = ({ children }: ComboboxContextProps) => {
  const labelId = useId()

  return (
    <ComboboxGroupContext.Provider value={{ labelId }}>{children}</ComboboxGroupContext.Provider>
  )
}

export const useComboboxGroupContext = () => {
  const context = useContext(ComboboxGroupContext)

  if (!context) {
    throw Error('useComboboxGroupContext must be used within a ComboboxGroup provider')
  }

  return context
}
