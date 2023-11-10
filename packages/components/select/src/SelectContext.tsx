import {
  createContext,
  Dispatch,
  ReactElement,
  type ReactNode,
  SetStateAction,
  useContext,
  useState,
} from 'react'

export interface SelectContextState {
  items: ReactElement | undefined
  placeholder?: string | undefined
  setPlaceHolder: Dispatch<SetStateAction<string | undefined>>
  value?: string
}

const SelectContext = createContext<SelectContextState | null>(null)

export const SelectProvider = ({
  children,
  items,
  placeholder,
  value,
}: {
  children?: ReactNode
} & Pick<SelectContextState, 'items' | 'placeholder' | 'value'>) => {
  const [innerPlaceholder, setInnerPlaceholder] = useState(placeholder)

  return (
    <SelectContext.Provider
      value={{
        items,
        placeholder: innerPlaceholder,
        setPlaceHolder: setInnerPlaceholder,
        value,
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
