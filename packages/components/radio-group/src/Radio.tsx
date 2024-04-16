import { cx } from 'class-variance-authority'
import { forwardRef, useId } from 'react'

import { useRadioGroup } from './RadioGroupContext'
import { RadioInput, RadioInputProps } from './RadioInput'
import { RadioLabel } from './RadioLabel'

export type RadioProps = RadioInputProps

export const Radio = forwardRef<HTMLButtonElement, RadioProps>(
  ({ className, children, id, disabled: disabledProp, ...others }, ref) => {
    const innerId = useId()
    const innerLabelId = useId()

    const { intent, disabled, reverse } = useRadioGroup()

    const radioLabel = children && (
      <RadioLabel disabled={disabledProp || disabled} htmlFor={id || innerId} id={innerLabelId}>
        {children}
      </RadioLabel>
    )

    const radioInput = (
      <RadioInput
        ref={ref}
        id={id || innerId}
        intent={intent}
        aria-labelledby={children ? innerLabelId : undefined}
        {...others}
        disabled={disabledProp}
      />
    )

    const content = reverse ? (
      <>
        {radioLabel}
        {radioInput}
      </>
    ) : (
      <>
        {radioInput}
        {radioLabel}
      </>
    )

    return <div className={cx('flex items-start gap-md text-body-1', className)}>{content}</div>
  }
)

Radio.displayName = 'RadioGroup.Radio'
