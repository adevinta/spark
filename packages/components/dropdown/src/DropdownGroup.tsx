import { cx } from 'class-variance-authority'
import { ReactNode } from 'react'

import { DropdownGroupProvider, useDropdownGroupContext } from './DropdownItemsGroupContext'

interface GroupProps {
  children: ReactNode
  className?: string
}

export const Group = ({ children, ...props }: GroupProps) => {
  return (
    <DropdownGroupProvider>
      <GroupContent {...props}>{children}</GroupContent>
    </DropdownGroupProvider>
  )
}

const GroupContent = ({ children, className }: GroupProps) => {
  const { labelId } = useDropdownGroupContext()

  return (
    <div role="group" aria-labelledby={labelId} className={cx(className)}>
      {children}
    </div>
  )
}

Group.id = 'Group'
Group.displayName = 'Dropdown.Group'
