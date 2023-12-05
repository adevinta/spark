import { useId } from '@radix-ui/react-id'
import { useFormFieldControl } from '@spark-ui/form-field'
import { Popover } from '@spark-ui/popover'
import { useMultipleSelection, useSelect, UseSelectProps } from 'downshift'
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
  itemsMap: ItemsMap
  highlightedItem: DropdownItem | undefined
  hasPopover: boolean
  setHasPopover: Dispatch<SetStateAction<boolean>>
  multiple: boolean
}

export type DropdownContextCommonProps = PropsWithChildren<{
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

interface DropdownPropsSingle {
  /**
   * Prop 'multiple' indicating whether multiple values are allowed.
   */
  multiple?: false
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
}

interface DropdownPropsMultiple {
  /**
   * Prop 'multiple' indicating whether multiple values are allowed.
   */
  multiple: true
  /**
   * The value of the select when initially rendered. Use when you do not need to control the state of the select.
   */
  defaultValue?: string[]
  /**
   * The controlled value of the select. Should be used in conjunction with `onValueChange`.
   */
  value?: string[]
  /**
   * Event handler called when the value changes.
   */
  onValueChange?: (value: string[]) => void
}

type OnChangeValueType = string & string[]

export type DropdownContextProps = DropdownContextCommonProps &
  (DropdownPropsSingle | DropdownPropsMultiple)

const DropdownContext = createContext<DropdownContextState | null>(null)

export const DropdownProvider = ({
  children,
  defaultValue,
  value,
  onValueChange,
  open,
  onOpenChange,
  defaultOpen,
  multiple = false,
}: DropdownContextProps) => {
  const [itemsMap, setItemsMap] = useState<ItemsMap>(getItemsFromChildren(children))
  const [hasPopover, setHasPopover] = useState<boolean>(false)

  const field = useFormFieldControl()
  const items = [...itemsMap.values()]

  const id = useId(field.id)
  const labelId = useId(field.labelId)

  const downshiftMultipleSelection = useMultipleSelection<DropdownItem>({
    selectedItems: value
      ? items.filter(item => (value as string[]).includes(item.value))
      : undefined,
    initialSelectedItems: defaultValue
      ? items.filter(item => (defaultValue as string[]).includes(item.value))
      : undefined,

    onSelectedItemsChange: ({ selectedItems }) => {
      if (selectedItems != null && multiple) {
        onValueChange?.(selectedItems.map(item => item.value) as OnChangeValueType)
      }
    },
  })

  /**
   * Custom state reducer for multiple selection behaviour:
   * - keeps the component opened when the user selects an item
   * - preserves the higlighted index when the user select an item
   * - selected items can be unselected, even the last selected item (as opposed to single selection behaviour)
   */
  const stateReducer: UseSelectProps<DropdownItem>['stateReducer'] = (state, { changes, type }) => {
    if (!multiple) return changes

    const { selectedItems, removeSelectedItem, addSelectedItem } = downshiftMultipleSelection

    switch (type) {
      case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
      case useSelect.stateChangeTypes.ToggleButtonKeyDownSpaceButton:
      case useSelect.stateChangeTypes.ItemClick:
        if (changes.selectedItem != null) {
          const isAlreadySelected = selectedItems.some(
            selectedItem => selectedItem.value === changes.selectedItem?.value
          )

          if (isAlreadySelected) {
            removeSelectedItem(changes.selectedItem)
          } else {
            addSelectedItem(changes.selectedItem)
          }
        }

        return {
          ...changes,
          isOpen: true, // keep the menu open after selection.
          highlightedIndex: state.highlightedIndex, // preserve highlighted index position
        }
      default:
        return changes
    }
  }

  const downshift = useSelect<DropdownItem>({
    items,
    isItemDisabled: item => item.disabled,
    itemToString: item => (item ? item.text : ''),
    // a11y attributes
    id,
    labelId,
    // Controlled open state
    isOpen: open,
    onIsOpenChange: ({ isOpen }) => {
      if (isOpen != null) onOpenChange?.(isOpen)
    },
    initialIsOpen: defaultOpen ?? false,
    stateReducer,
    // Controlled mode (single selection)
    selectedItem: value ? itemsMap.get(value as string) : undefined,
    initialSelectedItem: defaultValue ? itemsMap.get(defaultValue as string) : undefined,
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem?.value && !multiple) {
        onValueChange?.(selectedItem?.value as OnChangeValueType)
      }
    },
  })

  /**
   * Indices in a Map are set when an element is added to the Map.
   * If for some reason, in the Dropdown:
   * - items order changes
   * - items are added
   * - items are removed
   *
   * The Map must be rebuilt from the new children in order to preserve logical indices.
   *
   * Downshift is heavily indices based for keyboard navigation, so it it important.
   */
  useEffect(() => {
    const newMap = getItemsFromChildren(children)

    const previousItems = [...itemsMap.values()]
    const newItems = [...newMap.values()]

    const hasItemsChanges =
      previousItems.length !== newItems.length ||
      previousItems.some((item, index) => item.value !== newItems[index]?.value)

    if (hasItemsChanges) {
      setItemsMap(newMap)
    }
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
        multiple,
        ...downshift,
        ...downshiftMultipleSelection,
        itemsMap,
        highlightedItem: getElementByIndex(itemsMap, downshift.highlightedIndex),
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
