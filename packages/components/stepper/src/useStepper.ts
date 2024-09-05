import { type NumberFieldAria, useNumberField } from '@react-aria/numberfield'
import { type NumberFieldStateOptions, useNumberFieldState } from '@react-stately/numberfield'
import type { AriaNumberFieldProps } from '@react-types/numberfield'
import type { RefObject } from 'react'

interface UseStepperArgs extends Omit<NumberFieldStateOptions, 'locale'>, AriaNumberFieldProps {
  stepperRef: RefObject<HTMLInputElement | null>
  /**
   * The [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt) language code for the locale.
   * @default 'fr'
   */
  locale?: string
}

type UseStepperReturn = NumberFieldAria

export const useStepper = ({
  stepperRef,
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
    errorMessageProps,
    descriptionProps,
    isInvalid,
    validationErrors,
    validationDetails,
  } = useNumberField(rest, state, stepperRef)

  return {
    groupProps,
    labelProps,
    inputProps,
    incrementButtonProps,
    decrementButtonProps,
    errorMessageProps,
    descriptionProps,
    isInvalid,
    validationErrors,
    validationDetails,
  }
}
