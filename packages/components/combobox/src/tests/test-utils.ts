import { screen } from '@testing-library/react'

export const getInput = (accessibleName: string) => {
  return screen.getByRole('combobox', { name: accessibleName })
}

export const getListbox = (accessibleName: string) => {
  return screen.getByRole('listbox', { name: accessibleName })
}

export const getItemsGroup = (accessibleName: string) => {
  return screen.getByRole('group', { name: accessibleName })
}

export const getItem = (accessibleName: string) => {
  return screen.getByRole('option', { name: accessibleName })
}

export const queryItem = (accessibleName: string) => {
  return screen.queryByRole('option', { name: accessibleName })
}
