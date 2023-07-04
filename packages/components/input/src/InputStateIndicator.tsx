import { Icon } from '@spark-ui/icon'
import { AlertOutline } from '@spark-ui/icons/dist/icons/AlertOutline'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { WarningOutline } from '@spark-ui/icons/dist/icons/WarningOutline'
import { ComponentPropsWithoutRef } from 'react'

import { useInputGroup } from './InputGroupContext'
import { InputTrailingIcon } from './InputIcon'

export type InputStateIndicatorProps = ComponentPropsWithoutRef<'div'>

export const InputStateIndicator = ({ ...rest }: InputStateIndicatorProps) => {
  const group = useInputGroup()

  if (!group?.state) return null

  const { state } = group

  const stateMap = {
    error: { icon: <AlertOutline /> },
    alert: { icon: <WarningOutline /> },
    success: { icon: <Check /> },
  }

  return (
    <InputTrailingIcon {...rest}>
      <Icon intent={state} size="md">
        {stateMap[state].icon}
      </Icon>
    </InputTrailingIcon>
  )
}

InputStateIndicator.displayName = 'InputStateIndicator'
