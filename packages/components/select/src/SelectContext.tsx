import {
  createContext,
  Dispatch,
  ReactElement,
  type ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'

export interface SelectContextState {
  items: ReactElement | undefined
  placeholder?: string | undefined
  setPlaceHolder: Dispatch<SetStateAction<string | undefined>>
  setValue: Dispatch<SetStateAction<string | undefined>>
  value?: string
  options: Record<string, string>
  registerOption: (value: string, label: string, previousValue: string) => void
  unregisterOption: (value: string) => void
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
  const [innerValue, setInnerValue] = useState(value)
  const [innerOptions, setInnerOptions] = useState<Record<string, string>>({})

  useEffect(() => {
    if (value) setInnerValue(value)
  }, [value])

  const removeOption = (value: string, options: Record<string, string>) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [value]: deletedKey, ...remainingOptions } = options

    return remainingOptions
  }

  const registerOption = (value: string, label: string, previousValue: string) => {
    setInnerOptions(prevState => {
      let updatedState = { ...prevState }

      if (value !== previousValue) {
        updatedState = removeOption(value, prevState)
      }

      return {
        ...updatedState,
        [value]: label,
      }
    })
  }

  const unregisterOption = (value: string) => {
    setInnerOptions(prevState => removeOption(value, prevState))
  }

  return (
    <SelectContext.Provider
      value={{
        items,
        placeholder: innerPlaceholder,
        setPlaceHolder: setInnerPlaceholder,
        value: innerValue,
        setValue: setInnerValue,
        options: innerOptions,
        registerOption,
        unregisterOption,
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
