import { cx } from 'class-variance-authority'
import { forwardRef, ReactNode, type Ref } from 'react'

import { SelectGroupProvider, useSelectGroupContext } from './SelectItemsGroupContext'

interface GroupProps {
  children: ReactNode
  className?: string
}

export const Group = forwardRef(
  ({ children, ...props }: GroupProps, forwardedRef: Ref<HTMLOptGroupElement>) => {
    return (
      <SelectGroupProvider>
        <GroupContent ref={forwardedRef} {...props}>
          {children}
        </GroupContent>
      </SelectGroupProvider>
    )
  }
)

const GroupContent = forwardRef(
  ({ children, className }: GroupProps, forwardedRef: Ref<HTMLOptGroupElement>) => {
    const { groupLabel } = useSelectGroupContext()

    return (
      <optgroup
        data-spark-component="select-group"
        ref={forwardedRef}
        className={cx(className)}
        label={groupLabel}
      >
        {children}
      </optgroup>
    )
  }
)

Group.displayName = 'Select.Group'
