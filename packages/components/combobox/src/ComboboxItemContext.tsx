import React, { createContext, type PropsWithChildren, useContext, useState } from 'react'

import { useComboboxContext } from './ComboboxContext'
import { ComboboxItem } from './types'
import { getIndexByKey, getItemText } from './utils'

type ItemTextId = string | undefined

interface ComboboxItemContextState {
  textId: ItemTextId
  setTextId: React.Dispatch<React.SetStateAction<ItemTextId>>
  isSelected: boolean
  itemData: ComboboxItem
  index: number
  disabled: boolean
}

const ComboboxItemContext = createContext<ComboboxItemContextState | null>(null)

export const ComboboxItemProvider = ({
  value,
  disabled = false,
  children,
}: PropsWithChildren<{ value: string; disabled?: boolean }>) => {
  const { multiple, itemsMap, selectedItem, selectedItems } = useComboboxContext()

  const [textId, setTextId] = useState<ItemTextId>(undefined)

  const index = getIndexByKey(itemsMap, value)
  const itemData: ComboboxItem = { disabled, value, text: getItemText(children) }

  const isSelected = multiple
    ? selectedItems.some(selectedItem => selectedItem.value === value)
    : selectedItem?.value === value

  return (
    <ComboboxItemContext.Provider
      value={{ textId, setTextId, isSelected, itemData, index, disabled }}
    >
      {children}
    </ComboboxItemContext.Provider>
  )
}

export const useComboboxItemContext = () => {
  const context = useContext(ComboboxItemContext)

  if (!context) {
    throw Error('useComboboxItemContext must be used within a ComboboxItem provider')
  }

  return context
}
