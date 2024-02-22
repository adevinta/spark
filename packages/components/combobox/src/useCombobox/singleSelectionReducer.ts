import { useCombobox as useDownshiftCombobox, UseComboboxProps } from 'downshift'

import { type ComboboxItem, type ItemsMap } from '../types'

// itemsMap
// updateInputValue
// allowCustomValue

interface Props {
  itemsMap: ItemsMap
  updateInputValue: (inputValue: string | undefined) => void
  allowCustomValue: boolean
}

/**
 * Custom state reducer for multiple selection behaviour:
 * - keeps the component opened when the user selects an item
 * - preserves the higlighted index when the user select an item
 * - selected items can be unselected, even the last selected item (as opposed to single selection behaviour)
 *
 * Types: https://github.com/downshift-js/downshift/tree/master/src/hooks/useCombobox#statechangetypes
 */
export const singleSelectionReducer = ({ itemsMap, updateInputValue, allowCustomValue }: Props) => {
  const reducer: UseComboboxProps<ComboboxItem>['stateReducer'] = (state, { changes, type }) => {
    const match = [...itemsMap.values()].find(
      item => item.text.toLowerCase() === state.inputValue.toLowerCase()
    )

    const fallbackText = state.selectedItem?.text || ''

    switch (type) {
      // useDownshiftCombobox.stateChangeTypes.InputKeyDownArrowDown:
      // useDownshiftCombobox.stateChangeTypes.InputKeyDownArrowUp:
      // useDownshiftCombobox.stateChangeTypes.InputKeyDownEscape:
      // useDownshiftCombobox.stateChangeTypes.InputKeyDownHome:
      // useDownshiftCombobox.stateChangeTypes.InputKeyDownEnd:
      // useDownshiftCombobox.stateChangeTypes.InputKeyDownPageUp:
      // useDownshiftCombobox.stateChangeTypes.InputKeyDownPadeDown:
      // useDownshiftCombobox.stateChangeTypes.InputClick:
      // useDownshiftCombobox.stateChangeTypes.MenuMouseLeave:
      // useDownshiftCombobox.stateChangeTypes.ItemMouseMove:
      // useDownshiftCombobox.stateChangeTypes.ToggleButtonClick:
      // useDownshiftCombobox.stateChangeTypes.FunctionToggleMenu:
      // useDownshiftCombobox.stateChangeTypes.FunctionOpenMenu:
      // useDownshiftCombobox.stateChangeTypes.FunctionCloseMenu:
      // useDownshiftCombobox.stateChangeTypes.FunctionSetHighlightedIndex:
      // useDownshiftCombobox.stateChangeTypes.FunctionSelectItem:
      // useDownshiftCombobox.stateChangeTypes.FunctionSetInputValue:
      // useDownshiftCombobox.stateChangeTypes.FunctionReset:
      case useDownshiftCombobox.stateChangeTypes.InputChange:
        updateInputValue(changes.inputValue)

        return changes
      case useDownshiftCombobox.stateChangeTypes.InputKeyDownEnter:
      case useDownshiftCombobox.stateChangeTypes.ItemClick:
        if (changes.selectedItem) {
          updateInputValue(changes.inputValue)
        }

        return changes
      case useDownshiftCombobox.stateChangeTypes.InputBlur:
        if (allowCustomValue) return changes

        /**
         * If input has been cleared by the user, then we unselect the selectedItem
         */
        if (state.inputValue === '') {
          return { ...changes, selectedItem: null }
        }

        if (match) {
          updateInputValue(match.text)

          return { ...changes, selectedItem: match, inputValue: match.text }
        }

        updateInputValue(fallbackText)

        return { ...changes, inputValue: fallbackText }

      default:
        return changes
    }
  }

  return reducer
}
