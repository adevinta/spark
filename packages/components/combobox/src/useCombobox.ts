import {
  useCombobox as useDownshiftCombobox,
  UseComboboxProps,
  useMultipleSelection,
} from 'downshift'
import { Dispatch, SetStateAction } from 'react'

import { type ComboboxItem, type ItemsMap } from './types'

type OnChangeValueType = string & string[]

export interface DownshiftProps {
  itemsMap: ItemsMap
  filteredItems: ItemsMap
  inputValue?: string
  setInputValue: Dispatch<SetStateAction<string | undefined>>
  value: string | string[] | undefined
  defaultValue: string | string[] | undefined
  onValueChange: ((value: string) => void) | ((value: string[]) => void) | undefined
  open: boolean | undefined
  onOpenChange: ((isOpen: boolean) => void) | undefined
  defaultOpen: boolean | undefined
  multiple: boolean | undefined
  id: string
  labelId: string
}

/**
 * This hooks abstract the complexity of using downshift with both single and multiple selection.
 */
export const useCombobox = ({
  itemsMap,
  defaultValue,
  value,
  onValueChange,
  open,
  onOpenChange,
  defaultOpen,
  inputValue,
  filteredItems,
  setInputValue,
  multiple,
  id,
  labelId,
}: DownshiftProps) => {
  const items = [...itemsMap.values()]

  const downshiftMultipleSelection = useMultipleSelection<ComboboxItem>({
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
  const stateReducer: UseComboboxProps<ComboboxItem>['stateReducer'] = (
    state,
    { changes, type }
  ) => {
    if (!multiple) return changes

    const { selectedItems, removeSelectedItem, addSelectedItem } = downshiftMultipleSelection

    switch (type) {
      case useDownshiftCombobox.stateChangeTypes.ItemClick:
        if (changes.selectedItem != null) {
          const isAlreadySelected = selectedItems.some(
            selectedItem => selectedItem.value === changes.selectedItem?.value
          )

          if (isAlreadySelected) removeSelectedItem(changes.selectedItem)
          else addSelectedItem(changes.selectedItem)
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

  const downshift = useDownshiftCombobox<ComboboxItem>({
    items,
    isItemDisabled: item => {
      const isFilteredOut =
        !!inputValue &&
        ![...filteredItems].some(([_, filteredItem]) => {
          return item.value === filteredItem.value
        })

      return item.disabled || isFilteredOut
    },
    itemToString: item => (item ? item.text : ''),
    // a11y attributes
    id,
    labelId,
    // Controlled open state
    isOpen: open, // undefined must be passed for stateful behaviour (uncontrolled)
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
    inputValue,
    onInputValueChange({ inputValue }) {
      setInputValue(inputValue)
    },
  })

  return {
    ...downshift,
    ...downshiftMultipleSelection,
  }
}
