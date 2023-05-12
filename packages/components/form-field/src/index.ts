import { FC } from 'react'

import { FormErrorMessage, FormErrorMessageProps } from './FormErrorMessage'
import { FormField as Root, FormFieldProps } from './FormField'
import { FormFieldState, FormFieldStateProps } from './FormFieldState'
import { FormHelperMessage, FormHelperMessageProps } from './FormHelperMessage'
import { FormLabel, FormLabelProps } from './FormLabel'
import { FormRequiredIndicator, FormRequiredIndicatorProps } from './FormRequiredIndicator'

export const FormField: FC<FormFieldProps> & {
  Label: FC<FormLabelProps>
  State: FC<FormFieldStateProps>
  ErrorMessage: FC<FormErrorMessageProps>
  HelperMessage: FC<FormHelperMessageProps>
  RequiredIndicator: FC<FormRequiredIndicatorProps>
} = Object.assign(Root, {
  Label: FormLabel,
  State: FormFieldState,
  ErrorMessage: FormErrorMessage,
  HelperMessage: FormHelperMessage,
  RequiredIndicator: FormRequiredIndicator,
})
