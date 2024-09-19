import { ComponentPropsWithoutRef, forwardRef, type Ref } from 'react'

export interface ItemProps extends ComponentPropsWithoutRef<'option'> {
  value: string
  children: string
  hidden?: boolean
  disabled?: boolean
}

export const Item = forwardRef(
  (
    { disabled = false, hidden = false, value, children, ...props }: ItemProps,
    forwardedRef: Ref<HTMLOptionElement>
  ) => {
    return (
      <option
        data-spark-component="select-item"
        ref={forwardedRef}
        key={value}
        value={value}
        disabled={disabled}
        hidden={hidden}
        {...props}
      >
        {children}
      </option>
    )
  }
)

Item.displayName = 'Select.Item'
