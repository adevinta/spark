import { type NumberFieldAria, useNumberField } from '@react-aria/numberfield'
import { type NumberFieldStateOptions, useNumberFieldState } from '@react-stately/numberfield'
import type { AriaNumberFieldProps } from '@react-types/numberfield'
import type { RefObject } from 'react'

export interface UseStepperArgs
  extends Omit<NumberFieldStateOptions, 'locale' | 'validate' | 'validationState' | 'errorMessage'>,
    Omit<
      AriaNumberFieldProps,
      | 'onCopy'
      | 'onCut'
      | 'onPaste'
      | 'onCompositionStart'
      | 'onCompositionEnd'
      | 'onCompositionUpdate'
      | 'isWheelDisabled'
      | 'validate'
      | 'validationState'
      | 'errorMessage'
    > {
  inputRef: RefObject<HTMLInputElement>
  /**
   * The [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt) language code for the locale.
   * @default 'fr'
   */
  locale?: string
}

type UseStepperReturn = Omit<
  NumberFieldAria,
  'errorMessageProps' | 'validationErrors' | 'validationDetails' | 'labelProps'
>

export const useStepper = ({
  inputRef,
  locale = 'fr',
  ...rest
}: UseStepperArgs): UseStepperReturn => {
  const state = useNumberFieldState({ ...rest, locale })
  const {
    groupProps,
    inputProps,
    incrementButtonProps,
    decrementButtonProps,
    descriptionProps,
    isInvalid,
  } = useNumberField({ isWheelDisabled: false, ...rest }, state, inputRef)

  return {
    groupProps,
    inputProps,
    incrementButtonProps,
    decrementButtonProps,
    descriptionProps,
    isInvalid,
  }
}
