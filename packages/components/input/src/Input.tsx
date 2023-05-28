import { useFormFieldState } from 'packages/components/form-field/dist'
import { ComponentPropsWithoutRef, FocusEvent, forwardRef, PropsWithChildren } from 'react'

import { inputStyles, InputStylesProps } from './Input.styles'
import { useInputGroup } from './InputGroupContext'

export interface InputProps
  extends ComponentPropsWithoutRef<'input'>,
    Omit<
      InputStylesProps,
      | 'isHovered'
      | 'isLeftAddonVisible'
      | 'isRightAddonVisible'
      | 'isLeftElementVisible'
      | 'isRightElementVisible'
    > {}

export const Input = forwardRef<HTMLInputElement, PropsWithChildren<InputProps>>(
  (
    {
      id: idProp,
      className,
      intent: intentProp,
      onFocus,
      disabled: disabledProp,
      onBlur,
      ...others
    },
    ref
  ) => {
    const field = useFormFieldState()
    const group = useInputGroup() || {}

    const {
      isHovered,
      isLeftAddonVisible,
      isRightAddonVisible,
      isLeftElementVisible,
      isRightElementVisible,
    } = group
    const { isInvalid, isRequired, description } = field
    const intent = isInvalid ? 'error' : intentProp || group.intent || 'neutral'
    const id = idProp ?? field.id
    const isDisabled = disabledProp ?? group.isDisabled

    const handleFocus = (event: FocusEvent<HTMLInputElement>) => {
      if (onFocus) {
        onFocus(event)
      }

      if (group.onFocus) {
        group.onFocus()
      }
    }

    const handleBlur = (event: FocusEvent<HTMLInputElement>) => {
      if (onBlur) {
        onBlur(event)
      }

      if (group.onBlur) {
        group.onBlur()
      }
    }

    return (
      <input
        ref={ref}
        id={id}
        className={inputStyles({
          className,
          intent,
          isDisabled: !!isDisabled,
          isHovered: !!isHovered,
          isLeftAddonVisible: !!isLeftAddonVisible,
          isRightAddonVisible: !!isRightAddonVisible,
          isLeftElementVisible: !!isLeftElementVisible,
          isRightElementVisible: !!isRightElementVisible,
        })}
        disabled={isDisabled}
        required={isRequired}
        aria-describedby={description}
        aria-invalid={isInvalid}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...others}
      />
    )
  }
)

Input.displayName = 'Input'
