import { useNumberField } from '@react-aria/numberfield'
import { useNumberFieldState } from '@react-stately/numberfield'

import { mapReactSpectrumAttrs, type UseStepperArgs, type UseStepperReturn } from './types'

export const useStepper = ({
  inputRef,
  locale = 'fr',
  ...rest
}: UseStepperArgs): UseStepperReturn => {
  const state = useNumberFieldState({ ...mapReactSpectrumAttrs(rest), locale })
  const { groupProps, inputProps, incrementButtonProps, decrementButtonProps } = useNumberField(
    { isWheelDisabled: false, ...mapReactSpectrumAttrs(rest) },
    state,
    inputRef
  )

  return {
    groupProps,
    inputProps,
    incrementButtonProps,
    decrementButtonProps,
  }
}
