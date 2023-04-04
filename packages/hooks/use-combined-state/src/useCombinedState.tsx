import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import isEqual from 'lodash.isequal'
import { useMountedState } from '@spark-ui/use-mounted-state'

export function useCombinedState(
  controlledValue?: any,
  defaultValue?: any
): [any, (newValue: any, forceFlag?: boolean) => any, boolean, any] {
  const { current: initialValue } = useRef(
    controlledValue === undefined ? defaultValue : controlledValue
  )
  const [value, setValue] = useState(initialValue)
  const isMounted = useMountedState()
  useLayoutEffect(() => {
    isMounted() && setValue(controlledValue)
  }, [controlledValue, setValue, isMounted])
  const updater = useCallback(
    (newValue: any, forceFlag?: boolean) => {
      if (controlledValue === undefined || forceFlag) {
        !isEqual(newValue, value) && setValue(newValue)
      }
    },
    [controlledValue, setValue]
  )

  return [value, updater, controlledValue !== undefined, initialValue]
}
