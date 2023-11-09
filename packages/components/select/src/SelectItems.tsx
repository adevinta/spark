import { PropsWithChildren } from 'react'

import { useSelect } from './SelectContext'

export const Items = ({ children }: PropsWithChildren) => {
  const { placeholder } = useSelect()

  return (
    <select className="absolute left-none top-none h-full w-full opacity-0">
      {placeholder && <option value="">{placeholder}</option>}
      {children}
    </select>
  )
}

Items.id = 'Items'
Items.displayName = 'Select.Items'
