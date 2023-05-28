import { useFormFieldState } from '@spark-ui/form-field'
import {
  ComponentPropsWithoutRef,
  FocusEvent,
  forwardRef,
  MouseEvent,
  PropsWithChildren,
} from 'react'

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

    const handleMouseEnter = (event: MouseEvent<HTMLInputElement>) => {
      if (onMouseEnter) {
        onMouseEnter(event)
      }

      if (group.onMouseEnter) {
        group.onMouseEnter()
      }
    }

    const handleMouseLeave = (event: MouseEvent<HTMLInputElement>) => {
      if (onMouseLeave) {
        onMouseLeave(event)
      }

      if (group.onMouseLeave) {
        group.onMouseLeave()
      }
    }

    return (
      <input
        ref={ref}
        id={id}
        name={name}
        className={inputStyles({
          className,
          intent,
          isDisabled: !!isDisabled,
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
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        {...others}
      />
    )
  }
)

Input.displayName = 'Input'
