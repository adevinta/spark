import { ReactNode, useLayoutEffect } from 'react'

import { useSelect } from './SelectContext'

export const Value = ({
  placeholder,
  children,
}: {
  placeholder?: string
  children?: ReactNode
}) => {
  const { setPlaceHolder, value, options } = useSelect()

  useLayoutEffect(() => {
    setPlaceHolder(placeholder)
  })

  return <span className="grow">{children || options[value || ''] || placeholder}</span>
}

Value.id = 'Value'
Value.displayName = 'Select.Value'
