import { useId } from '@radix-ui/react-id'
import { useFormFieldControl } from '@spark-ui/form-field'
import { Popover } from '@spark-ui/popover'
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

import { type ComboboxItem, type DownshiftState, type ItemsMap } from './types'
import { useCombobox } from './useCombobox'
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
  setIsInputControlled: Dispatch<SetStateAction<boolean>>
  setOnInputValueChange: Dispatch<SetStateAction<((value: string) => void) | undefined>>
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
  autoSelect?: boolean
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
  autoSelect = true,
  children,
  defaultValue,
  value,
  onValueChange,
  open,
  onOpenChange,
  defaultOpen,
  multiple = false,
  disabled: disabledProp = false,
  readOnly: readOnlyProp = false,
  state: stateProp,
}: ComboboxContextProps) => {
  // Input state
  const field = useFormFieldControl()
  const [inputValue, setInputValue] = useState<string | undefined>('')
  const [onInputValueChange, setOnInputValueChange] = useState<(value: string) => void>()
  const [isInputControlled, setIsInputControlled] = useState(false)
  const state = field.state || stateProp
  const id = useId(field.id)
  const labelId = useId(field.labelId)
  const disabled = field.disabled ?? disabledProp
  const readOnly = field.readOnly ?? readOnlyProp

  // Items state
  const [itemsMap, setItemsMap] = useState<ItemsMap>(getItemsFromChildren(children))
  const [filteredItemsMap, setFilteredItems] = useState(
    autoSelect ? getFilteredItemsMap(itemsMap, inputValue) : itemsMap
  )
  const [hasPopover, setHasPopover] = useState<boolean>(
    hasChildComponent(children, 'Combobox.Popover')
  )
  const [lastInteractionType, setLastInteractionType] = useState<'mouse' | 'keyboard'>('mouse')

  useEffect(() => {
    setFilteredItems(autoSelect ? getFilteredItemsMap(itemsMap, inputValue) : itemsMap)
  }, [inputValue, itemsMap])

  const handleDownshiftInputChange = (value: string | undefined) => {
    if (!isInputControlled) {
      setInputValue(value)
    }
  }

  // Downshift state
  const comboboxState = useCombobox({
    itemsMap,
    defaultValue,
    value,
    onValueChange,
    open,
    onOpenChange,
    defaultOpen,
    multiple,
    id,
    labelId,
    inputValue,
    setInputValue: handleDownshiftInputChange,
    onInputValueChange,
    filteredItems: filteredItemsMap,
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
        multiple,
        disabled,
        readOnly,
        ...comboboxState,
        itemsMap,
        filteredItemsMap,
        highlightedItem: getElementByIndex(itemsMap, comboboxState.highlightedIndex),
        hasPopover,
        setHasPopover,
        state,
        lastInteractionType,
        setLastInteractionType,
        setIsInputControlled,
        setInputValue,
        setOnInputValueChange,
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
