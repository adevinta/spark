import { useId } from '@radix-ui/react-id'
import { useFormFieldControl } from '@spark-ui/form-field'
import { Popover } from '@spark-ui/popover'
import { useSelect } from 'downshift'
import {
  createContext,
  Dispatch,
  Fragment,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react'

import { type DownshiftState, type DropdownItem, type ItemsMap } from './types'
import { getElementByIndex, getItemsFromChildren } from './utils'
export interface DropdownContextState extends DownshiftState {
  computedItems: ItemsMap
  highlightedItem: DropdownItem | undefined
  hasPopover: boolean
  setHasPopover: Dispatch<SetStateAction<boolean>>
}

export type DropdownContextProps = PropsWithChildren<{
  defaultValue?: string
  value?: string
  onValueChange?: (value: string) => void
}>

const DropdownContext = createContext<DropdownContextState | null>(null)

export const DropdownProvider = ({
  children,
  defaultValue,
  value,
  onValueChange,
}: DropdownContextProps) => {
  const [computedItems, setComputedItems] = useState<ItemsMap>(getItemsFromChildren(children))
  const [hasPopover, setHasPopover] = useState<boolean>(false)

  const field = useFormFieldControl()

  const id = useId(field.id)
  const labelId = useId(field.labelId)

  const controlledSelectedItem = value ? computedItems.get(value) : undefined
  const controlledDefaultSelectedItem = defaultValue ? computedItems.get(defaultValue) : undefined

  const downshift = useSelect({
    items: Array.from(computedItems.values()),
    isItemDisabled: item => item.disabled,
    itemToString: item => (item ? item.text : ''),
    // a11y attributes
    id,
    labelId,
    // Controlled mode (stateful)
    selectedItem: controlledSelectedItem,
    initialSelectedItem: controlledDefaultSelectedItem,
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem?.value) {
        onValueChange?.(selectedItem?.value)
      }
    },
    // onIsOpenChange?: (changes: UseSelectStateChange<Item>) => void
    // onHighlightedIndexChange?: (changes: UseSelectStateChange<Item>) => void
    // onStateChange?: (changes: UseSelectStateChange<Item>) => void
    // environment?: Environment
  })

  /**
   * Indices in a Map are set when an element is added to the Map.
   * If for some reason, in the Dropdown:
   * - children order changes
   * - children are added
   * - children are removed
   *
   * The Map must be rebuilt from the new children in order to preserve logical indices.
   *
   * Downshift is heavily indices based for keyboard navigation, so it it important.
   */
  useEffect(() => {
    const newMap = getItemsFromChildren(children)

    setComputedItems(newMap)
  }, [children])

  /**
   * Warning:
   * Downshift is expecting the items list to always be rendered, as per a11y guidelines.
   * This is why the `Popover` is always opened in this component, but visually hidden instead from Dropdown.Popover.
   */
  const [WrapperComponent, wrapperProps] = hasPopover ? [Popover, { open: true }] : [Fragment, {}]

  return (
    <DropdownContext.Provider
      value={{
        ...downshift,
        computedItems,
        highlightedItem: getElementByIndex(computedItems, downshift.highlightedIndex),
        hasPopover,
        setHasPopover,
      }}
    >
      <WrapperComponent {...wrapperProps}>{children}</WrapperComponent>
    </DropdownContext.Provider>
  )
}

export const useDropdownContext = () => {
  const context = useContext(DropdownContext)

  if (!context) {
    throw Error('useDropdownContext must be used within a Dropdown provider')
  }

  return context
}
