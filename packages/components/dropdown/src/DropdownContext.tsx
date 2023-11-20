import { useSelect, type UseSelectReturnValue } from 'downshift'
import { createContext, PropsWithChildren, useContext } from 'react'

export interface DropdownItem {
  id: string
  title: string
}

type DownshiftState = UseSelectReturnValue<DropdownItem>

export interface DropdownContextState extends DownshiftState {
  id?: any
}

type DropdownContextProps = PropsWithChildren<{
  items: DropdownItem[]
}>

const DropdownContext = createContext<DropdownContextState | null>(null)

export const DropdownProvider = ({ children, items }: DropdownContextProps) => {
  const downshift = useSelect({
    items,
    // isItemDisabled: item => item.id === 'book-3',
    itemToString: item => (item ? item.title : ''),
    // getA11yStatusMessage?: (options: A11yStatusMessageOptions<Item>) => string
    // getA11ySelectionMessage?: (options: A11yStatusMessageOptions<Item>) => string
    // highlightedIndex?: number
    // initialHighlightedIndex?: number
    // defaultHighlightedIndex?: number
    // isOpen?: boolean
    // initialIsOpen?: boolean
    // defaultIsOpen?: boolean
    // selectedItem?: Item | null
    // initialSelectedItem?: Item | null
    // defaultSelectedItem?: Item | null
    // id?: string
    // labelId?: string
    // menuId?: string
    // toggleButtonId?: string
    // getItemId?: (index: number) => string
    // scrollIntoView?: (node: HTMLElement, menuNode: HTMLElement) => void
    // stateReducer?: (
    //   state: UseSelectState<Item>,
    //   actionAndChanges: UseSelectStateChangeOptions<Item>,
    // ) => Partial<UseSelectState<Item>>
    // onSelectedItemChange?: (changes: UseSelectStateChange<Item>) => void
    // onIsOpenChange?: (changes: UseSelectStateChange<Item>) => void
    // onHighlightedIndexChange?: (changes: UseSelectStateChange<Item>) => void
    // onStateChange?: (changes: UseSelectStateChange<Item>) => void
    // environment?: Environment
  })

  return (
    <DropdownContext.Provider
      value={{
        ...downshift,
      }}
    >
      {children}
    </DropdownContext.Provider>
  )
}

export const useDropdown = () => {
  const context = useContext(DropdownContext)

  if (!context) {
    throw Error('useDropdown must be used within a Dropdown provider')
  }

  return context
}
