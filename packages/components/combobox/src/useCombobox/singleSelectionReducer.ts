import { useCombobox, UseComboboxProps } from 'downshift'

import { ComboboxItem } from '../types'

interface Props {
  allowCustomValue?: boolean
  filteredItems: ComboboxItem[]
}

export const singleSelectionReducer = ({ filteredItems, allowCustomValue = false }: Props) => {
  const reducer: UseComboboxProps<ComboboxItem>['stateReducer'] = (state, { changes, type }) => {
    const exactMatch = filteredItems.find(
      item => item.text.toLowerCase() === state.inputValue.toLowerCase()
    )

    switch (type) {
      case useCombobox.stateChangeTypes.InputClick:
        return { ...changes, isOpen: true }
      case useCombobox.stateChangeTypes.ToggleButtonClick:
      case useCombobox.stateChangeTypes.InputBlur:
        if (allowCustomValue) return changes

        if (state.inputValue === '') {
          return { ...changes, selectedItem: null }
        }

        if (exactMatch) {
          return { ...changes, selectedItem: exactMatch, inputValue: exactMatch.text }
        }

        if (state.selectedItem) {
          return { ...changes, inputValue: state.selectedItem.text }
        }

        return { ...changes, inputValue: '' }
      default:
        return changes
    }
  }

  return reducer
}
