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
  /**
   * The value of the select when initially rendered. Use when you do not need to control the state of the select.
   */
  defaultValue?: string
  /**
   * The controlled value of the select. Should be used in conjunction with `onValueChange`.
   */
  value?: string
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: string) => void
  /**
   * The controlled open state of the select. Must be used in conjunction with `onOpenChange`.
   */
  open?: boolean
  /**
   * Event handler called when the open state of the select changes.
   */
  onOpenChange?: (isOpen: boolean) => void
  /**
   * The open state of the select when it is initially rendered. Use when you do not need to control its open state.
   */
  defaultOpen?: boolean
}>

const DropdownContext = createContext<DropdownContextState | null>(null)

export const DropdownProvider = ({
  children,
  defaultValue,
  value,
  onValueChange,
  open,
  onOpenChange,
  defaultOpen,
}: DropdownContextProps) => {
  const [computedItems, setComputedItems] = useState<ItemsMap>(getItemsFromChildren(children))
  const [hasPopover, setHasPopover] = useState<boolean>(false)

  const field = useFormFieldControl()

  const id = useId(field.id)
  const labelId = useId(field.labelId)

  const controlledSelectedItem = value ? computedItems.get(value) : undefined
  const controlledDefaultSelectedItem = defaultValue ? computedItems.get(defaultValue) : undefined
  const controlledDefaultOpen = defaultOpen != null ? defaultOpen : false

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
    isOpen: open,
    onIsOpenChange: ({ isOpen }) => {
      if (isOpen != null) {
        onOpenChange?.(isOpen)
      }
    },
    initialIsOpen: controlledDefaultOpen,
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
