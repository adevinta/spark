import React, { createContext, type PropsWithChildren, useContext, useState } from 'react'

type ItemTextId = string | undefined

interface DropdownItemContextState {
  textId: ItemTextId
  setTextId: React.Dispatch<React.SetStateAction<ItemTextId>>
}

const DropdownItemContext = createContext<DropdownItemContextState | null>(null)

export const DropdownItemProvider = ({ children }: PropsWithChildren) => {
  const [textId, setTextId] = useState<ItemTextId>(undefined)

  return (
    <DropdownItemContext.Provider value={{ textId, setTextId }}>
      {children}
    </DropdownItemContext.Provider>
  )
}

export const useDropdownItemContext = () => {
  const context = useContext(DropdownItemContext)

  if (!context) {
    throw Error('useDropdownItemContext must be used within a DropdownItem provider')
  }

  return context
}
