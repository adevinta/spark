import { CloseButton } from '@spark-ui/close-button'
import { useFormFieldControl } from '@spark-ui/form-field'
import { Slot } from '@spark-ui/slot'
import { useCombinedState } from '@spark-ui/use-combined-state'
import { useMergeRefs } from '@spark-ui/use-merge-refs'
import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  FocusEvent,
  forwardRef,
  MouseEvent,
  PropsWithChildren,
  useRef,
} from 'react'

import { clearInputStyles, inputStyles, InputStylesProps } from './Input.styles'
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
  onClear?: (event: MouseEvent<HTMLButtonElement>) => void
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
      value: valueProp,
      defaultValue: defaultValueProp = '',
      onChange,
      onClear,
      ...others
    },
    forwardRef
  ) => {
    const field = useFormFieldControl()
    const group = useInputGroup()
    const [value, setValue] = useCombinedState(valueProp, defaultValueProp)

    const {
      isHovered,
      isLeftAddonVisible,
      isRightAddonVisible,
      isLeftElementVisible,
      isRightElementVisible,
    } = group
    const Component = asChild ? Slot : 'input'
    const { id, name, isInvalid, isRequired, description } = field
    const intent = isInvalid ? 'error' : intentProp || group.intent || 'neutral'
    const isDisabled = disabledProp ?? group.isDisabled
    const innerRef = useRef<HTMLInputElement>(null)
    const ref = useMergeRefs<HTMLInputElement>(forwardRef, innerRef)

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

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (onChange) {
        onChange(event)
      }
      setValue(event.target.value)
    }

    const handleClear = (event: MouseEvent<HTMLButtonElement>) => {
      onClear && onClear(event)
      setValue('')
      innerRef.current?.focus()
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

    const hasClear = !!onClear
    const hasValue = ![undefined, ''].includes(value as string)

    return (
      <div className="relative inline-flex min-w-sz-240 grow items-start justify-items-start">
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
            hasClear: !!hasClear,
          })}
          disabled={isDisabled}
          required={isRequired}
          aria-describedby={description}
          aria-invalid={isInvalid}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          value={value}
          onChange={handleChange}
          {...others}
        />
        {hasClear && hasValue && (
          <CloseButton
            className={clearInputStyles({
              isRightAddonVisible: !!isRightAddonVisible,
              isRightElementVisible: !!isRightElementVisible,
            })}
            disabled={isDisabled}
            onClick={handleClear}
          />
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
