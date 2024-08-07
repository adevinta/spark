import { forwardRef, type Ref, useEffect } from 'react'

import { useSelectContext } from './SelectContext'
import { type ItemProps } from './SelectItem'

export type PlaceholderProps = Omit<ItemProps, 'value'>

export const Placeholder = forwardRef(
  ({ children, ...props }: PlaceholderProps, forwardedRef: Ref<HTMLOptionElement>) => {
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
        {...props}
      >
        {children}
      </option>
    )
  }
)

Placeholder.displayName = 'Select.Placeholder'
