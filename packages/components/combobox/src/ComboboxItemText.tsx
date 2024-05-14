import { cx } from 'class-variance-authority'
import { forwardRef, type Ref, useEffect, useId } from 'react'

import { ID_PREFIX } from './ComboboxContext'
import { useComboboxItemContext } from './ComboboxItemContext'

export interface ItemTextProps {
  children: string
  className?: string
}

export const ItemText = forwardRef(
  ({ children, className }: ItemTextProps, forwardedRef: Ref<HTMLSpanElement>) => {
    const id = `${ID_PREFIX}-item-text-${useId()}`

    const { setTextId } = useComboboxItemContext()

    useEffect(() => {
      setTextId(id)

      return () => setTextId(undefined)
    })

    return (
      <span id={id} className={cx('inline', className)} ref={forwardedRef}>
        {children}
      </span>
    )
  }
)

ItemText.displayName = 'Combobox.ItemText'
