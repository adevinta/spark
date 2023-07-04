import { AlertOutline } from '@spark-ui/icons/dist/icons/AlertOutline'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { WarningOutline } from '@spark-ui/icons/dist/icons/WarningOutline'
import { ReactElement, ReactNode } from 'react'

import { useInputGroup } from './InputGroupContext'
import { InputIconProps, InputTrailingIcon } from './InputIcon'

export interface InputStateIndicatorProps extends Omit<InputIconProps, 'children'> {
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
  const group = useInputGroup()

  if (!group?.state) return null

  const { state } = group

  const icons = {
    error: errorIcon,
    alert: alertIcon,
    success: successIcon,
  }

  return <InputTrailingIcon {...rest}>{icons[state]}</InputTrailingIcon>
}

InputStateIndicator.displayName = 'InputStateIndicator'
