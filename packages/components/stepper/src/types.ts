import type { AriaButtonOptions } from '@react-aria/button'
import type { NumberFieldAria } from '@react-aria/numberfield'
import type { NumberFieldStateOptions } from '@react-stately/numberfield'
import type { AriaNumberFieldProps } from '@react-types/numberfield'
import type { IconButtonProps } from '@spark-ui/icon-button'
import type { InputGroupProps } from '@spark-ui/input'
import type { RefObject } from 'react'

/**
 * As we're using React Spectrum library to build this component, we also want
 * to build our typing uppon theirs.
 * Still, we have to adapt it to avoid exposing useless props.
 */

export type StepperButtonProps = Omit<IconButtonProps, 'disabled'> &
  Record<'disabled', boolean> &
  Omit<
    AriaButtonOptions<'button'>,
    'elementType' | 'href' | 'target' | 'isDisabled' | 'excludeFromTabOrder' | 'aria-label'
  >

type SpectrumNumberFieldPropsFilter =
  | 'isDisabled'
  | 'isReadOnly'
  | 'isRequired'
  | 'isInvalid'
  | 'validationState'
  | 'validationBehavior'
  | 'validate'
  | 'label'
  | 'description'
  | 'errorMessage'
  | 'isWheelDisabled'
  | 'id'
  | 'onCopy'
  | 'onCut'
  | 'onPaste'
  | 'onCompositionStart'
  | 'onCompositionEnd'
  | 'onCompositionUpdate'
  | 'onSelect'
  | 'onBeforeInput'
  | 'onInput'

export interface UseStepperArgs
  extends Omit<
    Omit<NumberFieldStateOptions, 'locale'> & AriaNumberFieldProps,
    SpectrumNumberFieldPropsFilter
  > {
  inputRef: RefObject<HTMLInputElement>
  /**
   * Sets the component as interactive or not.
   */
  disabled?: boolean
  /**
   * Sets the component as editable or not.
   */
  readOnly?: boolean
  /**
   * Sets the component as mandatory for form validation.
   */
  required?: boolean
  /**
   * The [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt) language code for the locale.
   * @default 'fr'
   */
  locale?: string
}

export type UseStepperReturn = Pick<
  NumberFieldAria,
  'groupProps' | 'inputProps' | 'incrementButtonProps' | 'decrementButtonProps'
>

export type StepperProps = Omit<UseStepperArgs, 'inputRef' | 'aria-label'> & InputGroupProps
