import { cx } from 'class-variance-authority'
import { forwardRef, ReactNode, type Ref } from 'react'

import { DropdownGroupProvider, useDropdownGroupContext } from './DropdownItemsGroupContext'

interface GroupProps {
  children: ReactNode
  className?: string
}

export const Group = forwardRef(
  ({ children, ...props }: GroupProps, forwardedRef: Ref<HTMLDivElement>) => {
    return (
      <DropdownGroupProvider>
        <GroupContent ref={forwardedRef} {...props}>
          {children}
        </GroupContent>
      </DropdownGroupProvider>
    )
  }
)

const GroupContent = forwardRef(
  ({ children, className }: GroupProps, forwardedRef: Ref<HTMLDivElement>) => {
    const { labelId } = useDropdownGroupContext()

    return (
      <div ref={forwardedRef} role="group" aria-labelledby={labelId} className={cx(className)}>
        {children}
      </div>
    )
  }
)

Group.displayName = 'Dropdown.Group'
