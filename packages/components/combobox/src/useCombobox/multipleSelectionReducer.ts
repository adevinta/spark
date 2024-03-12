import { useCombobox, UseComboboxProps, UseMultipleSelectionReturnValue } from 'downshift'

import { ComboboxItem } from '../types'

interface Props {
  allowCustomValue?: boolean
  selectedItems: ComboboxItem[]
  multiselect: UseMultipleSelectionReturnValue<ComboboxItem>
  setSelectedItems: (value: React.SetStateAction<ComboboxItem[]>) => void
  triggerAreaRef: React.RefObject<HTMLDivElement>
}

export const multipleSelectionReducer = ({
  multiselect,
  selectedItems,
  allowCustomValue = false,
  setSelectedItems,
  triggerAreaRef,
}: Props) => {
  const reducer: UseComboboxProps<ComboboxItem>['stateReducer'] = (state, { changes, type }) => {
    const isFocusInsideTriggerArea = triggerAreaRef.current?.contains?.(document.activeElement)

    switch (type) {
      case useCombobox.stateChangeTypes.InputClick:
        return {
          ...changes,
          isOpen: true, // keep menu opened
        }
      case useCombobox.stateChangeTypes.InputKeyDownEnter:
      case useCombobox.stateChangeTypes.ItemClick: {
        const newState = { ...changes }

        if (changes.selectedItem != null) {
          newState.inputValue = '' // keep input value after selection
          newState.isOpen = true // keep menu opened after selection
          newState.highlightedIndex = state.highlightedIndex // preserve highlighted item index after selection

          const isAlreadySelected = multiselect.selectedItems.some(
            selectedItem => selectedItem.value === changes.selectedItem?.value
          )

          const updatedItems = isAlreadySelected
            ? selectedItems.filter(item => item.value !== changes.selectedItem?.value)
            : [...selectedItems, changes.selectedItem]

          setSelectedItems(updatedItems)
        }

        return newState
      }

      case useCombobox.stateChangeTypes.ToggleButtonClick:
        return {
          ...changes,
          inputValue: allowCustomValue ? changes.inputValue : '',
        }
      case useCombobox.stateChangeTypes.InputBlur:
        return {
          ...changes,
          inputValue: allowCustomValue ? changes.inputValue : '',
          isOpen: isFocusInsideTriggerArea,
        }

      default:
        return changes
    }
  }

  return reducer
}
