import { useSelect } from 'downshift'
import { createContext, PropsWithChildren, useContext, useState } from 'react'

import { type DownshiftState, type DropdownItem, type ItemsMap } from './types'
import { getElementByIndex } from './utils'
export interface DropdownContextState extends DownshiftState {
  /**
   * Used by `Dropdown.Item` to register it's data in the global context.
   * It makes the context aware of the items to manage.
   */
  registerItem: (item: DropdownItem) => void
  unregisterItem: (value: string) => void
  computedItems: ItemsMap
  higlightedItem: DropdownItem | undefined
}

type DropdownContextProps = PropsWithChildren

const DropdownContext = createContext<DropdownContextState | null>(null)

export const DropdownProvider = ({ children }: DropdownContextProps) => {
  const [computedItems, setComputedItems] = useState<ItemsMap>(new Map())

  const downshift = useSelect({
    items: Array.from(computedItems.values()),
    isItemDisabled: item => item.disabled,
    itemToString: item => (item ? item.text : ''),
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

  const registerItem = (item: DropdownItem) => {
    console.log('REGISTER => ', item.value)

    setComputedItems(map => {
      return new Map(map.set(item.value, item))
    })
  }

  const unregisterItem = (value: string) => {
    console.log('UNREGISTER => ', value)

    // setComputedItems(map => {
    //   map.delete(value)

    //   return new Map(map)
    // })

    // const newComputedItems = new Map(computedItems)
    // newComputedItems.delete(value)
    // setComputedItems(newComputedItems)
  }

  console.log(computedItems)

  return (
    <DropdownContext.Provider
      value={{
        ...downshift,
        computedItems,
        registerItem,
        unregisterItem,
        higlightedItem: getElementByIndex(computedItems, downshift.highlightedIndex),
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
