import { useFormFieldControl } from '@spark-ui/form-field'
import { Slot } from '@spark-ui/slot'
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
    > {
  asChild?: boolean
}

export const Input = forwardRef<HTMLInputElement, PropsWithChildren<InputProps>>(
  (
    {
      className,
      intent: intentProp = 'neutral',
      disabled: disabledProp = false,
      asChild,
      onFocus,
      onBlur,
      onMouseEnter,
      onMouseLeave,
      ...others
    },
    ref
  ) => {
    const field = useFormFieldControl()
    const group = useInputGroup() || {}

    const {
      isHovered,
      isLeftAddonVisible,
      isRightAddonVisible,
      isLeftElementVisible,
      isRightElementVisible,
    } = group
    const { id, name, state, description, isInvalid, isRequired } = field
    const intent = state ?? group.intent ?? intentProp
    const isDisabled = group.isDisabled ?? disabledProp
    const Component = asChild ? Slot : 'input'

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
      <Component
        ref={ref}
        id={id}
        name={name}
        className={inputStyles({
          className,
          intent,
          isHovered: !!isHovered,
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
