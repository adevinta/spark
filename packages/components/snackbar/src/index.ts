import type { FC } from 'react'

import {
  addSnackbar,
  type AddSnackbarArgs,
  clearSnackbarQueue,
  Snackbar as Root,
  type SnackbarProps,
} from './Snackbar'
import { SnackbarItem as Item, type SnackbarItemProps } from './SnackbarItem'

export const Snackbar: FC<SnackbarProps> & {
  Item: typeof Item
} = Object.assign(Root, {
  Item,
})

Snackbar.displayName = 'SnackBar'
Item.displayName = 'SnackBar.Item'

export type { SnackbarProps, SnackbarItemProps, AddSnackbarArgs }
export { addSnackbar, clearSnackbarQueue }
