/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-console */
import {
  useCombobox as useDownshiftCombobox,
  UseComboboxProps,
  useMultipleSelection,
} from 'downshift'

import { type ComboboxItem, type ItemsMap } from './types'

type OnChangeValueType = string & string[]

export interface DownshiftProps {
  itemsMap: ItemsMap
  filteredItems: ItemsMap
  inputValue?: string
  setInputValue: (value: string | undefined) => void
  onInputValueChange?: (value: string) => void
  value: string | string[] | undefined
  defaultValue: string | string[] | undefined
  onValueChange: ((value: string) => void) | ((value: string[]) => void) | undefined
  open: boolean | undefined
  onOpenChange: ((isOpen: boolean) => void) | undefined
  defaultOpen: boolean | undefined
  multiple: boolean | undefined
  id: string
  labelId: string
  allowCustomValue: boolean
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
  onInputValueChange,
  allowCustomValue,
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
      const selectedValues = (selectedItems as ComboboxItem[]).map(item => item.value)
      onValueChange?.(selectedValues as OnChangeValueType)
    },
  })

  const updateInputValue = (inputValue: string | undefined) => {
    if (onInputValueChange) {
      if (inputValue != null) onInputValueChange(inputValue)
    } else {
      setInputValue(inputValue)
    }
  }

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
    const match = [...itemsMap.values()].find(item => item.text === state.inputValue)

    switch (type) {
      case useDownshiftCombobox.stateChangeTypes.InputBlur:
        if (allowCustomValue) return changes

        /**
         * If input has been cleared by the user, then we unselect the selectedItem
         */
        if (state.inputValue === '') {
          return { ...changes, selectedItem: null }
        }

        if (match) {
          return { ...changes, selectedItem: match }
        } else {
          const newinputValue = state.selectedItem?.text || ''
          updateInputValue(newinputValue)

          return { ...changes, inputValue: newinputValue }
        }

        return changes
      default:
        return changes
    }
  }

  /**
   * Custom state reducer for multiple selection behaviour:
   * - keeps the component opened when the user selects an item
   * - preserves the higlighted index when the user select an item
   * - selected items can be unselected, even the last selected item (as opposed to single selection behaviour)
   */
  const multipleSelectionStateReducer: UseComboboxProps<ComboboxItem>['stateReducer'] = (
    state,
    { changes, type }
  ) => {
    const { selectedItems, removeSelectedItem, addSelectedItem } = downshiftMultipleSelection

    switch (type) {
      case useDownshiftCombobox.stateChangeTypes.InputBlur:
        if (allowCustomValue) {
          return changes
        } else {
          const newinputValue = ''
          updateInputValue(newinputValue)

          return { ...changes, inputValue: newinputValue }
        }

      case useDownshiftCombobox.stateChangeTypes.InputKeyDownEnter:
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

  const onStateChange: UseComboboxProps<ComboboxItem>['onStateChange'] = ({
    inputValue: newInputValue,
    type,
    selectedItem: newSelectedItem,
  }) => {
    switch (type) {
      case useDownshiftCombobox.stateChangeTypes.InputKeyDownEnter:
      case useDownshiftCombobox.stateChangeTypes.ItemClick:
        if (newSelectedItem) {
          updateInputValue(multiple ? '' : newInputValue)
        }
        break

      case useDownshiftCombobox.stateChangeTypes.InputChange:
        updateInputValue(newInputValue)

        break
      default:
        break
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
    itemToString: item => item?.text ?? '',
    // a11y attributes
    id,
    labelId,
    // Controlled open state
    isOpen: open, // undefined must be passed for stateful behaviour (uncontrolled)
    onIsOpenChange: ({ isOpen }) => {
      if (isOpen != null) onOpenChange?.(isOpen)
    },
    initialIsOpen: defaultOpen ?? false,
    stateReducer: multiple ? multipleSelectionStateReducer : stateReducer,
    // Controlled mode (single selection)
    selectedItem: value ? itemsMap.get(value as string) : undefined,
    initialSelectedItem: defaultValue ? itemsMap.get(defaultValue as string) : undefined,
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem?.value && !multiple) {
        onValueChange?.(selectedItem?.value as OnChangeValueType)
      }
    },
    inputValue,
    onStateChange,
  })

  return {
    ...downshift,
    ...downshiftMultipleSelection,
  }
}
