import type { ReactElement, ReactNode } from 'react'
import { Children, isValidElement } from 'react'

import { hasChildren } from './hasChildren'

function hasComplexChildren(
  element: ReactNode
): element is ReactElement<{ children: ReactNode | ReactNode[] }> {
  return (
    isValidElement(element) &&
    hasChildren(element) &&
    Children.toArray(element.props.children).reduce(
      (response: boolean, child: ReactNode): boolean => response || isValidElement(child),
      false
    )
  )
}

export { hasComplexChildren }
