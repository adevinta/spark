import { useCombobox as useDownshiftCombobox, useMultipleSelection } from 'downshift'

import { type ComboboxItem, type ItemsMap } from '../types'
import { multipleSelectionReducer } from './multipleSelectionReducer'
import { singleSelectionReducer } from './singleSelectionReducer'

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
 *
 * useMultipleSelection:
 * - props: https://github.com/downshift-js/downshift/tree/master/src/hooks/useMultipleSelection#basic-props
 * - states (for state reducer): https://github.com/downshift-js/downshift/tree/master/src/hooks/useMultipleSelection#statechangetypes
 * - output: https://github.com/downshift-js/downshift/tree/master/src/hooks/useMultipleSelection#returned-props
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
    /**
     * Called each time the selected items array changes.
     * Especially useful when items are removed, as there are many ways to do that:
     * - Backspace or Delete while focus is the item, executing removeSelectedItem when clicking an associated X icon for the item.
     */
    onSelectedItemsChange: ({ selectedItems }) => {
      const selectedValues = (selectedItems as ComboboxItem[]).map(item => item.value)
      onValueChange?.(selectedValues as OnChangeValueType)
    },
    // keyNavigationNext,
    // keyNavigationPrevious,
    /**
     * Pass an initial array of items that are considered to be selected.
     */
    initialSelectedItems: defaultValue
      ? items.filter(item => (defaultValue as string[]).includes(item.value))
      : undefined,
    // initialActiveIndex,
    // defaultSelectedItems,
    // defaultActiveIndex,
    // getA11yRemovalMessage,
    // onActiveIndexChange,
    // onStateChange,
    // activeIndex,
    /**
     * The items that are considered selected at the time. (Controlled mode)
     */
    selectedItems: value
      ? items.filter(item => (value as string[]).includes(item.value))
      : undefined,
    // environment,
  })

  downshiftMultipleSelection.selectedItems
  downshiftMultipleSelection.removeSelectedItem
  downshiftMultipleSelection.addSelectedItem

  const updateInputValue = (inputValue: string | undefined) => {
    if (onInputValueChange) {
      if (inputValue != null) onInputValueChange(inputValue)
    } else {
      setInputValue(inputValue)
    }
  }

  /**
   * useCombobox()
   *
   * - props: https://github.com/downshift-js/downshift/tree/master/src/hooks/useCombobox#basic-props
   * - state (for state reducer): https://github.com/downshift-js/downshift/tree/master/src/hooks/useCombobox#statechangetypes
   * - output: https://github.com/downshift-js/downshift/tree/master/src/hooks/useCombobox#returned-props
   */
  const downshift = useDownshiftCombobox<ComboboxItem>({
    /**
     * Opening the menu with an item already selected means the hook has to know in advance what items you plan to render and what is the position of that item in the list.
     * Consequently, there won't be any need for two state changes: one for opening the menu and one for setting the highlighted index, like in useSelect.
     *
     * https://github.com/downshift-js/downshift/tree/master/src/hooks/useCombobox#items
     */
    items,

    /**
     * If your items are stored as, say, objects instead of strings, downshift still needs a string representation for each one.
     * This is required for accessibility aria-live messages (e.g., after removing a selection).
     */
    itemToString: item => item?.text ?? '',

    /**
     * Called each time the selected item was changed.
     * Selection can be performed by item click, Enter Key while item is highlighted or by blurring the menu while an item is highlighted (Tab, Shift-Tab or clicking away).
     */
    onSelectedItemChange: ({ selectedItem }) => {
      if (selectedItem?.value && !multiple) {
        onValueChange?.(selectedItem?.value as OnChangeValueType)
      }
    },

    /**
     * This function will be called each time useCombobox sets its internal state (or calls your onStateChange handler for control props).
     * It allows you to modify the state change that will take place which can give you fine grain control over how the component interacts with user updates.
     *
     * It gives you the current state and the state that will be set, and you return the state that you want to set.
     */
    stateReducer: multiple
      ? multipleSelectionReducer({
          updateInputValue,
          allowCustomValue,
          selectedItems: downshiftMultipleSelection.selectedItems,
          removeSelectedItem: downshiftMultipleSelection.removeSelectedItem,
          addSelectedItem: downshiftMultipleSelection.addSelectedItem,
        })
      : singleSelectionReducer({ itemsMap, updateInputValue, allowCustomValue }),

    /**
     * If an item needs to be marked as disabled, this function needs to return true for that item.
     * Disabled items will be skipped from keyboard navigation, will not be selected and will be marked as disabled for screen readers.
     */
    isItemDisabled: item => {
      const isFilteredOut =
        !!inputValue &&
        ![...filteredItems].some(([_, filteredItem]) => {
          return item.value === filteredItem.value
        })

      return item.disabled || isFilteredOut
    },

    /**
     * Pass an item that should be selected when downshift is initialized.
     */
    initialSelectedItem: defaultValue ? itemsMap.get(defaultValue as string) : undefined,

    /**
     * Pass a boolean that sets the open state of the menu when downshift is initialized.
     */
    initialIsOpen: defaultOpen ?? false,

    // initialHighlightedIndex,
    // initialInputValue,
    // defaultSelectedItem,
    // defaultIsOpen,
    // defaultHighlightedIndex,
    // defaultInputValue,
    // selectedItemChanged,
    // getA11yStatusMessage,
    // getA11ySelectionMessage,
    // onHighlightedIndexChange,
    /**
     * Called each time the menu is open or closed. Menu can be open by toggle button click, Enter, Space, Up Arrow or Down Arrow keys.
     * Can be closed by selecting an item, blur (Tab, Shift-Tab or clicking outside), clicking the toggle button again or hitting Escape key.
     */
    onIsOpenChange: ({ isOpen }) => {
      if (isOpen != null) onOpenChange?.(isOpen)
    },

    // onInputValueChange,
    // onStateChange,
    // highlightedIndex, (Controlled mode)
    /**
     * The open state of the menu. (Controlled mode)
     */
    isOpen: open,

    /**
     * The item that should be selected. (Controlled mode)
     */
    selectedItem: value ? itemsMap.get(value as string) : undefined,

    /**
     * The value to be displayed in the text input. (Controlled mode)
     */
    inputValue,

    /**
     * Used to generate the first part of the Downshift id on the elements.
     * You can override this id with one of your own, provided as a prop, or you can override the id for each element altogether using the props below.
     */
    id,

    /**
     * Used for aria attributes and the id prop of the element (label) you use getLabelProps with.
     *
     * https://github.com/downshift-js/downshift/tree/master/src/hooks/useCombobox#labelid
     */
    labelId,
    // menuId,
    // toggleButtonId,
    // inputId,
    // getItemId,
    // environment,
  })

  return {
    ...downshift,
    ...downshiftMultipleSelection,
  }
}
