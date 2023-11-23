import React, { type FC, isValidElement, type ReactElement, type ReactNode } from 'react'

import { type ItemProps } from './DropdownItem'
import { type ItemsMap } from './types'

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

const getElementId = (element?: ReactElement) => {
  return element ? (element.type as FC & { id?: string }).id : ''
}

export const getOrderedItems = (children: ReactNode, result: ItemProps[] = []): ItemProps[] => {
  React.Children.forEach(children, child => {
    if (!isValidElement(child)) return

    if (getElementId(child) === 'Item') {
      result.push(child.props as ItemProps)
    }

    if (child.props.children) {
      getOrderedItems(child.props.children, result)
    }
  })

  return result
}
