import { type FC, type ReactElement } from 'react'

const getElementId = (element?: ReactElement) => {
  return element ? (element.type as FC & { id?: string }).id : ''
}

export const findElement = (value: string, children: ReactElement[]) => {
  return children.find(child => value === getElementId(child) || '')
}
