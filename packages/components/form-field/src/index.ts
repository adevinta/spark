import { FC } from 'react'

import { FormField as Root, type FormFieldProps } from './FormField'
import { FormFieldErrorMessage } from './FormFieldErrorMessage'
import { FormFieldHelperMessage } from './FormFieldHelperMessage'
import { FormFieldLabel } from './FormFieldLabel'
import { FormFieldRequiredIndicator } from './FormFieldRequiredIndicator'
import { FormFieldState } from './FormFieldState'

export { type FormFieldProps } from './FormField'
export { type FormFieldErrorMessageProps } from './FormFieldErrorMessage'
export { type FormFieldState, useFormFieldState } from './FormFieldState'
export { type FormFieldHelperMessageProps } from './FormFieldHelperMessage'
export { type FormFieldLabelProps } from './FormFieldLabel'
export { type FormFieldRequiredIndicatorProps } from './FormFieldRequiredIndicator'

FormFieldLabel.displayName = 'FormField.Label'
FormFieldState.displayName = 'FormField.State'
FormFieldErrorMessage.displayName = 'FormField.ErrorMessage'
FormFieldHelperMessage.displayName = 'FormField.HelperMessage'
FormFieldRequiredIndicator.displayName = 'FormField.RequiredIndicator'

export const FormField: FC<FormFieldProps> & {
  Label: typeof FormFieldLabel
  State: typeof FormFieldState
  ErrorMessage: typeof FormFieldErrorMessage
  HelperMessage: typeof FormFieldHelperMessage
  RequiredIndicator: typeof FormFieldRequiredIndicator
} = Object.assign(Root, {
  Label: FormFieldLabel,
  State: FormFieldState,
  ErrorMessage: FormFieldErrorMessage,
  HelperMessage: FormFieldHelperMessage,
  RequiredIndicator: FormFieldRequiredIndicator,
})
