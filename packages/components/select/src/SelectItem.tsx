import { useEffect, useRef } from 'react'

import { useSelect } from './SelectContext'

export const Item = ({ children, value }: { children: string; value: string }) => {
  const { registerOption, unregisterOption } = useSelect()
  const valueRef = useRef(value)

  useEffect(() => {
    registerOption(value, children, valueRef.current)

    valueRef.current = value

    return () => {
      unregisterOption(value)
    }
  }, [value, children])

  return <option value={value}>{children}</option>
}

Item.id = 'Item'
Item.displayName = 'Select.Item'
