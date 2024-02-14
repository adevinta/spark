import { cx } from 'class-variance-authority'
import { forwardRef, ReactNode, type Ref } from 'react'

import { ComboboxGroupProvider, useComboboxGroupContext } from './ComboboxItemsGroupContext'

interface GroupProps {
  children: ReactNode
  className?: string
}

export const Group = forwardRef(
  ({ children, ...props }: GroupProps, forwardedRef: Ref<HTMLDivElement>) => {
    return (
      <ComboboxGroupProvider>
        <GroupContent ref={forwardedRef} {...props}>
          {children}
        </GroupContent>
      </ComboboxGroupProvider>
    )
  }
)

const GroupContent = forwardRef(
  ({ children, className }: GroupProps, forwardedRef: Ref<HTMLDivElement>) => {
    const { labelId } = useComboboxGroupContext()

    return (
      <div ref={forwardedRef} role="group" aria-labelledby={labelId} className={cx(className)}>
        {children}
      </div>
    )
  }
)

Group.displayName = 'Combobox.Group'
