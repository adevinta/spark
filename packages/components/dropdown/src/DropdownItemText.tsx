import { cx } from 'class-variance-authority'
import { forwardRef, type Ref, useEffect, useId } from 'react'

import { useDropdownItemContext } from './DropdownItemContext'

export interface ItemTextProps {
  children: string
}

export const ItemText = forwardRef(
  ({ children }: ItemTextProps, forwardedRef: Ref<HTMLSpanElement>) => {
    const id = `:dropdown-item-text-${useId()}`

    const { setTextId } = useDropdownItemContext()

    useEffect(() => {
      setTextId(id)

      return () => setTextId(undefined)
    })

    return (
      <span id={id} className={cx('inline')} ref={forwardedRef}>
        {children}
      </span>
    )
  }
)

ItemText.displayName = 'Dropdown.ItemText'
