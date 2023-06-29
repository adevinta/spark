import { Icon } from '@spark-ui/icon'
import { AlertOutline } from '@spark-ui/icons/dist/icons/AlertOutline'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { WarningOutline } from '@spark-ui/icons/dist/icons/WarningOutline'

import { useInputGroup } from './InputGroupContext'

export type InputStatusIndicatorProps = any

export const InputStatusIndicator = () => {
  const group = useInputGroup()

  if (!group?.status || group?.status === 'neutral') return null

  const { status } = group

  const statusMap = {
    error: { icon: <AlertOutline /> },
    alert: { icon: <WarningOutline /> },
    success: { icon: <Check /> },
  }

  return (
    <div className="flex items-center pr-lg align-middle">
      <Icon intent={status} size="md">
        {statusMap[status].icon}
      </Icon>
    </div>
  )
}

InputStatusIndicator.displayName = 'InputStatusIndicator'
