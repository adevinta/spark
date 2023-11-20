import { useEffect, useRef } from 'react'

import { useSelectContext } from './SelectContext'

export const Item = ({ children, value }: { children: string; value: string }) => {
  const { registerOption, unregisterOption } = useSelectContext()
  let { current: lastValue } = useRef(value)

  useEffect(() => {
    registerOption(value, children, lastValue)

    lastValue = value

    return () => {
      unregisterOption(value)
    }
  }, [value, children])

  return <option value={value}>{children}</option>
}

Item.id = 'Item'
Item.displayName = 'Select.Item'
