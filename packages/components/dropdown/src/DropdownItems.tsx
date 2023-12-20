import { cx } from 'class-variance-authority'
import { forwardRef, ReactNode, type Ref } from 'react'

import { useDropdownContext } from './DropdownContext'

interface ItemsProps {
  children: ReactNode
  className?: string
}

export const Items = forwardRef(
  ({ children, className, ...props }: ItemsProps, forwardedRef: Ref<HTMLUListElement>) => {
    const { isOpen, getMenuProps, hasPopover, setLastInteractionType } = useDropdownContext()

    const downshiftProps = getMenuProps({
      onMouseMove: () => {
        setLastInteractionType('mouse')
      },
    })

    return (
      <ul
        ref={forwardedRef}
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
  }
)

Items.displayName = 'Dropdown.Items'
