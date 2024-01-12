import React, { type FC, isValidElement, type ReactElement, type ReactNode } from 'react'

import { type ItemProps } from './DropdownItem'
import { type DropdownItem, type ItemsMap } from './types'

export function getIndexByKey(map: ItemsMap, targetKey: string) {
  let index = 0
  for (const [key] of map.entries()) {
    if (key === targetKey) {
      return index
    }
    index++
  }

  return -1
}

const getKeyAtIndex = (map: ItemsMap, index: number) => {
  let i = 0
  for (const key of map.keys()) {
    if (i === index) return key
    i++
  }

  return undefined
}

export const getElementByIndex = (map: ItemsMap, index: number) => {
  const key = getKeyAtIndex(map, index)

  return key !== undefined ? map.get(key) : undefined
}

const getElementDisplayName = (element?: ReactElement) => {
  return element ? (element.type as FC & { displayName?: string }).displayName : ''
}

export const getOrderedItems = (
  children: ReactNode,
  result: DropdownItem[] = []
): DropdownItem[] => {
  React.Children.forEach(children, child => {
    if (!isValidElement(child)) return

    if (getElementDisplayName(child) === 'Dropdown.Item') {
      const childProps = child.props as ItemProps
      result.push({
        value: childProps.value,
        disabled: !!childProps.disabled,
        text: getItemText(childProps.children),
      })
    }

    if (child.props.children) {
      getOrderedItems(child.props.children, result)
    }
  })

  return result
}

/**
 * If Dropdown.Item children:
 * - is a string, then the string is used.
 * - is JSX markup, then we look for Dropdown.ItemText to get its string value.
 */
export const getItemText = (children: ReactNode, itemText = ''): string => {
  if (typeof children === 'string') {
    return children
  }

  React.Children.forEach(children, child => {
    if (!isValidElement(child)) return

    if (getElementDisplayName(child) === 'Dropdown.ItemText') {
      itemText = child.props.children
    }

    if (child.props.children) {
      getItemText(child.props.children, itemText)
    }
  })

  return itemText
}

export const getItemsFromChildren = (children: ReactNode): ItemsMap => {
  const newMap: ItemsMap = new Map()

  getOrderedItems(children).forEach(itemData => {
    newMap.set(itemData.value, itemData)
  })

  return newMap
}

export const hasChildComponent = (children: ReactNode, displayName: string): boolean => {
  return React.Children.toArray(children).some(child => {
    if (!isValidElement(child)) return false

    if (getElementDisplayName(child) === displayName) {
      return true
    } else if (child.props.children) {
      return hasChildComponent(child.props.children, displayName)
    }

    return false
  })
}
