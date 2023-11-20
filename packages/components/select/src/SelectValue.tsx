import { ReactNode, useLayoutEffect } from 'react'

import { useSelectContext } from './SelectContext'

export const Value = ({
  placeholder,
  children,
}: {
  placeholder?: string
  children?: ReactNode
}) => {
  const { setPlaceHolder, value, options } = useSelectContext()

  useLayoutEffect(() => {
    setPlaceHolder(placeholder)
  })

  const valueLabel = value ? options.get(value) : options.get('')

  return <span className="grow">{children || valueLabel || placeholder}</span>
}

Value.id = 'Value'
Value.displayName = 'Select.Value'
