import { forwardRef } from 'react'

import { useRadioGroup } from './RadioGroupContext'
import { RadioInput, RadioInputProps } from './RadioInput'
import { RadioLabel } from './RadioLabel'

export type RadioProps = RadioInputProps

export const Radio = forwardRef<HTMLButtonElement, RadioProps>(
  ({ className, children, disabled: disabledProp, ...others }, ref) => {
    const context = useRadioGroup()

    const { intent, size } = context
    const disabled = disabledProp || context.disabled

    return (
      <RadioLabel className={className} disabled={disabled}>
        <RadioInput ref={ref} intent={intent} size={size} {...others} />
        {children}
      </RadioLabel>
    )
  }
)

Radio.displayName = 'RadioGroup.Radio'
