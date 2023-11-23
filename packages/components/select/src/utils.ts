import React, { Children, type FC, isValidElement, type ReactElement } from 'react'

const getElementId = (element?: ReactElement) => {
  return element ? (element.type as FC & { id?: string }).id : ''
}

export const findElement =
  (children: React.ReactNode) =>
  (...values: string[]) => {
    const validChildren = Children.toArray(children).filter(isValidElement)

    return validChildren.find(child => {
      const displayName = getElementId(child)

      return values.includes(displayName || '')
    })
  }
