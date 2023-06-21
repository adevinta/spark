import { useFormFieldState } from '@spark-ui/form-field'
import { ComponentPropsWithoutRef, forwardRef } from 'react'

import { useInputGroup } from './InputGroupContext'
import { inputPrimitiveStyles, InputPrimitiveStylesProps } from './InputPrimitive.styles'

export interface InputPrimitiveProps
  extends ComponentPropsWithoutRef<'input'>,
    Omit<
      InputPrimitiveStylesProps,
      | 'isLeftAddonVisible'
      | 'isRightAddonVisible'
      | 'isLeftElementVisible'
      | 'isRightElementVisible'
    > {}

export const InputPrimitive = forwardRef<HTMLInputElement, InputPrimitiveProps>(
  ({ className, disabled: disabledProp, ...others }, ref) => {
    const field = useFormFieldState()
    const group = useInputGroup() || {}

    const { isLeftAddonVisible, isRightAddonVisible, isLeftElementVisible, isRightElementVisible } =
      group
    const { id, name, isInvalid, isRequired, description } = field
    const isDisabled = group.isDisabled ?? disabledProp

    return (
      <input
        ref={ref}
        id={id}
        name={name}
        className={inputPrimitiveStyles({
          className,
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

InputPrimitive.displayName = 'InputPrimitive'
