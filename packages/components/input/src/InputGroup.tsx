/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable complexity */

import { useFormFieldControl } from '@spark-ui/form-field'
import { useCombinedState } from '@spark-ui/use-combined-state'
import { useMergeRefs } from '@spark-ui/use-merge-refs'
import {
  ChangeEventHandler,
  Children,
  cloneElement,
  ComponentPropsWithoutRef,
  DetailedReactHTMLElement,
  FC,
  forwardRef,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
} from 'react'

import { InputProps } from './Input'
import { inputGroupStyles, InputGroupStylesProps } from './InputGroup.styles'
import { InputGroupContext } from './InputGroupContext'
import { InputStateIndicator } from './InputStateIndicator'

export interface InputGroupProps extends ComponentPropsWithoutRef<'div'>, InputGroupStylesProps {
  state?: 'error' | 'alert' | 'success'
  onClear?: () => void
}

export const InputGroup = forwardRef<HTMLDivElement, PropsWithChildren<InputGroupProps>>(
  (
    {
      className,
      children: childrenProp,
      state: stateProp,
      disabled: disabledProp,
      readOnly: readOnlyProp,
      onClear,
      ...others
    },
    forwardRef,
  ) => {
    const getElementId = (element?: ReactElement) => {
      return element ? (element.type as FC & { id?: string }).id : ''
    }

    const findElement = (...values: string[]) => {
      return children.find(child => values.includes(getElementId(child) || ''))
    }

    const children = Children.toArray(childrenProp).filter(isValidElement)
    const input = findElement('Input') as
      | DetailedReactHTMLElement<InputProps, HTMLInputElement>
      | undefined
    const props = input?.props || {}

    const field = useFormFieldControl()
    const inputRef = useRef<HTMLInputElement>(null!)
    const onClearRef = useRef(onClear)
    const ref = useMergeRefs<HTMLInputElement>(input?.ref, inputRef)
    const [value, onChange] = useCombinedState(
      props.value as string,
      props.defaultValue as string,
      props.onValueChange,
    )
    const state = field.state ?? stateProp
    const leadingAddon = findElement('LeadingAddon')
    const leadingIcon = findElement('LeadingIcon')
    const clearButton = findElement('ClearButton')
    const trailingAddon = findElement('TrailingAddon')
    const stateIndicator = findElement('StateIndicator') || <InputStateIndicator />
    const trailingIcon = state ? stateIndicator : findElement('TrailingIcon')
    const hasLeadingAddon = !!leadingAddon
    const hasTrailingAddon = !!trailingAddon
    const hasLeadingIcon = !!leadingIcon
    const hasTrailingIcon = !!trailingIcon || !!state
    const disabled = field.disabled || !!disabledProp
    const readOnly = field.readOnly || !!readOnlyProp
    const hasClearButton = !!value && !!clearButton && !disabled && !readOnly

    const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
      if (props.onChange) {
        props.onChange(event)
      }

      onChange(event.target.value)
    }

    const handleClear = useCallback(() => {
      if (onClearRef.current) {
        onClearRef.current()
      }

      onChange('')

      inputRef.current.focus()
    }, [onChange])

    const current = useMemo(() => {
      return {
        state,
        disabled,
        readOnly,
        hasLeadingIcon,
        hasTrailingIcon,
        hasLeadingAddon,
        hasTrailingAddon,
        hasClearButton,
        onClear: handleClear,
      }
    }, [
      state,
      disabled,
      readOnly,
      hasLeadingIcon,
      hasTrailingIcon,
      hasLeadingAddon,
      hasTrailingAddon,
      hasClearButton,
      handleClear,
    ])

    useEffect(() => {
      onClearRef.current = onClear
    }, [onClear])

    return (
      <InputGroupContext.Provider value={current}>
        <div
          ref={forwardRef}
          className={inputGroupStyles({ disabled, readOnly, className })}
          {...others}
        >
          {hasLeadingAddon && leadingAddon}

          <div className="relative inline-flex w-full">
            {input &&
              cloneElement(input, {
                ref,
                defaultValue: undefined,
                value: value ?? '',
                onChange: handleChange,
              })}

            {leadingIcon}

            {hasClearButton && clearButton}

            {trailingIcon}
          </div>

          {hasTrailingAddon && trailingAddon}
        </div>
      </InputGroupContext.Provider>
    )
  },
)

InputGroup.displayName = 'InputGroup'
