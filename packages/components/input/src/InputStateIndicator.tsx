import { AlertOutline } from '@spark-ui/icons/dist/icons/AlertOutline'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { WarningOutline } from '@spark-ui/icons/dist/icons/WarningOutline'
import { ReactElement } from 'react'

import { useInputGroup } from './InputGroupContext'
import { InputTrailingIcon, InputTrailingIconProps } from './InputTrailingIcon'

export interface InputStateIndicatorProps extends Omit<InputTrailingIconProps, 'children'> {
  errorIcon?: ReactElement
  alertIcon?: ReactElement
  successIcon?: ReactElement
}

export const InputStateIndicator = ({
  errorIcon = <AlertOutline />,
  alertIcon = <WarningOutline />,
  successIcon = <Check />,
  ...others
}: InputStateIndicatorProps) => {
  const { state } = useInputGroup()

  if (!state) return null

  const icons = {
    error: errorIcon,
    alert: alertIcon,
    success: successIcon,
  }

  return (
    <InputTrailingIcon intent={state} {...others}>
      {icons[state]}
    </InputTrailingIcon>
  )
}

InputStateIndicator.id = 'StateIndicator'
InputStateIndicator.displayName = 'InputGroup.StateIndicator'
