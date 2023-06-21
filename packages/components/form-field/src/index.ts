import { FC } from 'react'

import { FormField as Root, FormFieldProps } from './FormField'
import { FormFieldAlertMessage, FormFieldAlertMessageProps } from './FormFieldAlertMessage'
import { FormFieldControl, FormFieldControlProps } from './FormFieldControl'
import { FormFieldErrorMessage, FormFieldErrorMessageProps } from './FormFieldErrorMessage'
import { FormFieldHelperMessage, FormFieldHelperMessageProps } from './FormFieldHelperMessage'
import { FormFieldLabel, FormFieldLabelProps } from './FormFieldLabel'
import {
  FormFieldRequiredIndicator,
  FormFieldRequiredIndicatorProps,
} from './FormFieldRequiredIndicator'
import { FormFieldStateMessage, FormFieldStateMessageProps } from './FormFieldStateMessage'
import { FormFieldSuccessMessage, FormFieldSuccessMessageProps } from './FormFieldSuccessMessage'

export { type FormFieldProps } from './FormField'
export { type FormFieldStateMessageProps } from './FormFieldStateMessage'
export { type FormFieldControl, useFormFieldControl } from './FormFieldControl'
export { type FormFieldHelperMessageProps } from './FormFieldHelperMessage'
export { type FormFieldLabelProps } from './FormFieldLabel'
export { type FormFieldRequiredIndicatorProps } from './FormFieldRequiredIndicator'

export const FormField: FC<FormFieldProps> & {
  Label: FC<FormFieldLabelProps>
  Control: FC<FormFieldControlProps>
  StateMessage: FC<FormFieldStateMessageProps>
  SuccessMessage: FC<FormFieldSuccessMessageProps>
  AlertMessage: FC<FormFieldAlertMessageProps>
  ErrorMessage: FC<FormFieldErrorMessageProps>
  HelperMessage: FC<FormFieldHelperMessageProps>
  RequiredIndicator: FC<FormFieldRequiredIndicatorProps>
} = Object.assign(Root, {
  Label: FormFieldLabel,
  Control: FormFieldControl,
  StateMessage: FormFieldStateMessage,
  SuccessMessage: FormFieldSuccessMessage,
  AlertMessage: FormFieldAlertMessage,
  ErrorMessage: FormFieldErrorMessage,
  HelperMessage: FormFieldHelperMessage,
  RequiredIndicator: FormFieldRequiredIndicator,
})
