import { ReactNode } from 'react'

import { useSelect } from './SelectContext'

export const Value = ({
  placeholder,
  children,
}: {
  placeholder?: string
  children?: ReactNode
}) => {
  const { setPlaceHolder, value } = useSelect()
  setPlaceHolder(placeholder)

  return <span className="grow">{children || value || placeholder}</span>
}

Value.id = 'Value'
Value.displayName = 'Select.Value'
