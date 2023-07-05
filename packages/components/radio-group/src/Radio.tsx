import { useId } from '@radix-ui/react-id'
import { cx } from 'class-variance-authority'
import { forwardRef } from 'react'

import { useRadioGroup } from './RadioGroupContext'
import { RadioInput, RadioInputProps } from './RadioInput'
import { RadioLabel } from './RadioLabel'

export type RadioProps = RadioInputProps

export const Radio = forwardRef<HTMLButtonElement, RadioProps>(
  ({ className, children, id, disabled: disabledProp, ...others }, ref) => {
    const innerId = useId()
    const innerLabelId = useId()

    const { intent, disabled } = useRadioGroup()

    return (
      <div className={cx('flex items-center gap-md text-body-1', className)}>
        <RadioInput
          ref={ref}
          id={id || innerId}
          intent={intent}
          aria-labelledby={children ? innerLabelId : undefined}
          {...others}
        />

        {children && (
          <RadioLabel disabled={disabledProp || disabled} htmlFor={id || innerId} id={innerLabelId}>
            {children}
          </RadioLabel>
        )}
      </div>
    )
  }
)

Radio.displayName = 'RadioGroup.Radio'
