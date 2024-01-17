import { Icon } from '@spark-ui/icon'
import { AlertOutline } from '@spark-ui/icons/dist/icons/AlertOutline'
import { Check } from '@spark-ui/icons/dist/icons/Check'
import { WarningOutline } from '@spark-ui/icons/dist/icons/WarningOutline'
import { cx } from 'class-variance-authority'

import { useComboboxContext } from './ComboboxContext'

const icons = {
  error: <AlertOutline />,
  alert: <WarningOutline />,
  success: <Check />,
}

export const ComboboxStateIndicator = () => {
  const { state } = useComboboxContext()

  if (!state) return null

  return (
    <Icon intent={state} className={cx('pointer-events-none text-body-1')}>
      {icons[state]}
    </Icon>
  )
}

ComboboxStateIndicator.id = 'StateIndicator'
ComboboxStateIndicator.displayName = 'Combobox.StateIndicator'
