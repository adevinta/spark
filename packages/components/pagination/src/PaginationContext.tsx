import { type IconButtonProps } from '@spark-ui/icon-button'
import * as pagination from '@zag-js/pagination'
import { normalizeProps, useMachine } from '@zag-js/react'
import { createContext, type ReactNode, useContext, useId } from 'react'

import { sliceArrayWithIndex } from './utils'

export interface PaginationContextState {
  pagination: pagination.Api & {
    getFirstPageTriggerProps: () => Partial<IconButtonProps> & { 'aria-label': string }
    getLastPageTriggerProps: () => Partial<IconButtonProps> & { 'aria-label': string }
  }
}

const PaginationContext = createContext<PaginationContextState | null>(null)

export interface PaginationProviderProps {
  children: ReactNode
  /**
   * How many items are displayed in total (when including all pages)
   */
  count: number
  /**
   * Maximum amount of items displayed on a single page.
   */
  pageSize: number
  /**
   * Number of items (numbered pages and/or ellipsis) to display between previous and next page triggers.
   */
  length?: number
  /**
   * The current page (active page)
   */
  page?: pagination.Context['page']
  onPageChange?: pagination.Context['onPageChange']
  noEllipsis?: boolean
  translations?: pagination.Context['translations'] & {
    firstPageTriggerLabel?: string
    lastPageTriggerLabel?: string
  }
}

export const PaginationProvider = ({
  children,
  count,
  length = 7,
  pageSize,
  page,
  onPageChange,
  noEllipsis,
  translations,
}: PaginationProviderProps) => {
  /**
   * Here `Infinity` is used because we apply a custom slice ourselves to manage the "no ellipsis" version.
   * It means Zag won't filter out any page item, allowing us to apply our own slicing logic.
   */
  const siblingCount = noEllipsis ? Infinity : Math.max(0, Math.floor((length - 5) / 2))

  const id = useId()

  const [state, send] = useMachine(
    pagination.machine({
      id,
      count,
      siblingCount,
      pageSize,
      page,
      onPageChange,
      translations,
      type: 'button',
    }),
    // Dynamic state
    { context: { page, count, siblingCount, pageSize, translations } }
  )

  const api = pagination.connect(state, send, normalizeProps)
  const pages = noEllipsis ? sliceArrayWithIndex(api.pages, api.page - 1, length) : api.pages

  return (
    <PaginationContext.Provider
      value={{
        pagination: {
          ...api,
          pages,
          // Extending ZagJS anatomy
          getFirstPageTriggerProps: () => {
            const apiProps = api.getPrevTriggerProps()

            return {
              ...apiProps,
              id: `${api.getRootProps().id}:first`,
              'data-part': 'first-page-trigger',
              'aria-label': translations?.firstPageTriggerLabel || 'first page',
              onClick: api.goToFirstPage,
            }
          },
          getLastPageTriggerProps: () => {
            const apiProps = api.getNextTriggerProps()

            return {
              ...apiProps,
              id: `${api.getRootProps().id}:last`,
              'data-part': 'last-page-trigger',
              'aria-label': translations?.lastPageTriggerLabel || 'last page',
              onClick: api.goToLastPage,
            }
          },
        },
      }}
    >
      {children}
    </PaginationContext.Provider>
  )
}

export const usePagination = () => {
  const context = useContext(PaginationContext)

  if (!context) {
    throw Error('usePagination must be used within a Pagination provider')
  }

  return context
}
