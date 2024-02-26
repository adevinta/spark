import { type ToastOptions as SnackBarItemOptions } from '@react-stately/toast'
import type { FC } from 'react'

import { addSnackbar, clearSnackbarQueue, Snackbar as Root, SnackbarProps } from './Snackbar'
import { SnackbarItem as Item } from './SnackbarItem'

export const Snackbar: FC<SnackbarProps> & {
  Item: typeof Item
} = Object.assign(Root, {
  Item,
})

Snackbar.displayName = 'SnackBar'
Item.displayName = 'SnackBar.Item'

export type { SnackbarProps, SnackBarItemOptions }
export { addSnackbar, clearSnackbarQueue }
