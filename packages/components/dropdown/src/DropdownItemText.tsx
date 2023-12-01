import { useId } from '@radix-ui/react-id'
import { cx } from 'class-variance-authority'
import { useEffect } from 'react'

import { useDropdownItemContext } from './DropdownItemContext'

export interface ItemTextProps {
  children: string
}

export const ItemText = ({ children }: ItemTextProps) => {
  const id = useId()

  const { setTextId } = useDropdownItemContext()

  useEffect(() => {
    setTextId(id)

    return () => setTextId(undefined)
  })

  return (
    <span id={id} className={cx('inline')}>
      {children}
    </span>
  )
}

ItemText.id = 'ItemText'
ItemText.displayName = 'Dropdown.ItemText'
