import { FC } from 'react'

import { FormField as Root, FormFieldProps } from './FormField'
import { FormFieldControl, FormFieldControlProps } from './FormFieldControl'
import { FormFieldHelperMessage, FormFieldHelperMessageProps } from './FormFieldHelperMessage'
import { FormFieldLabel, FormFieldLabelProps } from './FormFieldLabel'
import {
  FormFieldRequiredIndicator,
  FormFieldRequiredIndicatorProps,
} from './FormFieldRequiredIndicator'
import { FormFieldStateMessage, FormFieldStateMessageProps } from './FormFieldStateMessage'

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
  HelperMessage: FC<FormFieldHelperMessageProps>
  RequiredIndicator: FC<FormFieldRequiredIndicatorProps>
} = Object.assign(Root, {
  Label: FormFieldLabel,
  Control: FormFieldControl,
  StateMessage: FormFieldStateMessage,
  HelperMessage: FormFieldHelperMessage,
  RequiredIndicator: FormFieldRequiredIndicator,
})
