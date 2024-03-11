import { useId } from '@radix-ui/react-id'
import { useFormFieldControl } from '@spark-ui/form-field'
import { Popover } from '@spark-ui/popover'
import { useCombobox, useMultipleSelection } from 'downshift'
import {
  createContext,
  Dispatch,
  Fragment,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from 'react'

import { type ComboboxItem, type DownshiftState, type ItemsMap } from './types'
import { multipleSelectionReducer } from './useCombobox/multipleSelectionReducer'
import { singleSelectionReducer } from './useCombobox/singleSelectionReducer'
import { getElementByIndex, getItemsFromChildren, hasChildComponent } from './utils'

export interface ComboboxContextState extends DownshiftState {
  itemsMap: ItemsMap
  filteredItemsMap: ItemsMap
  highlightedItem: ComboboxItem | undefined
  hasPopover: boolean
  setHasPopover: Dispatch<SetStateAction<boolean>>
  multiple: boolean
  disabled: boolean
  readOnly: boolean
  state?: 'error' | 'alert' | 'success'
  lastInteractionType: 'mouse' | 'keyboard'
  setLastInteractionType: (type: 'mouse' | 'keyboard') => void

  innerInputRef: React.RefObject<HTMLInputElement>
  triggerAreaRef: React.RefObject<HTMLDivElement>
}

export type ComboboxContextCommonProps = PropsWithChildren<{
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
  /**
   * Use `state` prop to assign a specific state to the combobox, choosing from: `error`, `alert` and `success`. By doing so, the outline styles will be updated, and a state indicator will be displayed accordingly.
   */
  state?: 'error' | 'alert' | 'success'
  /**
   * When true, prevents the user from interacting with the combobox.
   */
  disabled?: boolean
  /**
   * Sets the combobox as interactive or not.
   */
  readOnly?: boolean
  /**
   * When true, the items will be filtered depending on the value of the input (not case-sensitive).
   */
  autoFilter?: boolean
  /**
   * By default, the combobox will clear or restore the input value to the selected item value on blur.
   */
  allowCustomValue?: boolean
}>

interface ComboboxPropsSingle {
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

interface ComboboxPropsMultiple {
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

export type ComboboxContextProps = ComboboxContextCommonProps &
  (ComboboxPropsSingle | ComboboxPropsMultiple)

const ComboboxContext = createContext<ComboboxContextState | null>(null)

const getFilteredItemsMap = (map: ItemsMap, inputValue: string | undefined): ItemsMap => {
  if (!inputValue) return map

  return new Map(
    Array.from(map).filter(([_, { text }]) => text.toLowerCase().includes(inputValue.toLowerCase()))
  )
}

export const ComboboxProvider = ({
  allowCustomValue = false,
  autoFilter = true,
  children,
  defaultOpen,
  defaultValue,
  disabled: disabledProp = false,
  multiple = false,
  // onValueChange,
  readOnly: readOnlyProp = false,
  state: stateProp,
}: ComboboxContextProps) => {
  // Input state
  const [inputValue, setInputValue] = useState<string | undefined>('')
  const triggerAreaRef = useRef<HTMLDivElement>(null)
  const innerInputRef = useRef<HTMLInputElement>(null)

  // Items state
  const [itemsMap, setItemsMap] = useState<ItemsMap>(getItemsFromChildren(children))
  const [filteredItemsMap, setFilteredItems] = useState(
    autoFilter ? getFilteredItemsMap(itemsMap, inputValue) : itemsMap
  )
  const [selectedItems, setSelectedItems] = useState<ComboboxItem[]>([])

  // Form field state
  const field = useFormFieldControl()
  const id = useId(field.id)
  const labelId = useId(field.labelId)
  const state = field.state || stateProp
  const disabled = field.disabled ?? disabledProp
  const readOnly = field.readOnly ?? readOnlyProp

  const [hasPopover, setHasPopover] = useState<boolean>(
    hasChildComponent(children, 'Combobox.Popover')
  )
  const [lastInteractionType, setLastInteractionType] = useState<'mouse' | 'keyboard'>('mouse')

  useEffect(() => {
    setFilteredItems(autoFilter ? getFilteredItemsMap(itemsMap, inputValue) : itemsMap)
  }, [inputValue, itemsMap])

  const multiselect = useMultipleSelection<ComboboxItem>({
    selectedItems,
    initialSelectedItems: defaultValue
      ? [...itemsMap.values()].filter(item => (defaultValue as string[]).includes(item.value))
      : undefined,
    stateReducer: (state, { type, changes }) => {
      switch (type) {
        case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownDelete:
          setSelectedItems(changes.selectedItems || [])

          return {
            ...changes,
            activeIndex:
              state?.activeIndex === changes.selectedItems?.length ? -1 : state.activeIndex,
          }
        case useMultipleSelection.stateChangeTypes.SelectedItemKeyDownBackspace:
          setSelectedItems(changes.selectedItems || [])

          return {
            ...changes,
            ...((changes?.activeIndex || 0) - 1 >= 0 && {
              activeIndex: state.activeIndex - 1,
            }),
          }
        case useMultipleSelection.stateChangeTypes.SelectedItemClick:
          if (innerInputRef.current) {
            innerInputRef.current.focus()
          }

          return {
            ...changes,
            activeIndex: -1, // the focus will remain on the input
          }
        case useMultipleSelection.stateChangeTypes.FunctionRemoveSelectedItem:
          return {
            ...changes,
            activeIndex: -1, // the focus will remain on the input
          }
        case useMultipleSelection.stateChangeTypes.DropdownKeyDownNavigationPrevious:
          downshift.closeMenu()

          return changes
        default:
          return changes
      }
    },
  })

  const filteredItems = Array.from(filteredItemsMap.values())

  /**
   * - props: https://github.com/downshift-js/downshift/tree/master/src/hooks/useCombobox#basic-props
   * - state (for state reducer): https://github.com/downshift-js/downshift/tree/master/src/hooks/useCombobox#statechangetypes
   * - output: https://github.com/downshift-js/downshift/tree/master/src/hooks/useCombobox#returned-props
   */
  const downshift = useCombobox<ComboboxItem>({
    items: filteredItems,
    id,
    labelId,
    initialIsOpen: defaultOpen,
    initialSelectedItem: defaultValue ? itemsMap.get(defaultValue as string) : undefined,
    ...(multiple && { selectedItem: undefined }),
    itemToString: item => (item as ComboboxItem).text,
    isItemDisabled: item => {
      const isFilteredOut =
        !!inputValue &&
        !filteredItems.some(filteredItem => {
          return item.value === filteredItem.value
        })

      return item.disabled || isFilteredOut
    },
    onInputValueChange: ({ inputValue }) => {
      if (autoFilter) {
        const filtered = getFilteredItemsMap(itemsMap, inputValue || '')
        setFilteredItems(filtered)
      }
    },
    stateReducer: multiple
      ? multipleSelectionReducer({
          multiselect,
          selectedItems,
          allowCustomValue,
          setSelectedItems,
          triggerAreaRef,
        })
      : singleSelectionReducer({
          allowCustomValue,
          filteredItems: [...filteredItemsMap.values()],
        }),
  })

  /**
   * Indices in a Map are set when an element is added to the Map.
   * If for some reason, in the Combobox:
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
      previousItems.some((item, index) => {
        const hasUpdatedValue = item.value !== newItems[index]?.value
        const hasUpdatedText = item.text !== newItems[index]?.text

        return hasUpdatedValue || hasUpdatedText
      })

    if (hasItemsChanges) {
      setItemsMap(newMap)
    }
  }, [children])

  /**
   * Warning:
   * Downshift is expecting the items list to always be rendered, as per a11y guidelines.
   * This is why the `Popover` is always opened in this component, but visually hidden instead from Combobox.Popover.
   */
  const [WrapperComponent, wrapperProps] = hasPopover ? [Popover, { open: true }] : [Fragment, {}]

  return (
    <ComboboxContext.Provider
      value={{
        // Data
        itemsMap,
        filteredItemsMap,
        highlightedItem: getElementByIndex(filteredItemsMap, downshift.highlightedIndex),
        // State
        multiple,
        disabled,
        readOnly,
        hasPopover,
        setHasPopover,
        state,
        lastInteractionType,
        setLastInteractionType,
        // Refs
        innerInputRef,
        triggerAreaRef,
        // Downshift state
        ...downshift,
        ...multiselect,
        setInputValue, // todo -override downshift logic (merge)
        setSelectedItems, // todo -override downshift logic (merge)
      }}
    >
      <WrapperComponent {...wrapperProps}>{children}</WrapperComponent>
    </ComboboxContext.Provider>
  )
}

export const useComboboxContext = () => {
  const context = useContext(ComboboxContext)

  if (!context) {
    throw Error('useComboboxContext must be used within a Combobox provider')
  }

  return context
}
