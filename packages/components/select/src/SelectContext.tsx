import { createContext, ReactElement, type ReactNode, useContext } from 'react'

export interface SelectContextState {
  items: ReactElement | undefined
  placeholder?: string | undefined
}

const SelectContext = createContext<SelectContextState | null>(null)

export const SelectProvider = ({
  children,
  items,
  placeholder,
}: {
  children: ReactNode
  items: ReactElement | undefined
  placeholder: string | undefined
}) => {
  return (
    <SelectContext.Provider
      value={{
        items,
        placeholder,
      }}
    >
      {children}
    </SelectContext.Provider>
  )
}

export const useSelect = () => {
  const context = useContext(SelectContext)

  if (!context) {
    throw Error('useSelect must be used within a Select provider')
  }

  return context
}
