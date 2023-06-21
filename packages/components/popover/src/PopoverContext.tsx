import { createContext, type ReactNode, useContext, useState } from 'react'

export interface PopoverContextState {
  hasCloseButton: boolean
  setHasCloseButton: (value: boolean) => void
}

const PopoverContext = createContext<PopoverContextState | null>(null)

export const PopoverProvider = ({ children }: { children: ReactNode }) => {
  const [hasCloseButton, setHasCloseButton] = useState(false)

  return (
    <PopoverContext.Provider
      value={{
        hasCloseButton,
        setHasCloseButton,
      }}
    >
      {children}
    </PopoverContext.Provider>
  )
}

export const usePopover = () => {
  const context = useContext(PopoverContext)

  if (!context) {
    throw Error('usePopover must be used within a Popover provider')
  }

  return context
}
