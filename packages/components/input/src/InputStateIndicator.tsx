import { AlertOutline } from '@spark-ui/icons/dist/icons/AlertOutline'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { WarningOutline } from '@spark-ui/icons/dist/icons/WarningOutline'
import { ReactElement, ReactNode } from 'react'

import { useInputGroup } from './InputGroupContext'
import { InputTrailingIcon, InputTrailingIconProps } from './InputTrailingIcon'

export interface InputStateIndicatorProps extends Omit<InputTrailingIconProps, 'children'> {
  errorIcon?: ReactElement
  alertIcon?: ReactElement
  successIcon?: ReactElement
  children?: ReactNode
}

export const InputStateIndicator = ({
  errorIcon = <AlertOutline />,
  alertIcon = <WarningOutline />,
  successIcon = <Check />,
  ...rest
}: InputStateIndicatorProps) => {
  const { state } = useInputGroup()

  if (!state) return null

  const icons = {
    error: errorIcon,
    alert: alertIcon,
    success: successIcon,
  }

  return (
    <InputTrailingIcon intent={state} {...rest}>
      {icons[state]}
    </InputTrailingIcon>
  )
}

InputStateIndicator.displayName = 'InputGroup.StateIndicator'
