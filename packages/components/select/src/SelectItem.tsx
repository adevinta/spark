import { forwardRef, type Ref } from 'react'

export interface ItemProps {
  disabled?: boolean
  value: string
  children: string
}

export const Item = forwardRef(
  ({ disabled = false, value, children }: ItemProps, forwardedRef: Ref<HTMLOptionElement>) => {
    return (
      <option
        data-spark-component="select-item"
        ref={forwardedRef}
        key={value}
        value={value}
        disabled={disabled}
        // label
      >
        {children}
      </option>
    )
  }
)

Item.displayName = 'Select.Item'
