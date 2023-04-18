import { useMountedState } from '@spark-ui/use-mounted-state'
import isEqual from 'lodash.isequal'
import { useCallback, useLayoutEffect, useRef, useState } from 'react'

/**
 * This hook must be used when a component have both a controlled and uncontrolled mode.
 * It will take care of updating the state value when controlled mode (prop) is updated.
 */
export function useCombinedState<T>(
  controlledValue?: T,
  defaultValue?: T
): [T | undefined, (newValue: T, forceFlag?: boolean) => void, boolean, T | undefined] {
  const { current: initialValue } = useRef(
    controlledValue === undefined ? defaultValue : controlledValue
  )

  const [value, setValue] = useState(initialValue)
  const isMounted = useMountedState()

  useLayoutEffect(() => {
    isMounted() && controlledValue != null && setValue(controlledValue)
  }, [controlledValue, setValue, isMounted])

  const updater = useCallback(
    (newValue: T, forceFlag?: boolean) => {
      if (controlledValue === undefined || forceFlag) {
        !isEqual(newValue, value) && setValue(newValue)
      }
    },
    [controlledValue, setValue, value]
  )

  return [value, updater, controlledValue !== undefined, initialValue]
}
