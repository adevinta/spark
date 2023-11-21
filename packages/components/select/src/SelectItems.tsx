import { ChangeEvent, ComponentPropsWithoutRef, PropsWithChildren } from 'react'

import { useSelect } from './SelectContext'

export const Items = ({
  children,
  ...rest
}: PropsWithChildren<ComponentPropsWithoutRef<'select'>>) => {
  const { placeholder, value, setValue } = useSelect()

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value)
  }

  return (
    <select
      className="absolute left-none top-none h-full w-full opacity-0"
      value={value}
      onChange={handleChange}
      {...rest}
    >
      {placeholder && <option value="">{placeholder}</option>}
      {children}
    </select>
  )
}

Items.id = 'Items'
Items.displayName = 'Select.Items'
