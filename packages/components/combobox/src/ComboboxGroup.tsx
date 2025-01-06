import { cx } from 'class-variance-authority'
import React, { forwardRef, ReactNode, type Ref } from 'react'

import { useComboboxContext } from './ComboboxContext'
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
    const ctx = useComboboxContext()
    const groupCtx = useComboboxGroupContext()

    const hasVisibleOptions = React.Children.toArray(children).some(child => {
      return (
        React.isValidElement(child) &&
        ctx.filteredItemsMap.get((child.props as { value: string }).value)
      )
    })

    return hasVisibleOptions ? (
      <div
        ref={forwardedRef}
        role="group"
        aria-labelledby={groupCtx.groupLabelId}
        className={cx(className)}
      >
        {children}
      </div>
    ) : null
  }
)

Group.displayName = 'Combobox.Group'
