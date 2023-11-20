import React, {
  createContext,
  Dispatch,
  type ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'

import { useMap } from './useMap'

export interface SelectContextState {
  selectElement?: HTMLElement | null
  setSelectElement: Dispatch<SetStateAction<HTMLElement | null>>
  placeholder?: string | undefined
  setPlaceHolder: Dispatch<SetStateAction<string | undefined>>
  setValue: Dispatch<SetStateAction<string | undefined>>
  value?: string
  options: Omit<Map<string, string>, 'set' | 'clear' | 'delete'>
  registerOption: (value: string, label: string, previousValue: string) => void
  unregisterOption: (value: string) => void
}

const SelectContext = createContext<SelectContextState | null>(null)

export const SelectProvider = ({
  children,
  placeholder,
  value,
}: {
  children?: ReactNode
} & Pick<SelectContextState, 'placeholder' | 'value'>) => {
  const [innerPlaceholder, setInnerPlaceholder] = useState(placeholder)
  const [innerValue, setInnerValue] = useState(value)
  const [innerOptions, { set, remove }] = useMap<string, string>()

  const [selectElement, setSelectElement] = React.useState<HTMLElement | null>(null)

  useEffect(() => {
    if (value) setInnerValue(value)
  }, [value])

  const registerOption = (value: string, label: string, previousValue: string) => {
    remove(previousValue)
    set(value, label)
  }

  return (
    <SelectContext.Provider
      value={{
        selectElement,
        setSelectElement,
        placeholder: innerPlaceholder,
        setPlaceHolder: setInnerPlaceholder,
        value: innerValue,
        setValue: setInnerValue,
        options: innerOptions,
        registerOption,
        unregisterOption: remove,
      }}
    >
      {children}
    </SelectContext.Provider>
  )
}

export const useSelectContext = () => {
  const context = useContext(SelectContext)

  if (!context) {
    throw Error('useSelectContext must be used within a Select provider')
  }

  return context
}
