import type { ReactElement, ReactNode } from 'react'
import { isValidElement } from 'react'

function hasChildren(
  element: ReactNode
): element is ReactElement<{ children: ReactNode | ReactNode[] }> {
  return isValidElement<{ children?: ReactNode[] }>(element) && Boolean(element.props.children)
}

export { hasChildren }
