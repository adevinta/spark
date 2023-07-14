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
  const group = useInputGroup()

  if (!group?.state) return null

  const { state } = group

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

InputStateIndicator.displayName = 'InputGroup.StateIndicator'
