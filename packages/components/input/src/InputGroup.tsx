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
  KeyboardEventHandler,
  PropsWithChildren,
  ReactElement,
  useCallback,
  useMemo,
  useRef,
} from 'react'

import { InputProps } from './Input'
import { inputGroupStyles, InputGroupStylesProps } from './InputGroup.styles'
import { InputGroupContext } from './InputGroupContext'
import { InputStateIndicator } from './InputStateIndicator'

export interface InputGroupProps extends ComponentPropsWithoutRef<'div'>, InputGroupStylesProps {
  state?: 'error' | 'alert' | 'success'
}

export const InputGroup = forwardRef<HTMLDivElement, PropsWithChildren<InputGroupProps>>(
  (
    {
      className,
      children: childrenProp,
      state: stateProp,
      disabled: disabledProp,
      onKeyDown,
      ...others
    },
    forwardRef
  ) => {
    const getDisplayName = (element?: ReactElement) => {
      return element ? (element.type as FC).displayName : ''
    }

    const findElement = (...values: string[]) => {
      return children.find(child => values.includes(getDisplayName(child) || ''))
    }

    const children = Children.toArray(childrenProp).filter(isValidElement)
    const input = findElement('Input', 'Textarea') as
      | DetailedReactHTMLElement<InputProps, HTMLInputElement>
      | undefined
    const props = input?.props || {}

    const field = useFormFieldControl()
    const inputRef = useRef<HTMLInputElement>(null!)
    const ref = useMergeRefs<HTMLInputElement>(input?.ref, inputRef)
    const [value, onChange] = useCombinedState<string | number | readonly string[] | undefined>(
      props.value,
      props.defaultValue
    )
    const leadingAddon = findElement('InputGroup.LeadingAddon')
    const leadingIcon = findElement('InputGroup.LeadingIcon')
    const clearButton = findElement('InputGroup.ClearButton')
    const trailingAddon = findElement('InputGroup.TrailingAddon')
    const state = field.state ?? stateProp
    const trailingIcon = state ? <InputStateIndicator /> : findElement('InputGroup.TrailingIcon')
    const hasLeadingAddon = !!leadingAddon
    const hasTrailingAddon = !!trailingAddon
    const hasLeadingIcon = !!leadingIcon
    const hasTrailingIcon = !!trailingIcon || !!state
    const hasClearButton = !!value && !!clearButton
    const disabled = !!disabledProp

    const handleChange: ChangeEventHandler<HTMLInputElement> = event => {
      onChange(event.target.value)
    }

    const handleClear = useCallback(() => {
      onChange('')
      inputRef.current.focus()
    }, [onChange])

    const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = event => {
      if (onKeyDown) {
        onKeyDown(event)
      }

      if (event.key === 'Escape') {
        handleClear()
      }
    }

    const current = useMemo(() => {
      return {
        state,
        disabled,
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
      hasLeadingIcon,
      hasTrailingIcon,
      hasLeadingAddon,
      hasTrailingAddon,
      hasClearButton,
      handleClear,
    ])

    return (
      <InputGroupContext.Provider value={current}>
        <div
          ref={forwardRef}
          className={inputGroupStyles({ disabled, className })}
          onKeyDown={hasClearButton ? handleKeyDown : onKeyDown}
          {...others}
        >
          {hasLeadingAddon && leadingAddon}

          <div className="relative inline-flex w-full">
            {input &&
              cloneElement(input, {
                ref,
                value,
                defaultValue: undefined,
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
  }
)

InputGroup.displayName = 'InputGroup'
