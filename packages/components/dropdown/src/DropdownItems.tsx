import { cx } from 'class-variance-authority'
import React, { ReactNode } from 'react'

import { useDropdownContext } from './DropdownContext'

interface ItemsProps {
  children: ReactNode
  className?: string
}

export const Items = React.forwardRef(({ children, className, ...props }: ItemsProps, ref) => {
  const { isOpen, getMenuProps, hasPopover, setLastInteractionType } = useDropdownContext()

  const downshiftProps = getMenuProps({
    onMouseMove: () => {
      setLastInteractionType('mouse')
    },
  })

  return (
    <ul
      ref={ref}
      className={cx(
        className,
        'flex flex-col',
        isOpen ? 'block' : 'pointer-events-none opacity-0',
        hasPopover && 'p-lg'
      )}
      {...props}
      {...downshiftProps}
      data-spark-component="dropdown-items"
    >
      {children}
    </ul>
  )
})

Items.displayName = 'Dropdown.Items'
