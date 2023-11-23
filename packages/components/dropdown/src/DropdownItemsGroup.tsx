import { cx } from 'class-variance-authority'
import { ReactNode } from 'react'

interface ItemsGroupProps {
  children: ReactNode
  className?: string
}

export const ItemsGroup = ({ children, className }: ItemsGroupProps) => {
  return (
    <div
      role="group"
      className={cx(
        'mb-md border-b-sm border-outline pb-md last:mb-none last:border-b-none last:pb-none',
        className
      )}
    >
      {children}
    </div>
  )
}

ItemsGroup.id = 'ItemsGroup'
ItemsGroup.displayName = 'Dropdown.ItemsGroup'
