import { screen, within } from '@testing-library/react'

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

export const getSelectedItem = (accessibleName: string) => {
  return screen.getByText(accessibleName, {
    selector: '[data-spark-component="combobox-selected-items"]',
  })
}

export const getSelectedItemClearButton = (accessibleName: string) => {
  const selectedItem = getSelectedItem(accessibleName)

  return within(selectedItem).getByRole('button', { hidden: true })
}

export const querySelectedItem = (accessibleName: string) => {
  return screen.queryByText(accessibleName, {
    selector: '[data-spark-component="combobox-selected-items"]',
  })
}

export const getClearButton = (accessibleName: string) => {
  return screen.getByRole('button', { name: accessibleName })
}
