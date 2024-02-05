import { forwardRef, type Ref, useEffect } from 'react'

import { useSelectContext } from './SelectContext'

export interface PlaceholderProps {
  disabled?: boolean
  children: string
}

export const Placeholder = forwardRef(
  ({ disabled = false, children }: PlaceholderProps, forwardedRef: Ref<HTMLOptionElement>) => {
    const { setPlaceholder } = useSelectContext()

    useEffect(() => {
      setPlaceholder(children)
    }, [children])

    return (
      <option
        data-spark-component="select-placeholder"
        ref={forwardedRef}
        key="placeholder"
        value=""
        disabled={disabled}
      >
        {children}
      </option>
    )
  }
)

Placeholder.displayName = 'Select.Placeholder'
