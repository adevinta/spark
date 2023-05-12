import { FC } from 'react'

import { FormField as Root, FormFieldProps } from './FormField'
import { FormFieldErrorMessage, FormFieldErrorMessageProps } from './FormFieldErrorMessage'
import { FormFieldHelperMessage, FormFieldHelperMessageProps } from './FormFieldHelperMessage'
import { FormFieldLabel, FormFieldLabelProps } from './FormFieldLabel'
import {
  FormFieldRequiredIndicator,
  FormFieldRequiredIndicatorProps,
} from './FormFieldRequiredIndicator'
import { FormFieldState, FormFieldStateProps } from './FormFieldState'

export { type FormFieldProps } from './FormField'
export { type FormFieldErrorMessageProps } from './FormFieldErrorMessage'
export { type FormFieldState, useFormFieldState } from './FormFieldState'
export { type FormFieldHelperMessageProps } from './FormFieldHelperMessage'
export { type FormFieldLabelProps } from './FormFieldLabel'
export { type FormFieldRequiredIndicatorProps } from './FormFieldRequiredIndicator'

export const FormField: FC<FormFieldProps> & {
  Label: FC<FormFieldLabelProps>
  State: FC<FormFieldStateProps>
  ErrorMessage: FC<FormFieldErrorMessageProps>
  HelperMessage: FC<FormFieldHelperMessageProps>
  RequiredIndicator: FC<FormFieldRequiredIndicatorProps>
} = Object.assign(Root, {
  Label: FormFieldLabel,
  State: FormFieldState,
  ErrorMessage: FormFieldErrorMessage,
  HelperMessage: FormFieldHelperMessage,
  RequiredIndicator: FormFieldRequiredIndicator,
})
