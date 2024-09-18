import { ReactNode } from 'react'

import {
  PaginationProvider,
  type PaginationProviderProps,
  usePagination,
} from './PaginationContext'

export type PaginationProps = PaginationProviderProps

export const Pagination = ({
  children,
  visiblePageItems = 7,
  type = 'link',
  noEllipsis = false,
  ...rest
}: PaginationProviderProps) => {
  return (
    <PaginationProvider
      visiblePageItems={visiblePageItems}
      noEllipsis={noEllipsis}
      type={type}
      {...rest}
    >
      <PaginationWrapper>{children}</PaginationWrapper>
    </PaginationProvider>
  )
}

const PaginationWrapper = ({ children }: { children: ReactNode }) => {
  const { pagination } = usePagination()

  const props = pagination.getRootProps()

  return (
    <nav {...props}>
      <ul className="flex flex-wrap gap-md">{children}</ul>
    </nav>
  )
}

Pagination.displayName = 'Pagination'
