import { useFormFieldControl } from '@spark-ui/form-field'
import {
  Children,
  ComponentPropsWithoutRef,
  FC,
  forwardRef,
  isValidElement,
  PropsWithChildren,
  ReactElement,
  useMemo,
} from 'react'

import { inputGroupStyles, InputGroupStylesProps } from './InputGroup.styles'
import { InputGroupContext } from './InputGroupContext'
import { InputStateIndicator } from './InputStateIndicator'

export interface InputGroupProps extends ComponentPropsWithoutRef<'div'>, InputGroupStylesProps {
  state?: 'error' | 'alert' | 'success'
}

export const InputGroup = forwardRef<HTMLDivElement, PropsWithChildren<InputGroupProps>>(
  (
    { className, children: childrenProp, state: stateProp, disabled: disabledProp, ...others },
    ref
  ) => {
    const field = useFormFieldControl()
    const children = Children.toArray(childrenProp).filter(isValidElement)
    const state = field.state ?? stateProp
    const disabled = !!disabledProp

    const getDisplayName = (element?: ReactElement) => {
      return element ? (element.type as FC).displayName : ''
    }

    const findElement = (...values: string[]) => {
      return children.find(child => values.includes(getDisplayName(child) || ''))
    }

    const leadingAddon = findElement('InputGroup.LeadingAddon')
    const leadingIcon = findElement('InputGroup.LeadingIcon')
    const stateIndicator = findElement('InputGroup.StateIndicator') || <InputStateIndicator />
    const input = findElement('Input', 'Textarea')
    const trailingIcon = state ? stateIndicator : findElement('InputGroup.TrailingIcon')
    const trailingAddon = findElement('InputGroup.TrailingAddon')

    const hasLeadingAddon = !!leadingAddon
    const hasTrailingAddon = !!trailingAddon
    const hasLeadingIcon = !!leadingIcon
    const hasTrailingIcon = !!trailingIcon || !!state

    const value = useMemo(() => {
      return {
        state,
        disabled,
        hasLeadingIcon,
        hasTrailingIcon,
        hasLeadingAddon,
        hasTrailingAddon,
      }
    }, [state, disabled, hasLeadingIcon, hasTrailingIcon, hasLeadingAddon, hasTrailingAddon])

    return (
      <InputGroupContext.Provider value={value}>
        <div ref={ref} className={inputGroupStyles({ disabled, className })} {...others}>
          {hasLeadingAddon && leadingAddon}

          <div className="relative w-full">
            {input}
            {leadingIcon}
            {trailingIcon}
          </div>

          {hasTrailingAddon && trailingAddon}
        </div>
      </InputGroupContext.Provider>
    )
  }
)

InputGroup.displayName = 'InputGroup'
