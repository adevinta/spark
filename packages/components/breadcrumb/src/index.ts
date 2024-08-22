import type { FC } from 'react'

import { Breadcrumb as Root, type BreadcrumbProps } from './Breadcrumb'
import { CurrentPage } from './BreadcrumbCurrentPage'
import { Item } from './BreadcrumbItem'
import { Link } from './BreadcrumbLink'
import { Separator } from './BreadcrumbSeparator'

export const Breadcrumb: FC<BreadcrumbProps> & {
  Item: typeof Item
  Link: typeof Link
  CurrentPage: typeof CurrentPage
  Separator: typeof Separator
} = Object.assign(Root, {
  Item,
  Link,
  CurrentPage,
  Separator,
})

Breadcrumb.displayName = 'Breadcrumb'
Item.displayName = 'Breadcrumb.Item'
Link.displayName = 'Breadcrumb.Link'
CurrentPage.displayName = 'Breadcrumb.CurrentPage'
Separator.displayName = 'Breadcrumb.Separator'
