import { Portal } from '@spark-ui/portal'
import { ChangeEvent, PropsWithChildren } from 'react'

import { useSelectContext } from './SelectContext'

export const Items = ({ children }: PropsWithChildren) => {
  const { placeholder, selectElement, value, setValue } = useSelectContext()

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setValue(event.target.value)
  }

  return (
    <Portal container={selectElement} asChild>
      <select
        className="absolute left-none top-none h-full w-full opacity-0"
        value={value}
        onChange={handleChange}
      >
        {placeholder && <option value="">{placeholder}</option>}
        {children}
      </select>
    </Portal>
  )
}

Items.id = 'Items'
Items.displayName = 'Select.Items'
