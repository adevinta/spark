/* eslint-disable complexity */
import { useFormFieldControl } from '@spark-ui/form-field'
import {
  Children,
  cloneElement,
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

    const input = findElement('Input', 'TextField', 'Textarea')
    const stateIndicator = findElement('InputGroup.StateIndicator')

    const leftAddon = findElement('InputGroup.LeftAddon')
    const leftElement = findElement('InputGroup.LeftElement')

    const rightElement = state ? stateIndicator : findElement('InputGroup.RightElement')
    const rightAddon = findElement('InputGroup.RightAddon')

    const isLeftAddonVisible = !!leftAddon
    const isRightAddonVisible = !!rightAddon
    const isLeftElementVisible = !!leftElement
    const isRightElementVisible = !!rightElement || !!state
    const isInput = getDisplayName(input) !== 'TextField'

    const value = useMemo(() => {
      return {
        state,
        isDisabled: !!isDisabled,
        isLeftElementVisible,
        isRightElementVisible,
        isLeftAddonVisible,
        isRightAddonVisible,
      }
    }, [
      state,
      isDisabled,
      isLeftElementVisible,
      isRightElementVisible,
      isLeftAddonVisible,
      isRightAddonVisible,
    ])

    return (
      <InputGroupContext.Provider value={value}>
        <div
          ref={ref}
          className={inputGroupStyles({
            className,
          })}
          {...others}
        >
          {isLeftAddonVisible && leftAddon}

          {isInput ? (
            <>
              {input}

              <InputContainer state={state} />

              {leftElement}
              {rightElement}
            </>
          ) : (
            cloneElement(input as ReactElement, {
              elements: (
                <>
                  {leftElement}
                  {rightElement}
                </>
              ),
            })
          )}

          {isRightAddonVisible && rightAddon}
        </div>
      </InputGroupContext.Provider>
    )
  }
)

InputGroup.displayName = 'InputGroup'
