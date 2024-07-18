import { cx } from 'class-variance-authority'
import { forwardRef, type ReactNode, type Ref } from 'react'

import { useComboboxContext } from './ComboboxContext'

interface EmptyProps {
  className?: string
  children: ReactNode
}

export const Empty = forwardRef(
  ({ className, children }: EmptyProps, forwardedRef: Ref<HTMLDivElement>) => {
    const ctx = useComboboxContext()
    const hasNoItemVisible = ctx.filteredItemsMap.size === 0

    return hasNoItemVisible ? (
      <div
        ref={forwardedRef}
        className={cx('px-lg py-md text-body-1 text-on-surface/dim-1', className)}
      >
        {children}
      </div>
    ) : null
  }
)

Empty.displayName = 'Combobox.Empty'
