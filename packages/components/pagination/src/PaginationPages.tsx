import * as pagination from '@zag-js/pagination'
import { ReactNode } from 'react'

import { usePagination } from './PaginationContext'

interface PagesProps {
  children: (pagination: pagination.Api) => ReactNode
}

export const Pages = ({ children }: PagesProps) => {
  const { pagination } = usePagination()

  return children(pagination)
}

Pages.displayName = 'Pagination.Pages'
