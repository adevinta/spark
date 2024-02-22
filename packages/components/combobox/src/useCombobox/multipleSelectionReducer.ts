/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
/* eslint-disable no-console */
import { useCombobox as useDownshiftCombobox, UseComboboxProps } from 'downshift'

import { type ComboboxItem } from '../types'

interface Props {
  updateInputValue: (inputValue: string | undefined) => void
  allowCustomValue: boolean
  selectedItems: ComboboxItem[]
  removeSelectedItem: (item: ComboboxItem) => void
  addSelectedItem: (item: ComboboxItem) => void
}

export const multipleSelectionReducer = ({
  allowCustomValue,
  updateInputValue,
  selectedItems,
  removeSelectedItem,
  addSelectedItem,
}: Props) => {
  /**
   * Custom state reducer for multiple selection behaviour:
   * - keeps the component opened when the user selects an item
   * - preserves the higlighted index when the user select an item
   * - selected items can be unselected, even the last selected item (as opposed to single selection behaviour)
   */
  const reducer: UseComboboxProps<ComboboxItem>['stateReducer'] = (state, { changes, type }) => {
    switch (type) {
      case useDownshiftCombobox.stateChangeTypes.InputChange:
        updateInputValue(changes.inputValue)

        return changes
      case useDownshiftCombobox.stateChangeTypes.InputBlur:
        if (allowCustomValue) return changes

        updateInputValue('')

        return { ...changes, inputValue: '' }

      case useDownshiftCombobox.stateChangeTypes.InputKeyDownEnter:
      case useDownshiftCombobox.stateChangeTypes.ItemClick:
        if (changes.selectedItem != null) {
          updateInputValue('')
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

  return reducer
}
