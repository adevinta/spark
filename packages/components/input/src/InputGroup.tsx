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

import { InputGroupContext } from './InputGroupContext'
import { InputStateIndicator } from './InputStateIndicator'
export interface InputGroupProps extends ComponentPropsWithoutRef<'div'> {
  state?: 'error' | 'alert' | 'success'
  isDisabled?: boolean
}

export const InputGroup = forwardRef<HTMLDivElement, PropsWithChildren<InputGroupProps>>(
  ({ className, children: childrenProp, state: stateProp, isDisabled, ...others }, ref) => {
    const field = useFormFieldControl()
    const children = Children.toArray(childrenProp).filter(isValidElement)
    const state = field.state ?? stateProp

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
        isDisabled: !!isDisabled,
        hasLeadingIcon,
        hasTrailingIcon,
        hasLeadingAddon,
        hasTrailingAddon,
      }
    }, [state, isDisabled, hasLeadingIcon, hasTrailingIcon, hasLeadingAddon, hasTrailingAddon])

    return (
      <InputGroupContext.Provider value={value}>
        <div ref={ref} className={'relative inline-flex w-full'} {...others}>
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
