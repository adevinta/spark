import { cx } from 'class-variance-authority'
import React, { ReactNode, RefObject } from 'react'

import { useComboboxContext } from './ComboboxContext'
import { ComboboxGroupProvider, useComboboxGroupContext } from './ComboboxItemsGroupContext'

interface GroupProps {
  children: ReactNode
  className?: string
  ref?: RefObject<HTMLDivElement>
}

export const Group = ({ children, ref: forwardedRef, ...props }: GroupProps) => {
  return (
    <ComboboxGroupProvider>
      <GroupContent ref={forwardedRef} {...props}>
        {children}
      </GroupContent>
    </ComboboxGroupProvider>
  )
}

const GroupContent = ({ children, className, ref: forwardedRef }: GroupProps) => {
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

Group.displayName = 'Combobox.Group'
