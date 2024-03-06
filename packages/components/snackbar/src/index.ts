import type { FC } from 'react'

import {
  addSnackbar,
  type AddSnackbarArgs,
  clearSnackbarQueue,
  Snackbar as Root,
  type SnackbarProps,
} from './Snackbar'
import { SnackbarItem as Item, type SnackbarItemProps } from './SnackbarItem'
import { SnackbarItemClose as ItemClose, type SnackbarItemCloseProps } from './SnackbarItemClose'
import { SnackbarItemIcon as ItemIcon, type SnackbarItemIconProps } from './SnackbarItemIcon'

export const Snackbar: FC<SnackbarProps> & {
  Item: typeof Item
  ItemClose: typeof ItemClose
  ItemIcon: typeof ItemIcon
} = Object.assign(Root, {
  Item,
  ItemClose,
  ItemIcon,
})

Snackbar.displayName = 'Snackbar'
Item.displayName = 'Snackbar.Item'
ItemClose.displayName = 'Snackbar.ItemClose'
ItemIcon.displayName = 'Snackbar.ItemIcon'

export type {
  SnackbarProps,
  SnackbarItemProps,
  SnackbarItemCloseProps,
  SnackbarItemIconProps,
  AddSnackbarArgs,
}
export { addSnackbar, clearSnackbarQueue }
