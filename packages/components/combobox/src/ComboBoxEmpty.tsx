import { forwardRef, type ReactNode, type Ref } from 'react'

import { useComboboxContext } from './ComboboxContext'

interface EmptyProps {
  className?: string
  children: ReactNode
}

export const Empty = forwardRef(
  ({ className, children }: EmptyProps, forwardedRef: Ref<HTMLDivElement>) => {
    const { filteredItemsMap } = useComboboxContext()

    return filteredItemsMap.size === 0 ? (
      <div ref={forwardedRef} className={className}>
        {children}
      </div>
    ) : null
  }
)

Empty.displayName = 'Combobox.Empty'
