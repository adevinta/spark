import { forwardRef } from 'react'

import { RadioInput, RadioInputProps } from './RadioInput'
import { RadioLabel } from './RadioLabel'
import { useRadioGroup } from './useRadioGroup'

export type RadioProps = RadioInputProps

export const Radio = forwardRef<HTMLButtonElement, RadioProps>(
  (
    { intent: intentProp, size: sizeProp, disabled: disabledProp, className, children, ...others },
    ref
  ) => {
    const context = useRadioGroup()
    const intent = intentProp || context.intent
    const size = sizeProp || context.size
    const disabled = disabledProp || context.disabled

    console.log('xd', disabled)

    return (
      <RadioLabel disabled={disabled}>
        <RadioInput ref={ref} intent={intent} size={size} {...others} />
        {children}
      </RadioLabel>
    )
  }
)
