import { useFormFieldState } from '@spark-ui/form-field'
import { ComponentPropsWithoutRef, forwardRef, PropsWithChildren } from 'react'

import { inputStyles, InputStylesProps } from './Input.styles'
import { useInputGroup } from './InputGroupContext'

export interface InputProps
  extends ComponentPropsWithoutRef<'input'>,
    Omit<
      InputStylesProps,
      | 'isDisabled'
      | 'isLeftAddonVisible'
      | 'isRightAddonVisible'
      | 'isLeftElementVisible'
      | 'isRightElementVisible'
    > {}

export const Input = forwardRef<HTMLInputElement, PropsWithChildren<InputProps>>(
  (
    {
      className,
      intent: intentProp,
      disabled: disabledProp,
      onFocus,
      onBlur,
      onMouseEnter,
      onMouseLeave,
      ...others
    },
    ref
  ) => {
    const field = useFormFieldState()
    const group = useInputGroup() || {}

    const { isLeftAddonVisible, isRightAddonVisible, isLeftElementVisible, isRightElementVisible } =
      group
    const { id, name, isInvalid, isRequired, description } = field
    const intent = isInvalid ? 'error' : intentProp || group.intent || 'neutral'
    const isDisabled = disabledProp ?? group.isDisabled

    return (
      <input
        ref={ref}
        id={id}
        name={name}
        className={inputStyles({
          className,
          intent,
          isLeftAddonVisible: !!isLeftAddonVisible,
          isRightAddonVisible: !!isRightAddonVisible,
          isLeftElementVisible: !!isLeftElementVisible,
          isRightElementVisible: !!isRightElementVisible,
        })}
        disabled={isDisabled}
        required={isRequired}
        aria-describedby={description}
        aria-invalid={isInvalid}
        {...others}
      />
    )
  }
)

Input.displayName = 'Input'
