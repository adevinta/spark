import React, { type FC, isValidElement, type ReactElement, type ReactNode } from 'react'

import { type ItemProps } from '../ComboboxItem'
import { type ComboboxItem, type ItemsMap } from '../types'

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
  result: ComboboxItem[] = []
): ComboboxItem[] => {
  React.Children.forEach(children, child => {
    if (!isValidElement(child)) return

    if (getElementDisplayName(child) === 'Combobox.Item') {
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

const findNestedItemText = (children: React.ReactNode): string => {
  if (!children) return ''

  for (const child of React.Children.toArray(children)) {
    if (React.isValidElement(child)) {
      const childElement = child as React.ReactElement

      if (getElementDisplayName(childElement) === 'Combobox.ItemText') {
        return childElement.props.children
      }

      const foundText = findNestedItemText(childElement.props.children)

      if (foundText) return foundText
    }
  }

  return ''
}

/**
 * If Combobox.Item children:
 * - is a string, then the string is used.
 * - is JSX markup, then we look for Combobox.ItemText to get its string value.
 */
export const getItemText = (children: React.ReactNode): string => {
  return typeof children === 'string' ? children : findNestedItemText(children)
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

export const findElement = (children: ReactNode, value: string) => {
  return React.Children.toArray(children)
    .filter(React.isValidElement)
    .find(child => value === getElementDisplayName(child) || '')
}
