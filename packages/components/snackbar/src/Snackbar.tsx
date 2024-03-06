import { type AriaToastRegionProps, useToastRegion } from '@react-aria/toast'
import {
  type ToastOptions as SnackBarItemOptions,
  ToastQueue,
  useToastQueue,
} from '@react-stately/toast'
import {
  cloneElement,
  type ComponentPropsWithoutRef,
  forwardRef,
  type ReactElement,
  type RefObject,
  useEffect,
  useRef,
} from 'react'
import { createPortal } from 'react-dom'

import { snackbarRegionVariant, type SnackbarRegionVariantProps } from './Snackbar.styles'
import { SnackbarItem, type SnackbarItemProps, type SnackbarItemValue } from './SnackbarItem'
import { SnackbarItemContext } from './SnackbarItemContext'
import { useSnackbarGlobalStore } from './useSnackbarGlobalStore'

export interface SnackbarProps
  extends ComponentPropsWithoutRef<'div'>,
    AriaToastRegionProps,
    SnackbarRegionVariantProps {
  /**
   * The component/template used to display each snackbar from the queue
   * @default 'Snackbar.Item'
   */
  children?: ReactElement<SnackbarItemProps, typeof SnackbarItem>
}

/**
 * We define here a global queue thanks to dedicated util from React Spectrum.
 * It is based on React `useSyncExternalStore` and allows us to consume data from
 * an external data store, and thus preventing use of React context that could
 * lead to unwanted rerenderings. It also simplifies initial implementation.
 */
let GLOBAL_SNACKBAR_QUEUE: ToastQueue<SnackbarItemValue> | null = null

const getGlobalSnackBarQueue = () => {
  if (!GLOBAL_SNACKBAR_QUEUE) {
    GLOBAL_SNACKBAR_QUEUE = new ToastQueue({
      maxVisibleToasts: 1,
      hasExitAnimation: true,
    })
  }

  return GLOBAL_SNACKBAR_QUEUE
}

export const clearSnackbarQueue = () => {
  GLOBAL_SNACKBAR_QUEUE = null
}

/**
 * We define a global store that will be used  with React `useSyncExternalStore` hook
 * and will allow us to ensure we always have a single Snackbar container.
 */
const GLOBAL_SNACKBAR_STORE = {
  providers: new Set<RefObject<HTMLDivElement>>(),
  subscriptions: new Set<() => void>(),
}

export const Snackbar = forwardRef<HTMLDivElement, SnackbarProps>(
  (
    { children = <SnackbarItem />, position = 'bottom', className, ...rest },
    forwardedRef
  ): ReactElement | null => {
    const innerRef = useRef<HTMLDivElement>(null)
    const ref = forwardedRef && typeof forwardedRef !== 'function' ? forwardedRef : innerRef

    const state = useToastQueue(getGlobalSnackBarQueue())
    const { regionProps } = useToastRegion(rest, state, ref)

    const { provider, addProvider, deleteProvider } = useSnackbarGlobalStore(GLOBAL_SNACKBAR_STORE)

    useEffect(() => {
      addProvider(ref)

      return () => deleteProvider(ref)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return ref === provider && state.visibleToasts.length > 0
      ? createPortal(
          <div
            {...regionProps}
            ref={ref}
            data-position={position}
            className={snackbarRegionVariant({ position, className })}
          >
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

export interface AddSnackbarArgs extends SnackbarItemValue, SnackBarItemOptions {
  /**
   * Handler that is called when the snackbar is closed, either by the user
   * or after a timeout.
   */
  onClose?: () => void
  /**
   * A timeout to automatically close the snackbar after, in milliseconds.
   * @default 5000
   */
  timeout?: number
  /**
   * The priority of the snackbar relative to other snackbars. Larger numbers indicate higher priority.
   */
  priority?: number
}

export const addSnackbar = ({ onClose, timeout = 5000, priority, ...content }: AddSnackbarArgs) => {
  const queue = getGlobalSnackBarQueue()

  queue.add(content, {
    onClose,
    timeout: timeout ? Math.max(timeout, 5000) : undefined,
    priority,
  })
}
