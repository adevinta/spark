import { type AriaToastRegionProps, useToastRegion } from '@react-aria/toast'
import {
  type ToastOptions as SnackBarItemOptions,
  ToastQueue,
  useToastQueue,
} from '@react-stately/toast'
import { cloneElement, forwardRef, type ReactElement, useRef } from 'react'
import { createPortal } from 'react-dom'

import { SnackbarItem, type SnackbarItemProps, type SnackbarItemValue } from './SnackbarItem'
import { SnackbarItemContext } from './SnackBarItemContext'

export interface SnackbarProps extends AriaToastRegionProps {
  /**
   * The component/template used to display each snackbar from the queue
   * @default 'Snackbar.Item'
   */
  children?: ReactElement<SnackbarItemProps, typeof SnackbarItem>
}

/**
 * We define here a global queue thanks to dedicated util from React Spectrum.
 * It is based on `useSyncExternalStore` and allows us to consume data from
 * an external data store, and thus preventing use of React context that could
 * lead to unwanted rerenderings. It also simplifies initial implementation.
 */
let GLOBAL_SNACKBAR_QUEUE: ToastQueue<SnackbarItemValue> | null = null

const getGlobalSnackBarQueue = () => {
  if (!GLOBAL_SNACKBAR_QUEUE) {
    GLOBAL_SNACKBAR_QUEUE = new ToastQueue({
      maxVisibleToasts: 5,
    })
  }

  return GLOBAL_SNACKBAR_QUEUE
}

export const clearSnackbarQueue = () => {
  GLOBAL_SNACKBAR_QUEUE = null
}

export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(
  ({ children = <SnackbarItem />, ...rest }, forwardedRef): ReactElement | null => {
    const innerRef = useRef<HTMLDivElement>(null)
    const ref = forwardedRef && typeof forwardedRef !== 'function' ? forwardedRef : innerRef

    const state = useToastQueue(getGlobalSnackBarQueue())
    const { regionProps } = useToastRegion(rest, state, ref)

    return state.visibleToasts.length > 0
      ? createPortal(
          <div {...regionProps} ref={ref}>
            {state.visibleToasts.map(toast => (
              <SnackbarItemContext.Provider key={toast.key} value={{ toast, state }}>
                {cloneElement(children, { key: toast.key })}
              </SnackbarItemContext.Provider>
            ))}
          </div>,
          document.body
        )
      : null
  }
)

Snackbar.displayName = 'Snackbar'

export const addSnackbar = (value: SnackbarItemValue, options: SnackBarItemOptions = {}) => {
  const timeout = options.timeout ? Math.max(options.timeout, 5000) : 5000
  const queue = getGlobalSnackBarQueue()

  queue.add(value, { ...options, timeout })
}
