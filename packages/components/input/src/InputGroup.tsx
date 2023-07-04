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

import { InputContainer, InputContainerProps } from './InputContainer'
import { inputGroupStyles, InputGroupStylesProps } from './InputGroup.styles'
import { InputGroupContext } from './InputGroupContext'
import { InputStateIndicator } from './InputStateIndicator'
export interface InputGroupProps extends ComponentPropsWithoutRef<'div'>, InputGroupStylesProps {
  state?: InputContainerProps['state']
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
    const input = findElement('Input')
    const trailingIcon = state ? <InputStateIndicator /> : findElement('InputGroup.TrailingIcon')
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
        <div
          ref={ref}
          className={inputGroupStyles({
            className,
          })}
          {...others}
        >
          {hasLeadingAddon && leadingAddon}

          <InputContainer state={state}>
            {input}
            {leadingIcon}
            {trailingIcon}
          </InputContainer>

          {hasTrailingAddon && trailingAddon}
        </div>
      </InputGroupContext.Provider>
    )
  }
)

InputGroup.displayName = 'InputGroup'
