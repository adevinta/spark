import { Icon } from '@spark-ui/icon'
import { AlertOutline } from '@spark-ui/icons/dist/icons/AlertOutline'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { WarningOutline } from '@spark-ui/icons/dist/icons/WarningOutline'
import { cx } from 'class-variance-authority'

import { useSelectContext } from './SelectContext'

const icons = {
  error: <AlertOutline />,
  alert: <WarningOutline />,
  success: <Check />,
}

export const SelectStateIndicator = () => {
  const { state } = useSelectContext()

  if (!state) return null

  return (
    <Icon intent={state} className={cx('pointer-events-none text-body-1')}>
      {icons[state]}
    </Icon>
  )
}

SelectStateIndicator.id = 'StateIndicator'
SelectStateIndicator.displayName = 'Select.StateIndicator'
