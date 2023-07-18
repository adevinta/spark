import { FC } from 'react'

import { FormField as Root, FormFieldProps } from './FormField'
import { FormFieldAlertMessage } from './FormFieldAlertMessage'
import { FormFieldCharacterCounter } from './FormFieldCharacterCounter'
import { FormFieldControl } from './FormFieldControl'
import { FormFieldErrorMessage } from './FormFieldErrorMessage'
import { FormFieldHelperMessage } from './FormFieldHelperMessage'
import { FormFieldLabel } from './FormFieldLabel'
import { FormFieldRequiredIndicator } from './FormFieldRequiredIndicator'
import { FormFieldStateMessage } from './FormFieldStateMessage'
import { FormFieldSuccessMessage } from './FormFieldSuccessMessage'

export { type FormFieldProps } from './FormField'
export { type FormFieldStateMessageProps } from './FormFieldStateMessage'
export { type FormFieldControl, useFormFieldControl } from './FormFieldControl'
export { type FormFieldHelperMessageProps } from './FormFieldHelperMessage'
export { type FormFieldSuccessMessageProps } from './FormFieldSuccessMessage'
export { type FormFieldAlertMessageProps } from './FormFieldAlertMessage'
export { type FormFieldErrorMessageProps } from './FormFieldErrorMessage'
export { type FormFieldLabelProps } from './FormFieldLabel'
export { type FormFieldRequiredIndicatorProps } from './FormFieldRequiredIndicator'
export { type FormFieldCharacterCounterProps } from './FormFieldCharacterCounter'

FormFieldLabel.displayName = 'FormField.Label'
FormFieldControl.displayName = 'FormField.Control'
FormFieldStateMessage.displayName = 'FormField.StateMessage'
FormFieldSuccessMessage.displayName = 'FormField.SuccessMessage'
FormFieldAlertMessage.displayName = 'FormField.AlertMessage'
FormFieldErrorMessage.displayName = 'FormField.ErrorMessage'
FormFieldHelperMessage.displayName = 'FormField.HelperMessage'
FormFieldRequiredIndicator.displayName = 'FormField.RequiredIndicator'
FormFieldCharacterCounter.displayName = 'FormField.CharacterCounter'

export const FormField: FC<FormFieldProps> & {
  Label: typeof FormFieldLabel
  Control: typeof FormFieldControl
  StateMessage: typeof FormFieldStateMessage
  SuccessMessage: typeof FormFieldSuccessMessage
  AlertMessage: typeof FormFieldAlertMessage
  ErrorMessage: typeof FormFieldErrorMessage
  HelperMessage: typeof FormFieldHelperMessage
  RequiredIndicator: typeof FormFieldRequiredIndicator
  CharacterCounter: typeof FormFieldCharacterCounter
} = Object.assign(Root, {
  Label: FormFieldLabel,
  Control: FormFieldControl,
  StateMessage: FormFieldStateMessage,
  SuccessMessage: FormFieldSuccessMessage,
  AlertMessage: FormFieldAlertMessage,
  ErrorMessage: FormFieldErrorMessage,
  HelperMessage: FormFieldHelperMessage,
  RequiredIndicator: FormFieldRequiredIndicator,
  CharacterCounter: FormFieldCharacterCounter,
})
