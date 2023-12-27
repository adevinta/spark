import { Icon } from '@spark-ui/icon'
import { AlertOutline } from '@spark-ui/icons/dist/icons/AlertOutline'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { WarningOutline } from '@spark-ui/icons/dist/icons/WarningOutline'
import { cx } from 'class-variance-authority'

import { useDropdownContext } from './DropdownContext'

const icons = {
  error: <AlertOutline />,
  alert: <WarningOutline />,
  success: <Check />,
}

export const DropdownStateIndicator = () => {
  const { state } = useDropdownContext()

  if (!state) return null

  return (
    <Icon intent={state} className={cx('pointer-events-none text-body-1')}>
      {icons[state]}
    </Icon>
  )
}

DropdownStateIndicator.id = 'StateIndicator'
DropdownStateIndicator.displayName = 'Dropdown.StateIndicator'
