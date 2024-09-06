import { type NumberFieldAria, useNumberField } from '@react-aria/numberfield'
import { type NumberFieldStateOptions, useNumberFieldState } from '@react-stately/numberfield'
import type { AriaNumberFieldProps } from '@react-types/numberfield'
import type { RefObject } from 'react'

export interface UseStepperArgs
  extends Omit<NumberFieldStateOptions, 'locale'>, // + validate, validationBehavior, errorMessage ?
    Omit<
      AriaNumberFieldProps,
      | 'onCopy'
      | 'onCut'
      | 'onPaste'
      | 'onCompositionStart'
      | 'onCompositionEnd'
      | 'onCompositionUpdate'
      | 'isWheelDisabled'
      // isInvalid, validate, validationBehavior, errorMessage ?
    > {
  inputRef: RefObject<HTMLInputElement | null>
  /**
   * The [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt) language code for the locale.
   * @default 'fr'
   */
  locale?: string
}

type UseStepperReturn = NumberFieldAria

export const useStepper = ({
  inputRef,
  locale = 'fr',
  ...rest
}: UseStepperArgs): UseStepperReturn => {
  const state = useNumberFieldState({ ...rest, locale })
  const {
    groupProps,
    labelProps,
    inputProps,
    incrementButtonProps,
    decrementButtonProps,
    descriptionProps,
    isInvalid, // ??
    errorMessageProps, // ??
    validationErrors, // ??
    validationDetails, // ??
  } = useNumberField({ isWheelDisabled: false, ...rest }, state, inputRef)

  return {
    groupProps,
    labelProps,
    inputProps,
    incrementButtonProps,
    decrementButtonProps,
    descriptionProps,
    isInvalid, // ??
    errorMessageProps, // ??
    validationErrors, // ??
    validationDetails, // ??
  }
}
